import * as schema from '../dist/index.js'

const PROFILE_OPS = 50
const CONSTRUCTOR_OPS = 250
const EVENT_OPS = 750
const LIFECYCLE_OPS = 80
const ALL_CLASS_OPS = 8

const SHA256_SAMPLES = [
  'cf75fc315545b2d2776f717140baa2a4af016af96e3d27ee52a86e6f386694f8',
  '71ba3108401647369ffe357b9ba41a0caad9b3d4b06c7cfb205aed4a2650449a',
  'b07a0b29a768ed881a3b02adc0d7536b49e1b050af0318868763c2cddbb68efb',
  '39494d28efb226824110570e19a618751878d3e45da58a2a0bfadcc0c4672abd',
]

const PROFILE_CLASS_NAMES = [
  'CRThing',
  'CRPerson',
  'CROrganization',
  'CRPlace',
  'CREvent',
  'CRAction',
  'CRWebPage',
  'CRImageObject',
  'CRHowTo',
]

const EXCLUDED_SCHEMA_CLASSES = new Set(['CRIdReference'])

const SCHEMA_CLASS_NAMES = Object.keys(schema)
  .filter((name) => /^CR[A-Z]/.test(name))
  .filter((name) => typeof schema[name] === 'function')
  .filter((name) => !EXCLUDED_SCHEMA_CLASSES.has(name))
  .sort()

const BENCHMARKS = [
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'construct',
    name: `${className} empty constructor`,
    n: 1,
    ops: CONSTRUCTOR_OPS,
  })),
  {
    group: 'construct',
    name: 'all schema classes empty constructors',
    n: SCHEMA_CLASS_NAMES.length,
    ops: ALL_CLASS_OPS,
  },
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'populate',
    name: `${className} full setter sweep`,
    n: keyCount(className),
    ops: PROFILE_OPS,
  })),
  {
    group: 'populate',
    name: 'all schema classes full setter sweep',
    n: SCHEMA_CLASS_NAMES.length,
    ops: Math.max(1, Math.floor(ALL_CLASS_OPS / 2)),
  },
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'snapshot',
    name: `${className} toJSON snapshot`,
    n: keyCount(className),
    ops: PROFILE_OPS,
  })),
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'hydrate',
    name: `${className} hydrate populated snapshot`,
    n: keyCount(className),
    ops: PROFILE_OPS,
  })),
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'replica',
    name: `${className} merge populated snapshot`,
    n: keyCount(className),
    ops: PROFILE_OPS,
  })),
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'replica',
    name: `${className} merge nested routed deltas`,
    n: nestedKeyCount(className),
    ops: EVENT_OPS,
  })),
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'events',
    name: `${className} nested event routing`,
    n: nestedKeyCount(className),
    ops: EVENT_OPS,
  })),
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'lifecycle',
    name: `${className} acknowledge`,
    n: keyCount(className),
    ops: LIFECYCLE_OPS,
  })),
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'lifecycle',
    name: `${className} garbage collect`,
    n: keyCount(className),
    ops: LIFECYCLE_OPS,
  })),
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'lifecycle',
    name: `${className} clone / values / entries`,
    n: keyCount(className),
    ops: LIFECYCLE_OPS,
  })),
  ...PROFILE_CLASS_NAMES.map((className) => ({
    className,
    group: 'lifecycle',
    name: `${className} clear populated replica`,
    n: keyCount(className),
    ops: LIFECYCLE_OPS,
  })),
  {
    group: 'reference',
    name: 'CRIdReference set / snapshot / hydrate',
    n: 1,
    ops: CONSTRUCTOR_OPS,
  },
  {
    group: 'validation',
    name: 'format validators accepted values',
    n: 16,
    ops: CONSTRUCTOR_OPS,
  },
  {
    group: 'validation',
    name: 'format validators rejected values',
    n: 16,
    ops: CONSTRUCTOR_OPS,
  },
]

let sink = 0

function Constructor(className) {
  const value = schema[className]
  if (typeof value !== 'function') {
    throw new Error(`missing constructor: ${className}`)
  }
  return value
}

function createInstance(className) {
  return new (Constructor(className))()
}

