export const classExpectations = [
  ['CRThing', 'Thing', []],
  ['CRAction', 'Action', ['CRThing']],
  [
    'CRActionStatusType',
    'ActionStatusType',
    ['CRStatusEnumeration', 'CREnumeration', 'CRIntangible', 'CRThing'],
  ],
  ['CRAdministrativeArea', 'AdministrativeArea', ['CRPlace', 'CRThing']],
  [
    'CRAggregateRating',
    'AggregateRating',
    ['CRRating', 'CRIntangible', 'CRThing'],
  ],
  ['CRAudience', 'Audience', ['CRIntangible', 'CRThing']],
  [
    'CRBreadcrumbList',
    'BreadcrumbList',
    ['CRItemList', 'CRIntangible', 'CRThing'],
  ],
  [
    'CRContactPoint',
    'ContactPoint',
    ['CRStructuredValue', 'CRIntangible', 'CRThing'],
  ],
  ['CRCountry', 'Country', ['CRAdministrativeArea', 'CRPlace', 'CRThing']],
  ['CRCreativeWork', 'CreativeWork', ['CRThing']],
  ['CRDefinedTerm', 'DefinedTerm', ['CRIntangible', 'CRThing']],
  ['CRDefinedTermSet', 'DefinedTermSet', ['CRCreativeWork', 'CRThing']],
  [
    'CRDigitalPlatformEnumeration',
    'DigitalPlatformEnumeration',
    ['CREnumeration', 'CRIntangible', 'CRThing'],
  ],
  ['CREntryPoint', 'EntryPoint', ['CRIntangible', 'CRThing']],
  ['CREnumeration', 'Enumeration', ['CRIntangible', 'CRThing']],
  ['CREvent', 'Event', ['CRThing']],
  [
    'CREventAttendanceModeEnumeration',
    'EventAttendanceModeEnumeration',
    ['CREnumeration', 'CRIntangible', 'CRThing'],
  ],
  [
    'CREventStatusType',
    'EventStatusType',
    ['CRStatusEnumeration', 'CREnumeration', 'CRIntangible', 'CRThing'],
  ],
  [
    'CRGeoCoordinates',
    'GeoCoordinates',
    ['CRStructuredValue', 'CRIntangible', 'CRThing'],
  ],
  ['CRGeoShape', 'GeoShape', ['CRStructuredValue', 'CRIntangible', 'CRThing']],
  ['CRGeospatialGeometry', 'GeospatialGeometry', ['CRIntangible', 'CRThing']],
  ['CRHowTo', 'HowTo', ['CRCreativeWork', 'CRThing']],
  ['CRHowToDirection', 'HowToDirection', ['CRCreativeWork', 'CRThing']],
  ['CRHowToItem', 'HowToItem', ['CRListItem', 'CRIntangible', 'CRThing']],
  ['CRHowToSection', 'HowToSection', ['CRCreativeWork', 'CRThing']],
  ['CRHowToStep', 'HowToStep', ['CRCreativeWork', 'CRThing']],
  [
    'CRHowToSupply',
    'HowToSupply',
    ['CRHowToItem', 'CRListItem', 'CRIntangible', 'CRThing'],
  ],
  ['CRHowToTip', 'HowToTip', ['CRCreativeWork', 'CRThing']],
  [
    'CRHowToTool',
    'HowToTool',
    ['CRHowToItem', 'CRListItem', 'CRIntangible', 'CRThing'],
  ],
  ['CRIdReference', undefined, []],
  [
    'CRImageObject',
    'ImageObject',
    ['CRMediaObject', 'CRCreativeWork', 'CRThing'],
  ],
  ['CRIntangible', 'Intangible', ['CRThing']],
  ['CRItemList', 'ItemList', ['CRIntangible', 'CRThing']],
  [
    'CRItemListOrderType',
    'ItemListOrderType',
    ['CREnumeration', 'CRIntangible', 'CRThing'],
  ],
  ['CRListItem', 'ListItem', ['CRIntangible', 'CRThing']],
  [
    'CRLocationFeatureSpecification',
    'LocationFeatureSpecification',
    ['CRPropertyValue', 'CRStructuredValue', 'CRIntangible', 'CRThing'],
  ],
  ['CRMediaObject', 'MediaObject', ['CRCreativeWork', 'CRThing']],
  [
    'CRMonetaryAmount',
    'MonetaryAmount',
    ['CRStructuredValue', 'CRIntangible', 'CRThing'],
  ],
  [
    'CROpeningHoursSpecification',
    'OpeningHoursSpecification',
    ['CRStructuredValue', 'CRIntangible', 'CRThing'],
  ],
  ['CROrganization', 'Organization', ['CRThing']],
  ['CRPerson', 'Person', ['CRThing']],
  ['CRPlace', 'Place', ['CRThing']],
  [
    'CRPostalAddress',
    'PostalAddress',
    ['CRContactPoint', 'CRStructuredValue', 'CRIntangible', 'CRThing'],
  ],
  [
    'CRPropertyValue',
    'PropertyValue',
    ['CRStructuredValue', 'CRIntangible', 'CRThing'],
  ],
  [
    'CRQuantitativeValue',
    'QuantitativeValue',
    ['CRStructuredValue', 'CRIntangible', 'CRThing'],
  ],
  ['CRRating', 'Rating', ['CRIntangible', 'CRThing']],
  ['CRReview', 'Review', ['CRCreativeWork', 'CRThing']],
  ['CRSchedule', 'Schedule', ['CRIntangible', 'CRThing']],
  [
    'CRSoftwareApplication',
    'SoftwareApplication',
    ['CRCreativeWork', 'CRThing'],
  ],
  [
    'CRSpeakableSpecification',
    'SpeakableSpecification',
    ['CRIntangible', 'CRThing'],
  ],
  ['CRSpecialty', 'Specialty', ['CREnumeration', 'CRIntangible', 'CRThing']],
  [
    'CRStatusEnumeration',
    'StatusEnumeration',
    ['CREnumeration', 'CRIntangible', 'CRThing'],
  ],
  ['CRStructuredValue', 'StructuredValue', ['CRIntangible', 'CRThing']],
  ['CRVirtualLocation', 'VirtualLocation', ['CRIntangible', 'CRThing']],
  ['CRWebContent', 'WebContent', ['CRCreativeWork', 'CRThing']],
  ['CRWebPage', 'WebPage', ['CRCreativeWork', 'CRThing']],
  ['CRWebPageElement', 'WebPageElement', ['CRCreativeWork', 'CRThing']],
]

