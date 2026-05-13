import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'

import * as api from '../../dist/index.js'
import {
  assertEveryClassProperties,
  assertExportSurface,
  assertHierarchy,
  assertIdReference,
  assertRepresentativeReplication,
  assertValidation,
  expectedConstructors,
  expectedMissingKeys,
  expectedSnapshotTypeNames,
} from '../shared/schema-crdt.mjs'

const root = process.cwd()

function walk(dir, predicate, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(path, predicate, out)
      continue
    }

    if (predicate(path)) out.push(path)
  }

  return out
}

function typeLiteralParts(checker, node) {
  const type = checker.getTypeAtLocation(node.name)
  if (type.flags & ts.TypeFlags.Never) return []
  const parts = type.isUnion() ? type.types : [type]
  return parts
    .map((part) => checker.typeToString(part).replace(/^"|"$/g, ''))
    .sort()
}

test('runtime exports every public constructor', () => {
  assertExportSurface(api)
})

test('runtime class hierarchy follows schema.org inheritance', () => {
  assertHierarchy(api)
})

test('CRIdReference supports value snapshots, CRDT snapshots, events, and GC', () => {
  assertIdReference(api)
})

test('CRIdReference merges deltas and removes listeners', () => {
  const target = new api.CRIdReference('urn:schema-crdt:target')
  const source = new api.CRIdReference('urn:schema-crdt:source')
  const snapshots = []
  const listener = (event) => snapshots.push(event.detail)

  source.addEventListener('snapshot', listener)
  source.snapshot()
  source.removeEventListener('snapshot', listener)
  source.snapshot()

  target.merge(snapshots[0])
  assert.equal(target['@id'], source['@id'])
  assert.equal(snapshots.length, 1)
})

test('CRIdReference falls back to constructor reference when its state entry is absent', () => {
  const ref = new api.CRIdReference('urn:schema-crdt:fallback')
  delete ref.state.__state.entries['@id']
  assert.equal(ref['@id'], 'urn:schema-crdt:fallback')
})

test('representative replicas merge scalar and nested CRDT state', () => {
  assertRepresentativeReplication(api)
})

test('CRThing exposes clone, values, entries, iterators, and inspect symbols', () => {
  const thing = new api.CRThing()
  thing.merge({ url: 'https://example.test/raw-merge-is-ignored' })
  assert.equal(thing.url, '')
  thing.url = 'https://example.test/inspect'

  assert.deepEqual(thing.keys(), ['url'])
  assert.deepEqual(thing.clone(), {
    url: 'https://example.test/inspect',
  })
  assert.deepEqual(thing.values(), ['https://example.test/inspect'])
  assert.deepEqual(thing.entries(), [['url', 'https://example.test/inspect']])
  assert.deepEqual([...thing], [['url', 'https://example.test/inspect']])
  assert.deepEqual(
    thing[Symbol.for('nodejs.util.inspect.custom')](),
    thing.toJSON()
  )
  assert.deepEqual(thing[Symbol.for('Deno.customInspect')](), thing.toJSON())
  assert.equal(
    thing.toString(),
    JSON.stringify({
      url: thing.toJSON().url,
    })
  )

  thing.clear()
  assert.deepEqual(thing.keys(), ['url'])
  assert.equal(thing.url, '')
})

