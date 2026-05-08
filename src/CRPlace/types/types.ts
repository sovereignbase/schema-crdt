import type { Place } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgBoolean,
  SchemaOrgInteger,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgPlaceRaw = Extract<Place, { '@type': 'Place' }>

type SchemaOrgPlace = Partial<SchemaOrgPlaceRaw>

export type CRPlaceDefaultShape<Type = 'Place'> = {
  additionalProperty: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  address: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  aggregateRating: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  amenityFeature: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  branchCode: CRTextSnapshot
  containedInPlace: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  containsPlace: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  event: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  faxNumber: CRTextSnapshot
  geo: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoContains: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoCoveredBy: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoCovers: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoCrosses: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoDisjoint: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoEquals: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoIntersects: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoOverlaps: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoTouches: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  geoWithin: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  globalLocationNumber: CRTextSnapshot
  hasCertification: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  hasDriveThroughService: SchemaOrgBoolean
  hasGS1DigitalLink: SchemaOrgURL
  hasMap: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  isAccessibleForFree: SchemaOrgBoolean
  isicV4: CRTextSnapshot
  keywords: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  latitude: CRTextSnapshot
  logo: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  longitude: CRTextSnapshot
  maximumAttendeeCapacity: SchemaOrgInteger
  openingHoursSpecification: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  photo: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  publicAccess: SchemaOrgBoolean
  review: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  slogan: CRTextSnapshot
  smokingAllowed: SchemaOrgBoolean
  specialOpeningHoursSpecification: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  telephone: CRTextSnapshot
  tourBookingPage: SchemaOrgURL
} & CRThingDefaultShape<Type>

export type CRPlaceSnapshot<Type = 'Place'> = CRStructPartialSnapshot<
  CRPlaceDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgPlace, keyof CRPlaceSnapshot>

type ExtraKeys = Exclude<keyof CRPlaceSnapshot, keyof SchemaOrgPlace>

export type CRPlaceState<Type = 'Place'> = {
  additionalProperty: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  address: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  aggregateRating: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  amenityFeature: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  branchCode: Readonly<CRText>
  containedInPlace: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  containsPlace: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  event: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  faxNumber: Readonly<CRText>
  geo: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoContains: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoCoveredBy: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoCovers: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoCrosses: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoDisjoint: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoEquals: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoIntersects: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoOverlaps: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoTouches: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  geoWithin: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  globalLocationNumber: Readonly<CRText>
  hasCertification: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  hasDriveThroughService: SchemaOrgBoolean
  hasGS1DigitalLink: SchemaOrgURL
  hasMap: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  isAccessibleForFree: SchemaOrgBoolean
  isicV4: Readonly<CRText>
  keywords: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  latitude: Readonly<CRText>
  logo: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  longitude: Readonly<CRText>
  maximumAttendeeCapacity: SchemaOrgInteger
  openingHoursSpecification: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  photo: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  publicAccess: SchemaOrgBoolean
  review: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  slogan: Readonly<CRText>
  smokingAllowed: SchemaOrgBoolean
  specialOpeningHoursSpecification: Readonly<
    CRSet<SchemaOrgText | SchemaOrgURL>
  >
  telephone: Readonly<CRText>
  tourBookingPage: SchemaOrgURL
} & CRThingState<Type>
