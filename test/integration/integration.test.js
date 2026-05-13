import { createRequire } from 'node:module'
import { test } from 'node:test'
import assert from 'node:assert/strict'

import * as esmApi from '../../dist/index.js'
import {
  assertEveryClassProperties,
  assertHierarchy,
  assertRepresentativeReplication,
  assertValidation,
  expectedConstructors,
  isCRList,
  isCRSet,
  isCRText,
  referenceValue,
  runSchemaCRDTSuite,
  typedReference,
} from '../shared/schema-crdt.mjs'

const require = createRequire(import.meta.url)
const cjsApi = require('../../dist/index.cjs')

test('ESM and CJS expose the same runtime constructors', () => {
  assert.deepEqual(
    expectedConstructors.filter((name) => typeof esmApi[name] === 'function'),
    expectedConstructors
  )
  assert.deepEqual(
    expectedConstructors.filter((name) => typeof cjsApi[name] === 'function'),
    expectedConstructors
  )
})

test('shared schema-crdt suite passes against ESM build', async () => {
  const results = await runSchemaCRDTSuite(esmApi, { label: 'node esm' })
  assert.equal(results.ok, true, JSON.stringify(results.errors, null, 2))
})

test('shared schema-crdt suite passes against CJS build', async () => {
  const results = await runSchemaCRDTSuite(cjsApi, { label: 'node cjs' })
  assert.equal(results.ok, true, JSON.stringify(results.errors, null, 2))
})

test('JSON-LD references for Person, Organization, ImageObject, WebPage, and Action merge through Thing', () => {
  const thing = new esmApi.CRThing()

  thing.owner = typedReference('Person', 'owner-person')
  assert.deepEqual(thing.owner, typedReference('Person', 'owner-person'))

  thing.owner = typedReference('Organization', 'owner-organization')
  assert.deepEqual(
    thing.owner,
    typedReference('Organization', 'owner-organization')
  )

  thing.image = 'https://example.test/image.png'
  assert.equal(thing.image, 'https://example.test/image.png')

  thing.mainEntityOfPage = 'https://example.test/main-page'
  assert.equal(thing.mainEntityOfPage, 'https://example.test/main-page')

  thing.potentialAction.add(typedReference('Action', 'potential-action'))
  assert.equal(thing.potentialAction.size, 1)
})

test('creative work and place properties accept currently implemented CRDT class references', () => {
  const work = new esmApi.CRCreativeWork()
  work.about.add(referenceValue('about-thing'))
  work.author.add(typedReference('Person', 'author-person'))
  work.publisher.add(typedReference('Organization', 'publisher-organization'))
  work.image = 'https://example.test/image-object'
  work.mainEntityOfPage = 'https://example.test/main-page'
  assert.equal(work.about.size, 1)
  assert.equal(work.author.size, 1)
  assert.equal(work.publisher.size, 1)

  const place = new esmApi.CRPlace()
  place.address.add(typedReference('PostalAddress', 'postal-address'))
  place.aggregateRating.add(typedReference('AggregateRating', 'rating'))
  place.geo.add(typedReference('GeoCoordinates', 'geo-coordinates'))
  place.openingHoursSpecification.add(
    typedReference('OpeningHoursSpecification', 'hours')
  )
  assert.equal(place.address.size, 1)
  assert.equal(place.aggregateRating.size, 1)
  assert.equal(place.geo.size, 1)
  assert.equal(place.openingHoursSpecification.size, 1)
})

test('schema hierarchy, validation, and exhaustive property exercise compose', () => {
  assertHierarchy(esmApi)
  assertValidation(esmApi)
  assertEveryClassProperties(esmApi)
})

test('HowTo, ItemList, and BreadcrumbList keep ordered CRList properties', () => {
  const howTo = new esmApi.CRHowTo()
  assert.ok(isCRList(howTo.step))
  howTo.step.append(typedReference('HowToStep', 'step-1'))
  howTo.step.append(typedReference('HowToStep', 'step-2'))
  assert.equal(howTo.step.size, 2)

  const breadcrumb = new esmApi.CRBreadcrumbList()
  assert.ok(isCRList(breadcrumb.itemListElement))
  breadcrumb.itemListElement.append(typedReference('ListItem', 'crumb-1'))
  assert.equal(breadcrumb.itemListElement.size, 1)
})

test('text and set CRDT properties route events through their schema keys', () => {
  const thing = new esmApi.CRThing()
  const deltas = []
  const changes = []
  const snapshots = []
  const acks = []

  thing.addEventListener('delta', (event) => deltas.push(event.detail))
  thing.addEventListener('change', (event) => changes.push(event.detail))
  thing.addEventListener('snapshot', (event) => snapshots.push(event.detail))
  thing.addEventListener('ack', (event) => acks.push(event.detail))

  assert.ok(isCRText(thing.name))
  thing.name.insertAfter(-1, 'Name')
  assert.equal(thing.name.valueOf(), 'Name')

  assert.ok(isCRSet(thing.sameAs))
  thing.sameAs.add('https://example.test/same')
  thing.sameAs.acknowledge()
  thing.snapshot()

  assert.ok(deltas.some((detail) => detail.name))
  assert.ok(changes.some((detail) => detail.name))
  assert.ok(acks.some((detail) => detail.sameAs))
  assert.ok(snapshots.length > 0)
})

test('replicas can exchange scalar snapshots, nested snapshots, and ack frontiers repeatedly', () => {
  const left = new esmApi.CRThing()
  const right = new esmApi.CRThing()

  for (let index = 0; index < 5; index += 1) {
    right.url = `https://example.test/${index}`
    left.merge(right.toJSON())
    assert.equal(left.url, right.url)

    right.name.insertAfter(right.name.size - 1, String(index))
    left.merge({ name: right.name.toJSON() })
    assert.equal(left.name.valueOf(), right.name.valueOf())

    const acks = []
    left.addEventListener('ack', (event) => acks.push(event.detail))
    left.acknowledge()
    right.garbageCollect(acks)
  }
})

test('aggregate classes retain their schema.org hierarchy and numeric fields', () => {
  const rating = new esmApi.CRAggregateRating()
  rating.ratingValue = 4
  rating.ratingCount = 10
  rating.reviewCount = 3

  assert.ok(rating instanceof esmApi.CRRating)
  assert.equal(rating.ratingValue, 4)
  assert.equal(rating.ratingCount, 10)
  assert.equal(rating.reviewCount, 3)
})

test('Action connects implemented agent, object, result, target, and status references', () => {
  const action = new esmApi.CRAction()
  action.actionStatus = 'https://schema.org/CompletedActionStatus'
  action.agent.add(typedReference('Person', 'agent'))
  action.object.add(referenceValue('object'))
  action.result.add(referenceValue('result'))
  action.target.add(typedReference('EntryPoint', 'entry'))

  assert.equal(action.actionStatus, 'https://schema.org/CompletedActionStatus')
  assert.equal(action.agent.size, 1)
  assert.equal(action.object.size, 1)
  assert.equal(action.result.size, 1)
  assert.equal(action.target.size, 1)
})