const SHA256_SAMPLE =
  'cf75fc315545b2d2776f717140baa2a4af016af96e3d27ee52a86e6f386694f8'

export const expectedConstructors = classExpectations.map(([name]) => name)

export const expectedSnapshotTypeNames = classExpectations.map(
  ([name]) => `${name}Snapshot`
)

export const expectedMissingKeys = {
  CRAdministrativeArea: [
    'containedIn',
    'events',
    'map',
    'maps',
    'photos',
    'reviews',
  ],
  CRContactPoint: ['serviceArea'],
  CRCountry: ['containedIn', 'events', 'map', 'maps', 'photos', 'reviews'],
  CRCreativeWork: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
  ],
  CRDefinedTermSet: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
  ],
  CREntryPoint: ['application'],
  CREvent: ['attendees', 'performers', 'subEvents'],
  CRHowTo: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
    'steps',
  ],
  CRHowToDirection: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
  ],
  CRHowToSection: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
    'steps',
  ],
  CRHowToStep: ['awards', 'encodings', 'fileFormat', 'isBasedOnUrl', 'reviews'],
  CRHowToTip: ['awards', 'encodings', 'fileFormat', 'isBasedOnUrl', 'reviews'],
  CRImageObject: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
  ],
  CRMediaObject: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
  ],
  CROrganization: [
    'awards',
    'contactPoints',
    'employees',
    'events',
    'founders',
    'hasProductReturnPolicy',
    'members',
    'reviews',
    'serviceArea',
  ],
  CRPerson: ['awards', 'colleagues', 'contactPoints', 'parents', 'siblings'],
  CRPlace: ['containedIn', 'events', 'map', 'maps', 'photos', 'reviews'],
  CRPostalAddress: ['serviceArea'],
  CRReview: ['awards', 'encodings', 'fileFormat', 'isBasedOnUrl', 'reviews'],
  CRSoftwareApplication: [
    'awards',
    'device',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'requirements',
    'reviews',
  ],
  CRWebContent: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
  ],
  CRWebPage: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
    'significantLinks',
  ],
  CRWebPageElement: [
    'awards',
    'encodings',
    'fileFormat',
    'isBasedOnUrl',
    'reviews',
  ],
}

