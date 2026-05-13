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
import type { CRAggregateRatingSnapshot } from '../../CRAggregateRating/types/types.js'
import type { CRGeoCoordinatesSnapshot } from '../../CRGeoCoordinates/types/types.js'
import type { CRGeoShapeSnapshot } from '../../CRGeoShape/types/types.js'
import type { CRGeospatialGeometryRelation } from '../../CRGeospatialGeometry/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRLocationFeatureSpecificationSnapshot } from '../../CRLocationFeatureSpecification/types/types.js'
import type { CROpeningHoursSpecificationSnapshot } from '../../CROpeningHoursSpecification/types/types.js'
import type { CRPostalAddressSnapshot } from '../../CRPostalAddress/types/types.js'
import type { CRPropertyValueSnapshot } from '../../CRPropertyValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgBoolean,
  SchemaOrgInteger,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgPlaceRaw = Extract<Place, { '@type': 'Place' }>

type SchemaOrgPlace = Partial<SchemaOrgPlaceRaw>

export type CRPlaceAdditionalProperty =
  | CRPropertyValueSnapshot
  | CRIdReferenceValue

export type CRPlaceAddress =
  | CRPostalAddressSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

export type CRPlaceAggregateRating =
  | CRAggregateRatingSnapshot
  | CRIdReferenceValue

export type CRPlaceAmenityFeature =
  | CRLocationFeatureSpecificationSnapshot
  | CRIdReferenceValue

export type CRPlaceGeo =
  | CRGeoCoordinatesSnapshot
  | CRGeoShapeSnapshot
  | CRIdReferenceValue

export type CRPlaceOpeningHoursSpecification =
  | CROpeningHoursSpecificationSnapshot
  | CRIdReferenceValue

export type CRPlaceEvent = CRTypedIdReferenceValue<'Event'> | CRIdReferenceValue

export type CRPlaceRelation =
  | CRTypedIdReferenceValue<'Place'>
  | CRIdReferenceValue

export type CRPlaceMap =
  | CRTypedIdReferenceValue<'Map'>
  | SchemaOrgURL
  | CRIdReferenceValue

export type CRPlaceImage =
  | SchemaOrgText
  | SchemaOrgURL
  | CRTypedIdReferenceValue<'ImageObject'>
  | CRTypedIdReferenceValue<'Photograph'>
  | CRIdReferenceValue

export type CRPlaceReview =
  | CRTypedIdReferenceValue<'Review'>
  | CRIdReferenceValue

export type CRPlaceDefaultShape<Type = 'Place'> = {
  additionalProperty: CRSetSnapshot<CRPlaceAdditionalProperty>
  address: CRSetSnapshot<CRPlaceAddress>
  aggregateRating: CRSetSnapshot<CRPlaceAggregateRating>
  amenityFeature: CRSetSnapshot<CRPlaceAmenityFeature>
  branchCode: CRTextSnapshot
  containedInPlace: CRSetSnapshot<CRPlaceRelation>
  containsPlace: CRSetSnapshot<CRPlaceRelation>
  event: CRSetSnapshot<CRPlaceEvent>
  faxNumber: CRTextSnapshot
  geo: CRSetSnapshot<CRPlaceGeo>
  geoContains: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoCoveredBy: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoCovers: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoCrosses: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoDisjoint: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoEquals: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoIntersects: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoOverlaps: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoTouches: CRSetSnapshot<CRGeospatialGeometryRelation>
  geoWithin: CRSetSnapshot<CRGeospatialGeometryRelation>
  globalLocationNumber: CRTextSnapshot
  hasCertification: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  hasDriveThroughService: SchemaOrgBoolean
  hasGS1DigitalLink: SchemaOrgURL
  hasMap: CRSetSnapshot<CRPlaceMap>
  isAccessibleForFree: SchemaOrgBoolean
  isicV4: CRTextSnapshot
  keywords: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  latitude: CRTextSnapshot
  logo: CRSetSnapshot<CRPlaceImage>
  longitude: CRTextSnapshot
  maximumAttendeeCapacity: SchemaOrgInteger
  openingHoursSpecification: CRSetSnapshot<CRPlaceOpeningHoursSpecification>
  photo: CRSetSnapshot<CRPlaceImage>
  publicAccess: SchemaOrgBoolean
  review: CRSetSnapshot<CRPlaceReview>
  slogan: CRTextSnapshot
  smokingAllowed: SchemaOrgBoolean
  specialOpeningHoursSpecification: CRSetSnapshot<CRPlaceOpeningHoursSpecification>
  telephone: CRTextSnapshot
  tourBookingPage: SchemaOrgURL
} & CRThingDefaultShape<Type>

export type CRPlaceSnapshot<Type = 'Place'> = CRStructPartialSnapshot<
  CRPlaceDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org Place properties:
 * containedIn, events, map, maps, photos, reviews.
 */
type MissingKeys = Exclude<keyof SchemaOrgPlace, keyof CRPlaceSnapshot>

type ExtraKeys = Exclude<keyof CRPlaceSnapshot, keyof SchemaOrgPlace>

export type CRPlaceState<Type = 'Place'> = {
  additionalProperty: Readonly<CRSet<CRPlaceAdditionalProperty>>
  address: Readonly<CRSet<CRPlaceAddress>>
  aggregateRating: Readonly<CRSet<CRPlaceAggregateRating>>
  amenityFeature: Readonly<CRSet<CRPlaceAmenityFeature>>
  branchCode: Readonly<CRText>
  containedInPlace: Readonly<CRSet<CRPlaceRelation>>
  containsPlace: Readonly<CRSet<CRPlaceRelation>>
  event: Readonly<CRSet<CRPlaceEvent>>
  faxNumber: Readonly<CRText>
  geo: Readonly<CRSet<CRPlaceGeo>>
  geoContains: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoCoveredBy: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoCovers: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoCrosses: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoDisjoint: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoEquals: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoIntersects: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoOverlaps: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoTouches: Readonly<CRSet<CRGeospatialGeometryRelation>>
  geoWithin: Readonly<CRSet<CRGeospatialGeometryRelation>>
  globalLocationNumber: Readonly<CRText>
  hasCertification: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  hasDriveThroughService: SchemaOrgBoolean
  hasGS1DigitalLink: SchemaOrgURL
  hasMap: Readonly<CRSet<CRPlaceMap>>
  isAccessibleForFree: SchemaOrgBoolean
  isicV4: Readonly<CRText>
  keywords: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  latitude: Readonly<CRText>
  logo: Readonly<CRSet<CRPlaceImage>>
  longitude: Readonly<CRText>
  maximumAttendeeCapacity: SchemaOrgInteger
  openingHoursSpecification: Readonly<CRSet<CRPlaceOpeningHoursSpecification>>
  photo: Readonly<CRSet<CRPlaceImage>>
  publicAccess: SchemaOrgBoolean
  review: Readonly<CRSet<CRPlaceReview>>
  slogan: Readonly<CRText>
  smokingAllowed: SchemaOrgBoolean
  specialOpeningHoursSpecification: Readonly<
    CRSet<CRPlaceOpeningHoursSpecification>
  >
  telephone: Readonly<CRText>
  tourBookingPage: SchemaOrgURL
} & CRThingState<Type>