function createReference(key, iteration) {
  return { '@id': `urn:schema-crdt:bench:${key}:${iteration}` }
}

function createTypedReference(type, key, iteration) {
  return {
    '@id': `urn:schema-crdt:bench:${type}:${key}:${iteration}`,
    '@type': type,
  }
}

function sampleStringForKey(key, iteration) {
  if (key === 'addressCountry') return 'FI'
  if (key === 'latitude') return '60.1699'
  if (key === 'longitude') return '24.9384'
  if (key === 'box') return '60.0 24.0 61.0 25.0'
  if (key === 'circle') return '60.0 24.0 10.5'
  if (key === 'line') return '60.0 24.0 61.0 25.0'
  if (key === 'polygon') return '60.0 24.0 61.0 25.0 62.0 26.0 60.0 24.0'
  if (key === 'httpMethod') return 'POST'
  if (key === 'sha256') return SHA256_SAMPLES[iteration % SHA256_SAMPLES.length]
  if (
    key === 'duration' ||
    key === 'timeRequired' ||
    key === 'performTime' ||
    key === 'prepTime' ||
    key === 'totalTime' ||
    key === 'repeatFrequency'
  ) {
    return 'PT1H'
  }
  if (
    key === 'startTime' ||
    key === 'endTime' ||
    key === 'opens' ||
    key === 'closes' ||
    key === 'doorTime'
  ) {
    return '09:30:00'
  }
  if (
    key.endsWith('Date') ||
    key === 'validFrom' ||
    key === 'validThrough' ||
    key === 'dateCreated' ||
    key === 'dateModified' ||
    key === 'datePublished' ||
    key === 'sdDatePublished' ||
    key === 'lastReviewed'
  ) {
    return '2026-01-02'
  }
  if (
    key.endsWith('Url') ||
    key.endsWith('URL') ||
    key === 'url' ||
    key === 'urlTemplate' ||
    key === 'discussionUrl' ||
    key === 'downloadUrl' ||
    key === 'embedUrl' ||
    key === 'installUrl' ||
    key === 'thumbnailUrl' ||
    key === 'tourBookingPage'
  ) {
    return `https://example.test/${key}/${iteration}`
  }
  if (key === 'postalCode') return '00100'
  if (key === 'temporal' || key === 'temporalCoverage') {
    return '2026-01-01/2026-12-31'
  }
  return `${key}-bench-${iteration}`
}

function sampleScalarForKey(key, currentValue, iteration) {
  if (typeof currentValue === 'string')
    return sampleStringForKey(key, iteration)
  if (typeof currentValue === 'number') return iteration
  if (typeof currentValue === 'boolean') return iteration % 2 === 0
  if (currentValue && typeof currentValue === 'object') {
    return createReference(key, iteration)
  }
  return currentValue
}

function isCRText(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.insertAfter === 'function' &&
    typeof value.removeAfter === 'function' &&
    typeof value.valueOf === 'function'
  )
}

function isCRSet(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.add === 'function' &&
    typeof value.has === 'function' &&
    typeof value.values === 'function'
  )
}

function isCRList(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.append === 'function' &&
    typeof value.prepend === 'function' &&
    typeof value.remove === 'function'
  )
}

function isCRMap(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.set === 'function' &&
    typeof value.get === 'function' &&
    typeof value.entries === 'function'
  )
}

function isNestedCRDT(value) {
  return isCRText(value) || isCRSet(value) || isCRList(value) || isCRMap(value)
}

function mutableDescriptor(instance, key) {
  let target = instance

  while (target) {
    const descriptor = Object.getOwnPropertyDescriptor(target, key)
    if (descriptor) return descriptor
    target = Object.getPrototypeOf(target)
  }

  return undefined
}

function keyCount(className) {
  return Object.keys(createInstance(className)).length
}

function nestedKeyCount(className) {
  return nestedKeys(createInstance(className)).length
}

function nestedKeys(instance) {
  return Object.keys(instance).filter((key) => isNestedCRDT(instance[key]))
}