export function assert(condition, message) {
  if (!condition) throw new Error(message)
}

export function assertEqual(actual, expected, message) {
  if (!Object.is(actual, expected)) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`)
  }
}

export function assertDeepEqual(actual, expected, message) {
  const actualJson = JSON.stringify(actual)
  const expectedJson = JSON.stringify(expected)

  if (actualJson !== expectedJson) {
    throw new Error(`${message}: expected ${expectedJson}, got ${actualJson}`)
  }
}

export function assertThrows(callback, expectedCode, message) {
  try {
    callback()
  } catch (error) {
    if (expectedCode) {
      assertEqual(error?.code, expectedCode, message)
    }
    return error
  }

  throw new Error(`${message}: expected throw`)
}

export function isCRText(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.insertAfter === 'function' &&
    typeof value.removeAfter === 'function' &&
    typeof value.valueOf === 'function'
  )
}

export function isCRSet(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.add === 'function' &&
    typeof value.has === 'function' &&
    typeof value.values === 'function'
  )
}

export function isCRList(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.append === 'function' &&
    typeof value.prepend === 'function' &&
    typeof value.remove === 'function'
  )
}

export function isCRMap(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.set === 'function' &&
    typeof value.get === 'function' &&
    typeof value.entries === 'function'
  )
}

export function isNestedCRDT(value) {
  return isCRText(value) || isCRSet(value) || isCRList(value) || isCRMap(value)
}

export function referenceValue(key = 'sample') {
  return { '@id': `urn:schema-crdt:${key}` }
}

export function typedReference(type, key = type) {
  return { '@id': `urn:schema-crdt:${key}`, '@type': type }
}

export function sampleStringForKey(key) {
  if (key === 'addressCountry') return 'FI'
  if (key === 'latitude') return '60.1699'
  if (key === 'longitude') return '24.9384'
  if (key === 'box') return '60.0 24.0 61.0 25.0'
  if (key === 'circle') return '60.0 24.0 10.5'
  if (key === 'line') return '60.0 24.0 61.0 25.0'
  if (key === 'polygon') return '60.0 24.0 61.0 25.0 62.0 26.0 60.0 24.0'
  if (key === 'httpMethod') return 'POST'
  if (key === 'sha256') return SHA256_SAMPLE
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
    key === 'installUrl' ||
    key === 'thumbnailUrl' ||
    key === 'tourBookingPage'
  ) {
    return `https://example.test/${key}`
  }
  if (key === 'postalCode') return '00100'
  if (key === 'temporal' || key === 'temporalCoverage') {
    return '2026-01-01/2026-12-31'
  }
  return `${key}-value`
}

export function sampleScalarForKey(key, currentValue) {
  if (typeof currentValue === 'string') return sampleStringForKey(key)
  if (typeof currentValue === 'number') return 7
  if (typeof currentValue === 'boolean') return true
  if (currentValue && typeof currentValue === 'object')
    return referenceValue(key)
  return currentValue
}

export function exerciseNestedCRDT(value, key) {
  if (isCRText(value)) {
    value.insertAfter(value.size - 1, key)
    assertEqual(value.valueOf(), key, `${key} CRText value`)
    value.snapshot()
    value.acknowledge()
    value.garbageCollect([])
    return
  }

  if (isCRSet(value)) {
    const sample = referenceValue(key)
    value.add(sample)
    assertEqual(value.size, 1, `${key} CRSet size`)
    assert(value.values().length === 1, `${key} CRSet values`)
    value.snapshot()
    value.acknowledge()
    value.garbageCollect([])
    return
  }

  if (isCRList(value)) {
    value.append(referenceValue(key))
    assertEqual(value.size, 1, `${key} CRList size`)
    value.snapshot()
    value.acknowledge()
    value.garbageCollect([])
    return
  }

  if (isCRMap(value)) {
    value.set(key, referenceValue(key))
    assertEqual(value.size, 1, `${key} CRMap size`)
    assertDeepEqual(value.get(key), referenceValue(key), `${key} CRMap value`)
    value.acknowledge()
  }
}

export function mutableDescriptor(instance, key) {
  let target = instance

  while (target) {
    const descriptor = Object.getOwnPropertyDescriptor(target, key)
    if (descriptor) return descriptor
    target = Object.getPrototypeOf(target)
  }

  return undefined
}

