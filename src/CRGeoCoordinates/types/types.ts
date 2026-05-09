import type { GeoCoordinates } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type { CRPostalAddressSnapshot } from '../../CRPostalAddress/types/types.js'
import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgNumber,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgGeoCoordinatesRaw = Extract<
  GeoCoordinates,
  { '@type': 'GeoCoordinates' }
>

type SchemaOrgGeoCoordinates = Partial<SchemaOrgGeoCoordinatesRaw>

/**
 * Values accepted by Schema.org address.
 */
export type CRGeoCoordinatesAddress =
  | CRPostalAddressSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org GeoCoordinates.
 *
 * Schema.org: The geographic coordinates of a place or event.
 */
export type CRGeoCoordinatesDefaultShape<Type = 'GeoCoordinates'> = {
  /**
   * Schema.org address: Physical address of the item.
   */
  address: CRSetSnapshot<CRGeoCoordinatesAddress>
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  addressCountry: SchemaOrgText | CRIdReferenceValue
  /**
   * Schema.org elevation: The elevation of a location in WGS 84.
   */
  elevation: SchemaOrgNumber | SchemaOrgText
  /**
   * Schema.org latitude: The latitude of a location in WGS 84.
   */
  latitude: SchemaOrgNumber | SchemaOrgText
  /**
   * Schema.org longitude: The longitude of a location in WGS 84.
   */
  longitude: SchemaOrgNumber | SchemaOrgText
  /**
   * Schema.org postalCode: The postal code.
   */
  postalCode: SchemaOrgText
} & CRStructuredValueDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org GeoCoordinates.
 */
export type CRGeoCoordinatesSnapshot<Type = 'GeoCoordinates'> =
  CRStructPartialSnapshot<
    CRGeoCoordinatesDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgGeoCoordinates,
  keyof CRGeoCoordinatesSnapshot
>

type ExtraKeys = Exclude<
  keyof CRGeoCoordinatesSnapshot,
  keyof SchemaOrgGeoCoordinates
>

/**
 * Runtime CRDT state surface for Schema.org GeoCoordinates.
 */
export type CRGeoCoordinatesState<Type = 'GeoCoordinates'> = {
  /**
   * Schema.org address: Physical address of the item.
   */
  address: Readonly<CRSet<CRGeoCoordinatesAddress>>
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  addressCountry: SchemaOrgText | CRIdReferenceValue
  /**
   * Schema.org elevation: The elevation of a location in WGS 84.
   */
  elevation: SchemaOrgNumber | SchemaOrgText
  /**
   * Schema.org latitude: The latitude of a location in WGS 84.
   */
  latitude: SchemaOrgNumber | SchemaOrgText
  /**
   * Schema.org longitude: The longitude of a location in WGS 84.
   */
  longitude: SchemaOrgNumber | SchemaOrgText
  /**
   * Schema.org postalCode: The postal code.
   */
  postalCode: SchemaOrgText
} & CRStructuredValueState<Type>
