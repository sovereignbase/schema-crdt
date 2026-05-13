[![npm version](https://img.shields.io/npm/v/@sovereignbase/schema-crdt)](https://www.npmjs.com/package/@sovereignbase/schema-crdt)
[![CI](https://github.com/sovereignbase/schema-crdt/actions/workflows/ci.yaml/badge.svg?branch=master)](https://github.com/sovereignbase/schema-crdt/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/sovereignbase/schema-crdt/branch/master/graph/badge.svg)](https://codecov.io/gh/sovereignbase/schema-crdt)
[![license](https://img.shields.io/npm/l/@sovereignbase/schema-crdt)](LICENSE)

# schema-crdt

Schema.org classes modeled as convergent replicated data types.

- [NPM](https://www.npmjs.com/package/@sovereignbase/schema-crdt)
- [JSR](https://jsr.io/@sovereignbase/schema-crdt)
- [Typedoc](https://sovereignbase.dev/schema-crdt/)

## Compatibility

- Runtimes: Node >= 20, modern browsers, Bun, Deno, Cloudflare Workers, Edge Runtime.
- Module format: ESM + CommonJS.
- Required globals / APIs: `EventTarget`, `CustomEvent`, `structuredClone`.
- TypeScript: bundled types.

## Goals

- Schema.org-shaped data that can be edited locally and merged through CRDT gossip.
- A single event-driven API across scalar properties, nested `CRText`, `CRSet`, `CRList`, and `CRMap` properties.
- Runtime class inheritance that follows the implemented Schema.org hierarchy.
- Snapshot, delta, acknowledgement, and garbage-collection behavior aligned with the underlying Sovereignbase CRDT packages.
- Property-specific lexical validation only where Schema.org gives a clear format.

## Installation

```sh
npm install @sovereignbase/schema-crdt
# or
pnpm add @sovereignbase/schema-crdt
# or
yarn add @sovereignbase/schema-crdt
# or
bun add @sovereignbase/schema-crdt
# or
deno add jsr:@sovereignbase/schema-crdt
# or
vlt install jsr:@sovereignbase/schema-crdt
```

## Usage

### Copy-paste example

```ts
import { CRPerson, CRPostalAddress } from '@sovereignbase/schema-crdt'

const alice = new CRPerson()
const bob = new CRPerson(alice.toJSON())

alice.addEventListener('delta', (event) => {
  bob.merge(event.detail)
})

alice.givenName.insertAfter(-1, 'Jori')
alice.familyName.insertAfter(-1, 'Lehtinen')
alice.email.add('jori@example.test')
alice.jobTitle.add('Software engineer')

const address = new CRPostalAddress()
address.streetAddress = 'Example Street 1'
address.addressLocality = 'Helsinki'
address.addressCountry = 'FI'
address.postalCode = '00100'

alice.address.add(address.toJSON())

console.log(bob.givenName.valueOf()) // 'Jori'
console.log(bob.familyName.valueOf()) // 'Lehtinen'
console.log(bob.address.size) // 1
```

### Schema graphs

```ts
import {
  CRGeoCoordinates,
  CRImageObject,
  CRPlace,
  CRPostalAddress,
  CRWebPage,
} from '@sovereignbase/schema-crdt'

const place = new CRPlace()
place.name.insertAfter(-1, 'Sovereignbase Office')
place.url = 'https://example.test/place'
place.telephone = '+358 40 000 0000'

const address = new CRPostalAddress()
address.streetAddress = 'Example Street 1'
address.addressLocality = 'Helsinki'
address.addressCountry = 'FI'
address.postalCode = '00100'

const geo = new CRGeoCoordinates()
geo.latitude = '60.1699'
geo.longitude = '24.9384'
geo.addressCountry = 'FI'

const image = new CRImageObject()
image.contentUrl = 'https://example.test/place.jpg'
image.sha256 =
  '39494d28efb226824110570e19a618751878d3e45da58a2a0bfadcc0c4672abd'

const page = new CRWebPage()
page.primaryImageOfPage.add(image.toJSON())

place.address.add(address.toJSON())
place.geo.add(geo.toJSON())
place.image = 'https://example.test/place.jpg'
place.mainEntityOfPage = 'https://example.test/place'

console.log(place['@type']) // 'Place'
console.log(place.geo.size) // 1
```

### Hydrating root scalar state

```ts
import { CRPlace, type CRPlaceSnapshot } from '@sovereignbase/schema-crdt'

const source = new CRPlace()
let snapshot!: CRPlaceSnapshot

source.addEventListener('snapshot', (event) => {
  snapshot = event.detail
})

source.url = 'https://example.test/market-square'
source.snapshot()

const restored = new CRPlace(snapshot)

console.log(restored.url) // 'https://example.test/market-square'
```

This example assumes the snapshot is kept as a structured-clone-compatible
value. If you persist snapshots through `JSON.stringify` / `JSON.parse`, keep
property values JSON-compatible. Nested `CRText`, `CRSet`, `CRList`, and
`CRMap` properties emit their own routed snapshot and delta payloads; apply
those routed payloads with `merge()`.

### Event channels

```ts
import { CRThing } from '@sovereignbase/schema-crdt'

const replica = new CRThing()

replica.addEventListener('delta', (event) => {
  console.log('delta', event.detail)
})

replica.addEventListener('change', (event) => {
  console.log('change', event.detail)
})

replica.addEventListener('snapshot', (event) => {
  console.log('snapshot', event.detail)
})

replica.addEventListener('ack', (event) => {
  console.log('ack', event.detail)
})

replica.name.insertAfter(-1, 'Example')
replica.sameAs.add('https://example.test/')
replica.url = 'https://example.test/thing'
replica.snapshot()
replica.acknowledge()
```

Nested CRDT events are routed through their Schema.org property key. For
example, editing `thing.name` emits a `delta` whose detail is keyed by `name`,
and adding to `thing.sameAs` emits a `delta` keyed by `sameAs`.

### Acknowledgements and garbage collection

```ts
import { CRThing } from '@sovereignbase/schema-crdt'

const alice = new CRThing()
const bob = new CRThing(alice.toJSON())
const frontiers = new Map<string, unknown>()

alice.addEventListener('delta', (event) => {
  bob.merge(event.detail)
})

bob.addEventListener('delta', (event) => {
  alice.merge(event.detail)
})

alice.addEventListener('ack', (event) => {
  frontiers.set('alice', event.detail)
})

bob.addEventListener('ack', (event) => {
  frontiers.set('bob', event.detail)
})

alice.name.insertAfter(-1, 'first')
alice.name.removeAfter(0, alice.name.size)
alice.name.insertAfter(-1, 'second')

alice.acknowledge()
bob.acknowledge()

alice.garbageCollect([...frontiers.values()])
bob.garbageCollect([...frontiers.values()])
```

### JSON-LD references

```ts
import { CRAction, CRIdReference, CRThing } from '@sovereignbase/schema-crdt'

const owner = new CRIdReference('urn:anbs:Person.alice')

const action = new CRAction()
action.agent.add({ '@id': owner['@id'], '@type': 'Person' })
action.object.add({ '@id': 'urn:anbs:Thing.document' })

const thing = new CRThing()
thing.owner = { '@id': owner['@id'], '@type': 'Person' }
thing.potentialAction.add({ '@id': 'urn:anbs:Action.read', '@type': 'Action' })

console.log(thing.owner['@id']) // 'urn:anbs:Person.alice'
```

The examples use stable application identifiers in the form
`urn:anbs:{@type}.{identifier}`. Do not encode version numbers into `@id`
unless the application intentionally treats every version as a separate
Schema.org node.

Use typed JSON-LD references such as `{ '@id': '...', '@type': 'Person' }`
where a Schema.org property requires a more specific class. Use plain
`{ '@id': '...' }` where the property accepts an untyped node reference.

### JSON-LD presentations

```ts
import { CRThing } from '@sovereignbase/schema-crdt'

const thing = await CRThing.fromJSONLD({
  '@context': 'https://schema.org',
  '@id': 'urn:anbs:Thing.example',
  '@type': 'Thing',
  name: 'Example',
  sameAs: ['https://example.test/'],
})

const jsonld = thing.toJSONLD()
const canonical = await thing.getCanonicalPresentation()

console.log(jsonld.name) // 'Example'
console.log(canonical.includes('https://schema.org/name')) // true
```

`fromJSONLD()` is an async constructor-style import for compacted or expanded
Schema.org JSON-LD. It creates a fresh CRDT instance; it does not merge JSON-LD
into an existing replica. `toJSONLD()` exports the current live Schema.org
presentation as compacted JSON-LD. `toJSON()` remains the CRDT snapshot for
replication and persistence.

`getCanonicalPresentation()` validates the live presentation with
`@adobe/structured-data-validator` and returns jsonld.js URDNA2015 canonical
N-Quads for signing or hashing. That canonical form covers the live JSON-LD
presentation only. If an application needs to sign the whole CRDT state,
canonicalize `toJSON()` separately in the application protocol.

### Validation

```ts
import { CRGeoCoordinates, SchemaCRDTError } from '@sovereignbase/schema-crdt'

const geo = new CRGeoCoordinates()

geo.latitude = '60.1699'
geo.longitude = '24.9384'
geo.addressCountry = 'FI'

try {
  geo.latitude = '91'
} catch (error) {
  if (error instanceof SchemaCRDTError) {
    console.log(error.code) // 'VALIDATION_FAILED'
  }
}
```

Validation is property-specific. The underlying CRDT struct
already checks broad runtime shape compatibility; schema-crdt only adds format
checks where this package defines a clear lexical format, such as geo
coordinates, ISO-like date/time and duration values, HTTP methods, and SHA-256
hex digests.

## Implemented classes

### Core hierarchy

- `CRThing`
- `CRIntangible`
- `CRStructuredValue`
- `CREnumeration`
- `CRStatusEnumeration`
- `CRIdReference`

### Actions and entry points

- `CRAction`
- `CRActionStatusType`
- `CREntryPoint`
- `CRSoftwareApplication`
- `CRDigitalPlatformEnumeration`
- `CRVirtualLocation`

### Creative work and web

- `CRCreativeWork`
- `CRMediaObject`
- `CRImageObject`
- `CRWebPage`
- `CRWebPageElement`
- `CRWebContent`
- `CRSpeakableSpecification`
- `CRReview`
- `CRDefinedTermSet`

### Events and schedules

- `CREvent`
- `CREventStatusType`
- `CREventAttendanceModeEnumeration`
- `CRSchedule`

### HowTo and lists

- `CRHowTo`
- `CRHowToDirection`
- `CRHowToItem`
- `CRHowToSection`
- `CRHowToStep`
- `CRHowToSupply`
- `CRHowToTip`
- `CRHowToTool`
- `CRItemList`
- `CRListItem`
- `CRBreadcrumbList`
- `CRItemListOrderType`

### Places and contact data

- `CRPlace`
- `CRAdministrativeArea`
- `CRCountry`
- `CRPostalAddress`
- `CRContactPoint`
- `CRGeoCoordinates`
- `CRGeoShape`
- `CRGeospatialGeometry`
- `CROpeningHoursSpecification`

### Values, ratings, people, and organizations

- `CRPerson`
- `CROrganization`
- `CRAudience`
- `CRDefinedTerm`
- `CRSpecialty`
- `CRPropertyValue`
- `CRQuantitativeValue`
- `CRMonetaryAmount`
- `CRLocationFeatureSpecification`
- `CRRating`
- `CRAggregateRating`

## Runtime behavior

### Property model

- Scalar Schema.org properties use direct getters and setters.
- Natural-language text properties use `CRText`.
- Code, identifier, contact, coordinate, currency, unit, version, and address
  component properties stay scalar instead of pretending to be collaborative text.
- Multi-value unordered properties use `CRSet`.
- Ordered list properties use `CRList`.
- Custom extension properties can be wired through the `CRThing` constructor's
  CRDT property map.
- Every class exposes `merge()`, `snapshot()`, `acknowledge()`,
  `garbageCollect()`, `toJSON()`, `clone()`, `values()`, `entries()`, and
  iteration through the inherited `CRThing` API.

### Validation and errors

Public field writes and incoming merge payloads can throw `SchemaCRDTError`:

- `VALIDATION_FAILED`
- `CANONICALIZATION_FAILED`

Validation is intentionally narrow. Deprecated and superseded Schema.org
property aliases are omitted instead of being implemented as runtime aliases.

### Safety and copying semantics

- Snapshots are detached structured-clone payloads keyed by Schema.org property name.
- `delta` events are the gossip payloads to send to another replica's `merge()`.
- `change` events describe visible projection changes keyed by Schema.org property name.
- `ack` events are acknowledgement frontiers for `garbageCollect()`.
- `toJSON()` returns the root struct snapshot, not a Schema.org JSON-LD document.
- Nested `CRText`, `CRSet`, `CRList`, and `CRMap` properties expose their own snapshots through routed event payloads.
- Direct `CRText`, `CRSet`, `CRList`, and `CRMap` properties retain their own CRDT semantics.

### Convergence and compaction

- The convergence target is the visible Schema.org-shaped projection.
- Nested CRDT property events are routed through their owning Schema.org key.
- A root class snapshot can hydrate scalar struct state in a fresh class instance.
- Routed nested snapshots and deltas can be merged into the corresponding nested CRDT instance.
- Acknowledgement frontiers are routed by property key so garbage collection can compact nested CRDT history without a second external index.
- `fromJSONLD()` imports compacted or expanded JSON-LD into a new instance,
  `toJSONLD()` exports the live presentation, and `getCanonicalPresentation()`
  canonicalizes that presentation for signatures or hashes.

## Tests

```sh
npm run test
```

What the current test suite covers:

- Coverage on built `dist/**/*.js`: `100%` statements, `100%` branches,
  `100%` functions, and `100%` lines via `c8`.
- Runtime export surface for every public constructor and every snapshot type.
- Runtime class hierarchy against the implemented Schema.org inheritance model.
- Exhaustive property mutation across every CRDT-backed class.
- Scalar setters, nested `CRText`, `CRSet`, `CRList`, and `CRMap` property paths.
- Snapshot hydration, merge, routed deltas, acknowledgements, and garbage collection.
- `CRIdReference` value snapshots, CRDT snapshots, events, listener removal, and merge.
- Property-specific validator success and failure paths.
- Package root exports and source directory shape invariants.
- End-to-end runtime matrix for:
  - Node ESM
  - Node CJS
  - Bun ESM
  - Bun CJS
  - Deno ESM
  - Cloudflare Workers ESM
  - Edge Runtime ESM
  - Browsers via Playwright: Chromium, Firefox, WebKit, mobile Chrome, mobile Safari
- Current status: `npm run test` passes on Node `v22.14.0` (`win32 x64`).

## Benchmarks

```sh
npm run bench
```

The benchmark suite measures schema-crdt orchestration paths rather than the
primitive CRDT operations already covered by the lower-level packages.

Last measured on Node `v22.14.0` (`win32 x64`):

| group        | scenario                                   | classes / keys |  ops |     ms | ms/op |   ops/sec |
| ------------ | ------------------------------------------ | -------------: | ---: | -----: | ----: | --------: |
| `construct`  | `CRThing empty constructor`                |              1 |  250 |  27.44 |  0.11 |  9,111.02 |
| `construct`  | `CRWebPage empty constructor`              |              1 |  250 | 156.22 |  0.62 |  1,600.36 |
| `construct`  | `all schema classes empty constructors`    |             56 |  448 | 155.46 |  0.35 |  2,881.83 |
| `populate`   | `CRPerson full setter sweep`               |             77 |   50 | 261.44 |  5.23 |    191.25 |
| `populate`   | `CRImageObject full setter sweep`          |            147 |   50 | 413.33 |  8.27 |    120.97 |
| `populate`   | `all schema classes full setter sweep`     |             56 |  224 | 726.75 |  3.24 |    308.22 |
| `hydrate`    | `CRPlace hydrate populated snapshot`       |             55 |   50 |  14.07 |  0.28 |  3,553.48 |
| `hydrate`    | `CRImageObject hydrate populated snapshot` |            147 |   50 |  46.82 |  0.94 |  1,068.03 |
| `replica`    | `CRThing merge populated snapshot`         |             14 |   50 |   5.91 |  0.12 |  8,456.23 |
| `replica`    | `CRWebPage merge populated snapshot`       |            134 |   50 |  48.82 |  0.98 |  1,024.22 |
| `events`     | `CRAction nested event routing`            |             18 |  750 |  43.03 |  0.06 | 17,431.40 |
| `lifecycle`  | `CRPerson acknowledge`                     |             77 |   80 |  12.44 |  0.16 |  6,429.73 |
| `lifecycle`  | `CRImageObject garbage collect`            |            147 |   80 |  33.46 |  0.42 |  2,391.09 |
| `reference`  | `CRIdReference set / snapshot / hydrate`   |              1 |  250 |  17.82 |  0.07 | 14,031.78 |
| `validation` | `format validators accepted values`        |             16 | 4000 | 328.01 |  0.08 | 12,194.79 |
| `validation` | `format validators rejected values`        |             16 | 3250 | 880.75 |  0.27 |  3,690.02 |

## License

Apache-2.0