function mutateNested(value, key, iteration) {
  if (isCRText(value)) {
    value.insertAfter(value.size - 1, `${key}:${iteration}`)
    return
  }

  if (isCRSet(value)) {
    value.add(createReference(key, iteration))
    return
  }

  if (isCRList(value)) {
    value.append(createTypedReference('Thing', key, iteration))
    return
  }

  if (isCRMap(value)) {
    value.set(`${key}:${iteration}`, createReference(key, iteration))
    return
  }
}

function populateInstance(instance, label, iteration) {
  for (const key of Object.keys(instance)) {
    if (key === '@id' || key === '@type' || key === 'identifier') continue

    const value = instance[key]

    if (isNestedCRDT(value)) {
      mutateNested(value, `${label}.${key}`, iteration)
      continue
    }

    const descriptor = mutableDescriptor(instance, key)
    if (!descriptor?.set) continue

    instance[key] = sampleScalarForKey(key, value, iteration)
  }

  return instance
}

function createPopulatedInstance(className, iteration) {
  return populateInstance(createInstance(className), className, iteration)
}

function readSnapshot(instance) {
  let snapshot
  const listener = (event) => {
    snapshot = event.detail
  }
  instance.addEventListener('snapshot', listener)
  try {
    instance.snapshot()
  } finally {
    instance.removeEventListener('snapshot', listener)
  }

  if (!snapshot) {
    throw new Error('snapshot event did not fire')
  }

  return snapshot
}

function readAck(instance) {
  let ack
  const listener = (event) => {
    ack = event.detail
  }
  instance.addEventListener('ack', listener)
  try {
    instance.acknowledge()
  } finally {
    instance.removeEventListener('ack', listener)
  }

  if (!ack) {
    throw new Error('ack event did not fire')
  }

  return ack
}

function collectNestedDeltas(source, amount) {
  const keys = nestedKeys(source)
  if (keys.length === 0) return []

  const deltas = []
  const listener = (event) => {
    deltas.push(event.detail)
  }
  source.addEventListener('delta', listener)
  try {
    for (let iteration = 0; iteration < amount; iteration++) {
      const key = keys[iteration % keys.length]
      mutateNested(source[key], key, iteration)
    }
  } finally {
    source.removeEventListener('delta', listener)
  }

  return deltas
}

function consume(value) {
  if (typeof value === 'number') {
    sink ^= value
    return
  }

  if (typeof value === 'string') {
    sink ^= value.length
    return
  }

  if (Array.isArray(value)) {
    sink ^= value.length
    return
  }

  if (value && typeof value === 'object') {
    sink ^= Object.keys(value).length
  }
}

function time(fn) {
  const start = process.hrtime.bigint()
  const ops = fn()
  const end = process.hrtime.bigint()
  return { ms: Number(end - start) / 1_000_000, ops }
}

