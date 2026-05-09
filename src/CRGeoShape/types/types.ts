import type { GeoShape } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type { ISO31661Alpha2 } from '@sovereignbase/utils'

import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type { CRPostalAddressSnapshot } from '../../CRPostalAddress/types/types.js'
import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgNumber,
  SchemaOrgPostalCode,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgGeoShapeRaw = Extract<GeoShape, { '@type': 'GeoShape' }>

type SchemaOrgGeoShape = Partial<SchemaOrgGeoShapeRaw>

/**
 * Values accepted by Schema.org address.
 */
export type CRGeoShapeAddress =
  | CRPostalAddressSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org GeoShape.
 *
 * Schema.org: The geographic shape of a place.
 */
export type CRGeoShapeDefaultShape<Type = 'GeoShape'> = {
  /**
   * Schema.org address: Physical address of the item.
   */
  address: CRSetSnapshot<CRGeoShapeAddress>
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  addressCountry: ISO31661Alpha2
  /**
   * Schema.org box: The area enclosed by a rectangle formed by two points.
   */
  box: SchemaOrgText
  /**
   * Schema.org circle: A circular region centered at a latitude/longitude pair
   * with a radius in meters.
   */
  circle: SchemaOrgText
  /**
   * Schema.org elevation: The elevation of a location in WGS 84.
   */
  elevation: SchemaOrgNumber | SchemaOrgText
  /**
   * Schema.org line: A point-to-point path consisting of two or more points.
   */
  line: SchemaOrgText
  /**
   * Schema.org polygon: An area enclosed by a point-to-point path where the
   * starting and ending points are the same.
   */
  polygon: SchemaOrgText
  /**
   * Schema.org postalCode: The postal code.
   */
  postalCode: SchemaOrgPostalCode
} & CRStructuredValueDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org GeoShape.
 */
export type CRGeoShapeSnapshot<Type = 'GeoShape'> = CRStructPartialSnapshot<
  CRGeoShapeDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgGeoShape, keyof CRGeoShapeSnapshot>

type ExtraKeys = Exclude<keyof CRGeoShapeSnapshot, keyof SchemaOrgGeoShape>

/**
 * Runtime CRDT state surface for Schema.org GeoShape.
 */
export type CRGeoShapeState<Type = 'GeoShape'> = {
  /**
   * Schema.org address: Physical address of the item.
   */
  address: Readonly<CRSet<CRGeoShapeAddress>>
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  addressCountry: ISO31661Alpha2
  /**
   * Schema.org box: The area enclosed by a rectangle formed by two points.
   */
  box: SchemaOrgText
  /**
   * Schema.org circle: A circular region centered at a latitude/longitude pair
   * with a radius in meters.
   */
  circle: SchemaOrgText
  /**
   * Schema.org elevation: The elevation of a location in WGS 84.
   */
  elevation: SchemaOrgNumber | SchemaOrgText
  /**
   * Schema.org line: A point-to-point path consisting of two or more points.
   */
  line: SchemaOrgText
  /**
   * Schema.org polygon: An area enclosed by a point-to-point path where the
   * starting and ending points are the same.
   */
  polygon: SchemaOrgText
  /**
   * Schema.org postalCode: The postal code.
   */
  postalCode: SchemaOrgPostalCode
} & CRStructuredValueState<Type>