export function exerciseInstance(instance, label) {
  const seenEvents = {
    ack: [],
    change: [],
    delta: [],
    snapshot: [],
  }

  for (const type of Object.keys(seenEvents)) {
    instance.addEventListener?.(type, (event) => {
      seenEvents[type].push(event.detail)
    })
  }

  for (const key of Object.keys(instance)) {
    if (key === '@id' || key === '@type' || key === 'identifier') continue

    const value = instance[key]

    if (isNestedCRDT(value)) {
      exerciseNestedCRDT(value, `${label}-${key}`)
      continue
    }

    const descriptor = mutableDescriptor(instance, key)
    if (!descriptor?.set) continue

    instance[key] = sampleScalarForKey(key, value)
    assertDeepEqual(
      instance[key],
      sampleScalarForKey(key, value),
      `${label}.${key} scalar setter`
    )
  }

  instance.snapshot()
  instance.acknowledge()
  instance.garbageCollect([...seenEvents.ack, null, undefined])

  assert(seenEvents.snapshot.length > 0, `${label} snapshot event`)
  assert(seenEvents.delta.length > 0, `${label} delta events`)

  return seenEvents
}

export function assertExportSurface(api) {
  for (const name of expectedConstructors) {
    assertEqual(typeof api[name], 'function', `${name} export`)
  }

  assertEqual(typeof api.SchemaCRDTError, 'function', 'SchemaCRDTError export')
}

export function assertHierarchy(api) {
  for (const [name, schemaType, parents] of classExpectations) {
    const Constructor = api[name]
    const instance =
      name === 'CRIdReference'
        ? new Constructor(`urn:schema-crdt:${name}`)
        : new Constructor()

    if (schemaType) {
      assertEqual(instance['@type'], schemaType, `${name} @type`)
    }

    for (const parent of parents) {
      assert(
        instance instanceof api[parent],
        `${name} must extend ${parent} at runtime`
      )
    }
  }
}

export function assertRepresentativeReplication(api) {
  const local = new api.CRThing()
  const remote = new api.CRThing()

  remote.url = 'https://example.test/remote'
  local.merge(remote.toJSON())
  assertEqual(local.url, remote.url, 'CRThing scalar merge')

  remote.name.insertAfter(-1, 'Remote Name')
  local.merge({
    name: {
      uuidv7: 'wrapped',
      value: remote.name.toJSON(),
    },
  })
  assertEqual(local.name.valueOf(), 'Remote Name', 'CRThing nested merge')

  const events = []
  const listener = (event) => events.push(event.detail)
  local.addEventListener('delta', listener)
  local.description.insertAfter(-1, 'description')
  local.removeEventListener('delta', listener)
  local.description.insertAfter(local.description.size - 1, ' ignored')
  assertEqual(events.length, 1, 'removeEventListener stops routed events')
  assert(events[0].description, 'routed nested delta key')

  const custom = new api.CRThing(
    undefined,
    { meta: { values: [], tombstones: [] } },
    { meta: 'map' }
  )
  custom.meta.set('key', referenceValue('map'))
  assertDeepEqual(custom.meta.get('key'), referenceValue('map'), 'CRMap route')
}