function runBenchmark(definition) {
  switch (definition.group) {
    case 'construct': {
      if (definition.className) {
        const Class = Constructor(definition.className)
        return time(() => {
          for (let index = 0; index < definition.ops; index++) {
            consume(new Class()['@type'])
          }
          return definition.ops
        })
      }

      return time(() => {
        for (let index = 0; index < definition.ops; index++) {
          for (const className of SCHEMA_CLASS_NAMES) {
            consume(createInstance(className)['@type'])
          }
        }
        return definition.ops * SCHEMA_CLASS_NAMES.length
      })
    }
    case 'populate': {
      if (definition.className) {
        return time(() => {
          for (let index = 0; index < definition.ops; index++) {
            consume(
              createPopulatedInstance(definition.className, index).toJSON()
            )
          }
          return definition.ops
        })
      }

      return time(() => {
        for (let index = 0; index < definition.ops; index++) {
          for (const className of SCHEMA_CLASS_NAMES) {
            consume(createPopulatedInstance(className, index).toJSON())
          }
        }
        return definition.ops * SCHEMA_CLASS_NAMES.length
      })
    }
    case 'snapshot': {
      const instance = createPopulatedInstance(definition.className, 0)
      return time(() => {
        for (let index = 0; index < definition.ops; index++) {
          consume(instance.toJSON())
        }
        return definition.ops
      })
    }
    case 'hydrate': {
      const snapshot = readSnapshot(
        createPopulatedInstance(definition.className, 0)
      )
      const Class = Constructor(definition.className)
      return time(() => {
        for (let index = 0; index < definition.ops; index++) {
          consume(new Class(snapshot).toJSON())
        }
        return definition.ops
      })
    }
    case 'replica': {
      if (definition.name.endsWith('merge populated snapshot')) {
        const snapshot = readSnapshot(
          createPopulatedInstance(definition.className, 0)
        )
        return time(() => {
          for (let index = 0; index < definition.ops; index++) {
            const target = createInstance(definition.className)
            target.merge(snapshot)
            consume(target.toJSON())
          }
          return definition.ops
        })
      }

      const source = createPopulatedInstance(definition.className, 0)
      const target = createInstance(definition.className)
      const deltas = collectNestedDeltas(source, definition.ops)

      return time(() => {
        for (const delta of deltas) target.merge(delta)
        consume(target.toJSON())
        return deltas.length
      })
    }
    case 'events': {
      const instance = createPopulatedInstance(definition.className, 0)
      const keys = nestedKeys(instance)
      let received = 0
      const listener = (event) => {
        received += Object.keys(event.detail ?? {}).length
      }
      instance.addEventListener('delta', listener)
      try {
        return time(() => {
          for (let index = 0; index < definition.ops; index++) {
            const key = keys[index % keys.length]
            mutateNested(instance[key], key, index)
          }
          consume(received)
          return definition.ops
        })
      } finally {
        instance.removeEventListener('delta', listener)
      }
    }
    case 'lifecycle': {
      if (definition.name.endsWith('acknowledge')) {
        const instance = createPopulatedInstance(definition.className, 0)
        return time(() => {
          for (let index = 0; index < definition.ops; index++) {
            consume(readAck(instance))
          }
          return definition.ops
        })
      }

      if (definition.name.endsWith('garbage collect')) {
        const snapshot = readSnapshot(
          createPopulatedInstance(definition.className, 0)
        )
        const Class = Constructor(definition.className)
        const frontiers = Array.from({ length: 3 }, () =>
          readAck(new Class(snapshot))
        )
        const instances = Array.from(
          { length: definition.ops },
          () => new Class(snapshot)
        )

        return time(() => {
          for (const instance of instances) instance.garbageCollect(frontiers)
          return instances.length
        })
      }

      if (definition.name.endsWith('clone / values / entries')) {
        const instance = createPopulatedInstance(definition.className, 0)
        return time(() => {
          for (let index = 0; index < definition.ops; index++) {
            consume(instance.clone())
            consume(instance.values())
            consume(instance.entries())
          }
          return definition.ops * 3
        })
      }

      const snapshot = readSnapshot(
        createPopulatedInstance(definition.className, 0)
      )
      const Class = Constructor(definition.className)
      const instances = Array.from(
        { length: definition.ops },
        () => new Class(snapshot)
      )
      return time(() => {
        for (const instance of instances) instance.clear()
        return instances.length
      })
    }
    case 'reference': {
      return time(() => {
        for (let index = 0; index < definition.ops; index++) {
          const reference = new schema.CRIdReference(
            `urn:schema-crdt:bench:ref:${index}`
          )
          reference['@id'] = `urn:schema-crdt:bench:ref:${index}:next`
          const snapshot = readSnapshot(reference)
          consume(new schema.CRIdReference(snapshot).toJSON())
        }
        return definition.ops
      })
    }
    case 'validation': {
      if (definition.name.endsWith('accepted values')) {
        return time(() => {
          for (let index = 0; index < definition.ops; index++) {
            const geo = new schema.CRGeoCoordinates()
            geo.addressCountry = 'FI'
            geo.latitude = '60.1699'
            geo.longitude = '24.9384'

            const shape = new schema.CRGeoShape()
            shape.box = '60.0 24.0 61.0 25.0'
            shape.circle = '60.0 24.0 10'
            shape.line = '60.0 24.0 61.0 25.0'
            shape.polygon = '60.0 24.0 61.0 25.0 62.0 26.0 60.0 24.0'

            const entryPoint = new schema.CREntryPoint()
            entryPoint.httpMethod = 'POST'

            const media = new schema.CRMediaObject()
            media.duration = 'PT1H'
            media.sha256 =
              '71ba3108401647369ffe357b9ba41a0caad9b3d4b06c7cfb205aed4a2650449a'

            consume(media.toJSON())
          }
          return definition.ops * definition.n
        })
      }

      return time(() => {
        let rejected = 0
        for (let index = 0; index < definition.ops; index++) {
          for (const reject of invalidValidatorCases()) {
            try {
              reject()
            } catch (error) {
              if (error?.code !== 'VALIDATION_FAILED') throw error
              rejected++
            }
          }
        }
        consume(rejected)
        return rejected
      })
    }
    default:
      throw new Error(`unknown benchmark group: ${definition.group}`)
  }
}