test('CRThing imports JSON-LD as a new replica and exports the live presentation', async () => {
  const thing = await api.CRThing.fromJSONLD({
    '@context': 'https://schema.org',
    '@id': 'urn:anbs:Thing.example',
    '@type': 'Thing',
    name: 'Example',
    sameAs: ['https://example.test/'],
    url: 'https://example.test/thing',
  })

  assert.equal(thing['@id'], 'urn:anbs:Thing.example')
  assert.equal(thing.name.valueOf(), 'Example')
  assert.equal(thing.sameAs.size, 1)
  assert.deepEqual(thing.toJSONLD(), {
    '@context': { '@vocab': 'https://schema.org/' },
    '@id': 'urn:anbs:Thing.example',
    '@type': 'Thing',
    name: 'Example',
    sameAs: ['https://example.test/'],
    url: 'https://example.test/thing',
  })

  const expanded = await api.CRThing.fromJSONLD([
    {
      '@id': 'urn:anbs:Thing.expanded',
      '@type': ['https://schema.org/Thing'],
      'https://schema.org/name': [{ '@value': 'Expanded' }],
    },
  ])
  assert.equal(expanded.name.valueOf(), 'Expanded')

  const arrayTyped = await api.CRThing.fromJSONLD({
    '@type': ['Thing'],
    name: 'Array type',
  })
  assert.equal(arrayTyped.name.valueOf(), 'Array type')

  const untyped = await api.CRThing.fromJSONLD({ name: 'Untyped' })
  assert.equal(untyped.name.valueOf(), 'Untyped')

  const graphed = await api.CRThing.fromJSONLD({
    '@context': 'https://schema.org',
    '@graph': [
      { '@id': 'urn:anbs:Person.skip', '@type': 'Person', name: 'Skip' },
      { '@id': 'urn:anbs:Thing.graph', '@type': 'Thing', name: 'Graph' },
    ],
  })
  assert.equal(graphed['@id'], 'urn:anbs:Thing.graph')

  const identified = await api.CRThing.fromJSONLD({
    '@type': 'Thing',
    identifier: 'public-id',
    name: { '@value': 'Value object' },
  })
  assert.equal(identified.identifier, 'public-id')
  assert.equal(identified.name.valueOf(), 'Value object')

  const howTo = await api.CRHowTo.fromJSONLD({
    '@type': 'HowTo',
    step: [{ '@id': 'urn:anbs:HowToStep.one', '@type': 'HowToStep' }],
  })
  assert.equal(howTo.step.size, 1)
  assert.deepEqual(howTo.toJSONLD().step, [
    { '@id': 'urn:anbs:HowToStep.one', '@type': 'HowToStep' },
  ])

  const sparse = new api.CRThing()
  sparse.additionalType.add('')
  assert.equal(sparse.toJSONLD().additionalType, undefined)

  class CRSparseThing extends api.CRThing {
    constructor(snapshot) {
      super(snapshot, { data: undefined })
    }
  }
  assert.equal(new CRSparseThing().toJSONLD().data, undefined)

  const work = new api.CRCreativeWork()
  work.about.add({ '@id': 'urn:anbs:Thing.nested', '@type': 'Thing' })
  assert.deepEqual(work.toJSONLD().about, [
    { '@id': 'urn:anbs:Thing.nested', '@type': 'Thing' },
  ])

  await assert.rejects(() => api.CRPerson.fromJSONLD({ '@type': 'Thing' }), {
    code: 'VALIDATION_FAILED',
  })
  await assert.rejects(() => api.CRThing.fromJSONLD(null), {
    code: 'VALIDATION_FAILED',
  })
  await assert.rejects(
    () => api.CRThing.fromJSONLD({ '@type': 'Thing', name: { bad: 'value' } }),
    { code: 'VALIDATION_FAILED' }
  )
  await assert.rejects(
    () => api.CRThing.fromJSONLD({ '@context': { bad: 1 }, '@graph': [] }),
    { code: 'VALIDATION_FAILED' }
  )

  const canonical = await thing.getCanonicalPresentation()
  assert.match(canonical, /<urn:anbs:Thing\.example>/)
  assert.match(canonical, /<https:\/\/schema\.org\/name>/)

  const canonicalWithLoader = await thing.getCanonicalPresentation({
    validate: false,
    documentLoader: async () => {
      throw new Error('unused')
    },
  })
  assert.match(canonicalWithLoader, /<urn:anbs:Thing\.example>/)

  await assert.rejects(
    () => new api.CRImageObject().getCanonicalPresentation(),
    {
      code: 'VALIDATION_FAILED',
    }
  )
  await assert.rejects(
    () =>
      new api.CRThing().getCanonicalPresentation({
        context: false,
        validate: false,
      }),
    { code: 'CANONICALIZATION_FAILED' }
  )
})

test('CRThing state event router ignores internally routed keys and forwards primitive details', () => {
  const thing = new api.CRThing()
  const deltas = []
  const acks = []

  thing.addEventListener('delta', (event) => deltas.push(event.detail))
  thing.addEventListener('ack', (event) => acks.push(event.detail))

  thing.state.__eventTarget.dispatchEvent(
    new CustomEvent('delta', {
      detail: {
        name: {
          values: [],
          tombstones: [],
        },
      },
    })
  )
  assert.deepEqual(deltas, [])

  thing.state.__eventTarget.dispatchEvent(
    new CustomEvent('ack', {
      detail: 'frontier',
    })
  )
  assert.deepEqual(acks, ['frontier'])
})

test('SchemaCRDTError uses code as fallback message detail', () => {
  const error = new api.SchemaCRDTError('VALIDATION_FAILED')
  assert.equal(error.code, 'VALIDATION_FAILED')
  assert.equal(error.message, '{@sovereignbase/schema-crdt} VALIDATION_FAILED')
})

test('property-specific validators reject invalid lexical values', () => {
  assertValidation(api)
})