export function assertValidation(api) {
  const geo = new api.CRGeoCoordinates()
  geo.addressCountry = 'FI'
  geo.latitude = '60.1699'
  geo.longitude = '24.9384'
  assertThrows(
    () => {
      geo.addressCountry = 'fin'
    },
    'VALIDATION_FAILED',
    'CRGeoCoordinates addressCountry validation'
  )
  assertThrows(
    () => {
      geo.latitude = '91'
    },
    'VALIDATION_FAILED',
    'CRGeoCoordinates latitude validation'
  )
  assertThrows(
    () => {
      geo.longitude = '181'
    },
    'VALIDATION_FAILED',
    'CRGeoCoordinates longitude validation'
  )

  const shape = new api.CRGeoShape()
  shape.box = '60.0 24.0 61.0 25.0'
  shape.circle = '60.0 24.0 10'
  shape.line = '60.0 24.0 61.0 25.0'
  shape.polygon = '60.0 24.0 61.0 25.0 62.0 26.0 60.0 24.0'
  assertThrows(
    () => {
      shape.box = '91 24 61 25'
    },
    'VALIDATION_FAILED',
    'CRGeoShape box validation'
  )
  assertThrows(
    () => {
      shape.circle = '60 24 -1'
    },
    'VALIDATION_FAILED',
    'CRGeoShape circle validation'
  )
  assertThrows(
    () => {
      shape.line = '60 24'
    },
    'VALIDATION_FAILED',
    'CRGeoShape line validation'
  )
  assertThrows(
    () => {
      shape.polygon = '60 24 61 25 62 26'
    },
    'VALIDATION_FAILED',
    'CRGeoShape polygon validation'
  )

  const entryPoint = new api.CREntryPoint()
  entryPoint.httpMethod = 'POST'
  assertThrows(
    () => {
      entryPoint.httpMethod = 'post'
    },
    'VALIDATION_FAILED',
    'CREntryPoint httpMethod validation'
  )

  for (const [name, key] of [
    ['CRCreativeWork', 'timeRequired'],
    ['CREvent', 'duration'],
    ['CRHowTo', 'performTime'],
    ['CRHowToDirection', 'totalTime'],
    ['CRMediaObject', 'duration'],
    ['CRSchedule', 'duration'],
  ]) {
    const instance = new api[name]()
    instance[key] = 'PT1H'
    assertThrows(
      () => {
        instance[key] = '1 hour'
      },
      'VALIDATION_FAILED',
      `${name}.${key} duration validation`
    )
  }

  const media = new api.CRImageObject()
  media.sha256 = SHA256_SAMPLE
  assertThrows(
    () => {
      media.sha256 = 'not-sha256'
    },
    'VALIDATION_FAILED',
    'CRImageObject sha256 validation'
  )
}

export function assertIdReference(api) {
  const ref = new api.CRIdReference('urn:schema-crdt:initial')
  assertEqual(ref['@id'], 'urn:schema-crdt:initial', 'CRIdReference string')
  assertDeepEqual(
    ref.toJSON(),
    { '@id': 'urn:schema-crdt:initial' },
    'CRIdReference JSON value'
  )

  const events = []
  ref.addEventListener('snapshot', (event) => events.push(event.detail))
  ref['@id'] = 'urn:schema-crdt:next'
  ref.snapshot()
  ref.acknowledge()
  ref.garbageCollect([])
  assertEqual(ref['@id'], 'urn:schema-crdt:next', 'CRIdReference setter')
  assert(events[0]?.['@id']?.value, 'CRIdReference snapshot event')

  const hydrated = new api.CRIdReference(events[0])
  assertEqual(hydrated['@id'], ref['@id'], 'CRIdReference snapshot hydrate')
  const clone = new api.CRIdReference(ref.toJSON())
  assertEqual(clone['@id'], ref['@id'], 'CRIdReference value hydrate')
}

export function assertEveryClassProperties(api) {
  for (const [name] of classExpectations) {
    if (name === 'CRIdReference') continue
    const instance = new api[name]()
    exerciseInstance(instance, name)
  }
}

export async function runSchemaCRDTSuite(api, options = {}) {
  const label = options.label ?? 'schema-crdt'
  const results = {
    errors: [],
    failed: 0,
    label,
    ok: true,
    passed: 0,
  }

  async function runTest(name, callback) {
    try {
      await callback()
      results.passed += 1
    } catch (error) {
      results.failed += 1
      results.ok = false
      results.errors.push({
        message: error instanceof Error ? error.message : String(error),
        name,
        stack: error instanceof Error ? error.stack : undefined,
      })
    }
  }

  await runTest('export surface', () => assertExportSurface(api))
  await runTest('schema hierarchy', () => assertHierarchy(api))
  await runTest('id reference', () => assertIdReference(api))
  await runTest('replication', () => assertRepresentativeReplication(api))
  await runTest('validation', () => assertValidation(api))
  await runTest('every class property surface', () =>
    assertEveryClassProperties(api)
  )

  return results
}

export function printResults(results) {
  const status = results.ok ? 'PASS' : 'FAIL'
  console.log(
    `${status} ${results.label}: ${results.passed} passed, ${results.failed} failed`
  )

  for (const error of results.errors) {
    console.error(`\n${error.name}`)
    console.error(error.stack ?? error.message)
  }
}

export function ensurePassing(results) {
  if (!results.ok) {
    throw new Error(`${results.label} failed with ${results.failed} failures`)
  }
}
