import type { PostalAddress } from 'schema-dts'
import type { ISO31661Alpha2 } from '@sovereignbase/utils'

import type {
  CRContactPointDefaultShape,
  CRContactPointState,
} from '../../CRContactPoint/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgPostalCode,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgPostalAddressRaw = Extract<
  PostalAddress,
  { '@type': 'PostalAddress' }
>

type SchemaOrgPostalAddress = Partial<SchemaOrgPostalAddressRaw>

/**
 * Values accepted by Schema.org addressCountry.
 */
export type CRPostalAddressCountry =
  | CRTypedIdReferenceValue<'Country'>
  | ISO31661Alpha2
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org addressRegion.
 */
export type CRPostalAddressRegion =
  | CRTypedIdReferenceValue<'AdministrativeArea'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org PostalAddress.
 *
 * Schema.org: The mailing address.
 */
export type CRPostalAddressDefaultShape<Type = 'PostalAddress'> = {
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  addressCountry: CRPostalAddressCountry
  /**
   * Schema.org addressLocality: The locality in which the street address is.
   */
  addressLocality: SchemaOrgText
  /**
   * Schema.org addressRegion: The region in which the locality is.
   */
  addressRegion: CRPostalAddressRegion
  /**
   * Schema.org extendedAddress: An address extension such as an apartment
   * number, C/O or alternative name.
   */
  extendedAddress: SchemaOrgText
  /**
   * Schema.org postalCode: The postal code.
   */
  postalCode: SchemaOrgPostalCode
  /**
   * Schema.org postOfficeBoxNumber: The post office box number for PO box
   * addresses.
   */
  postOfficeBoxNumber: SchemaOrgText
  /**
   * Schema.org streetAddress: The street address.
   */
  streetAddress: SchemaOrgText
} & CRContactPointDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org PostalAddress.
 */
export type CRPostalAddressSnapshot<Type = 'PostalAddress'> =
  CRStructPartialSnapshot<
    CRPostalAddressDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

/**
 * Intentionally omitted deprecated Schema.org PostalAddress properties:
 * serviceArea.
 */
type MissingKeys = Exclude<
  keyof SchemaOrgPostalAddress,
  keyof CRPostalAddressSnapshot
>

type ExtraKeys = Exclude<
  keyof CRPostalAddressSnapshot,
  keyof SchemaOrgPostalAddress
>

/**
 * Runtime CRDT state surface for Schema.org PostalAddress.
 */
export type CRPostalAddressState<Type = 'PostalAddress'> = {
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  addressCountry: CRPostalAddressCountry
  /**
   * Schema.org addressLocality: The locality in which the street address is.
   */
  addressLocality: SchemaOrgText
  /**
   * Schema.org addressRegion: The region in which the locality is.
   */
  addressRegion: CRPostalAddressRegion
  /**
   * Schema.org extendedAddress: An address extension such as an apartment
   * number, C/O or alternative name.
   */
  extendedAddress: SchemaOrgText
  /**
   * Schema.org postalCode: The postal code.
   */
  postalCode: SchemaOrgPostalCode
  /**
   * Schema.org postOfficeBoxNumber: The post office box number for PO box
   * addresses.
   */
  postOfficeBoxNumber: SchemaOrgText
  /**
   * Schema.org streetAddress: The street address.
   */
  streetAddress: SchemaOrgText
} & CRContactPointState<Type>