test('every CRDT-backed class exposes mutable schema properties that can be exercised', () => {
  assertEveryClassProperties(api)
})

test('src directories keep the one-root-file unit shape', () => {
  for (const entry of readdirSync(join(root, 'src'), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const dir = join(root, 'src', entry.name)
    const rootTsFiles = readdirSync(dir, { withFileTypes: true }).filter(
      (child) => child.isFile() && child.name.endsWith('.ts')
    )
    assert.ok(
      rootTsFiles.length <= 1,
      `${relative(root, dir)} has ${rootTsFiles.length} root TypeScript files`
    )
  }
})

test('src does not leak removed or external schema class placeholders', () => {
  const files = walk(join(root, 'src'), (path) => path.endsWith('.ts'))
  const source = files.map((path) => readFileSync(path, 'utf8')).join('\n')

  assert.equal(source.includes('CRProductReturnPolicy'), false)
  assert.equal(source.includes('OpaqueIdentifier'), false)
})

test('single-value CRText fields are explicitly natural-language content', () => {
  const allowed = [
    'CRCreativeWork.abstract',
    'CRCreativeWork.accessibilitySummary',
    'CRCreativeWork.alternativeHeadline',
    'CRCreativeWork.conditionsOfAccess',
    'CRCreativeWork.copyrightNotice',
    'CRCreativeWork.creditText',
    'CRCreativeWork.headline',
    'CRCreativeWork.text',
    'CRImageObject.embeddedTextCaption',
    'CROrganization.slogan',
    'CRPerson.familyName',
    'CRPerson.givenName',
    'CRPlace.slogan',
    'CRRating.ratingExplanation',
    'CRReview.reviewBody',
    'CRThing.description',
    'CRThing.disambiguatingDescription',
    'CRThing.name',
  ].sort()
  const actual = []

  for (const file of walk(join(root, 'src'), (path) =>
    path.endsWith(join('types', 'types.ts'))
  )) {
    const owner = file.match(
      /[\\/]src[\\/](CR[^\\/]+)[\\/]types[\\/]types\.ts$/
    )?.[1]
    if (!owner) continue

    const source = readFileSync(file, 'utf8')
    for (const match of source.matchAll(
      /\n\s*([A-Za-z0-9_]+): CRTextSnapshot/g
    )) {
      actual.push(`${owner}.${match[1]}`)
    }
  }

  assert.deepEqual(actual.sort(), allowed)
})

test('SchemaCRDTSnapshot union covers every exported class snapshot', () => {
  const source = readFileSync(join(root, 'src', '.types', 'types.ts'), 'utf8')

  for (const snapshotName of expectedSnapshotTypeNames) {
    assert.match(
      source,
      new RegExp(`\\b${snapshotName}\\b`),
      `${snapshotName} missing from SchemaCRDTSnapshot`
    )
  }
})

test('MissingKeys aliases contain only explicitly accepted superseded schema.org keys', () => {
  const files = walk(join(root, 'src'), (path) => path.endsWith('types.ts'))
  const program = ts.createProgram(files, {
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    skipLibCheck: true,
    strict: true,
    target: ts.ScriptTarget.ES2022,
    types: ['node'],
  })
  const checker = program.getTypeChecker()
  const actual = {}
  const extraAliases = []

  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.fileName.includes(`${root.replaceAll('\\', '/')}/src/`)) {
      continue
    }

    for (const statement of sourceFile.statements) {
      if (!ts.isTypeAliasDeclaration(statement)) continue

      if (statement.name.text === 'MissingKeys') {
        const owner = sourceFile.fileName.match(/src\/(CR[^/]+)\/types/)?.[1]
        const parts = typeLiteralParts(checker, statement)
        if (owner && parts.length > 0) actual[owner] = parts
      }

      if (statement.name.text === 'ExtraKeys') {
        const parts = typeLiteralParts(checker, statement)
        if (parts.length > 0) {
          extraAliases.push({
            file: relative(root, sourceFile.fileName),
            parts,
          })
        }
      }
    }
  }

  assert.deepEqual(extraAliases, [])
  assert.deepEqual(actual, expectedMissingKeys)
})

test('dist d.ts exports all class constructors through the package root', () => {
  const source = readFileSync(join(root, 'src', 'index.ts'), 'utf8')

  for (const name of expectedConstructors) {
    if (name === 'CRIdReference') {
      assert.match(source, /export \* from '\.\/CRIdReference\/class\.js'/)
      continue
    }

    assert.match(
      source,
      new RegExp(`export \\* from '\\./${name}/class\\.js'`),
      `${name} root export`
    )
  }
})