function invalidValidatorCases() {
  return [
    () => {
      const geo = new schema.CRGeoCoordinates()
      geo.addressCountry = 'fin'
    },
    () => {
      const geo = new schema.CRGeoCoordinates()
      geo.latitude = '91'
    },
    () => {
      const geo = new schema.CRGeoCoordinates()
      geo.longitude = '181'
    },
    () => {
      const shape = new schema.CRGeoShape()
      shape.box = '91 24 61 25'
    },
    () => {
      const shape = new schema.CRGeoShape()
      shape.circle = '60 24 -1'
    },
    () => {
      const shape = new schema.CRGeoShape()
      shape.line = '60 24'
    },
    () => {
      const shape = new schema.CRGeoShape()
      shape.polygon = '60 24 61 25 62 26'
    },
    () => {
      const entryPoint = new schema.CREntryPoint()
      entryPoint.httpMethod = 'post'
    },
    () => {
      const media = new schema.CRMediaObject()
      media.duration = 'one hour'
    },
    () => {
      const media = new schema.CRMediaObject()
      media.sha256 = 'not-sha256'
    },
    () => {
      const event = new schema.CREvent()
      event.duration = 'one hour'
    },
    () => {
      const howTo = new schema.CRHowTo()
      howTo.performTime = 'one hour'
    },
    () => {
      const schedule = new schema.CRSchedule()
      schedule.duration = 'one hour'
    },
    () => {
      const openingHours = new schema.CROpeningHoursSpecification()
      openingHours.opens = '25:00:00'
    },
    () => {
      const openingHours = new schema.CROpeningHoursSpecification()
      openingHours.closes = '25:00:00'
    },
    () => {
      const entryPoint = new schema.CREntryPoint()
      entryPoint.urlTemplate = 'not a url'
    },
  ]
}

function formatNumber(number) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(
    number
  )
}

function pad(value, width) {
  return String(value).padEnd(width, ' ')
}

function printTable(rows) {
  const columns = [
    ['group', (row) => row.group],
    ['scenario', (row) => row.name],
    ['n', (row) => formatNumber(row.n)],
    ['ops', (row) => formatNumber(row.ops)],
    ['ms', (row) => formatNumber(row.ms)],
    ['ms/op', (row) => formatNumber(row.msPerOp)],
    ['ops/sec', (row) => formatNumber(row.opsPerSecond)],
  ]
  const widths = columns.map(([header, getter]) =>
    Math.max(header.length, ...rows.map((row) => getter(row).length))
  )

  console.log(
    columns.map(([header], index) => pad(header, widths[index])).join('  ')
  )
  console.log(widths.map((width) => '-'.repeat(width)).join('  '))

  for (const row of rows) {
    console.log(
      columns
        .map(([, getter], index) => pad(getter(row), widths[index]))
        .join('  ')
    )
  }
}

const rows = BENCHMARKS.map((definition) => {
  const result = runBenchmark(definition)
  return {
    ...definition,
    ops: result.ops,
    ms: result.ms,
    msPerOp: result.ms / result.ops,
    opsPerSecond: result.ops / (result.ms / 1_000),
  }
})

console.log('Schema CRDT benchmark')
console.log(
  `node=${process.version} platform=${process.platform} arch=${process.arch}`
)
console.log(`classes=${SCHEMA_CLASS_NAMES.length} sink=${sink}`)
console.log('')
printTable(rows)
