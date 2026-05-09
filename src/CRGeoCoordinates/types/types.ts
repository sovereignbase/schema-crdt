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

export type CRGeoCoordinatesAddress =
  | CRPostalAddressSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

export type CRGeoCoordinatesDefaultShape<Type = 'GeoCoordinates'> = {
  address: CRSetSnapshot<CRGeoCoordinatesAddress>
  addressCountry: SchemaOrgText | CRIdReferenceValue
  elevation: SchemaOrgNumber | SchemaOrgText
  latitude: SchemaOrgNumber | SchemaOrgText
  longitude: SchemaOrgNumber | SchemaOrgText
  postalCode: SchemaOrgText
} & CRStructuredValueDefaultShape<Type>

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

export type CRGeoCoordinatesState<Type = 'GeoCoordinates'> = {
  address: Readonly<CRSet<CRGeoCoordinatesAddress>>
  addressCountry: SchemaOrgText | CRIdReferenceValue
  elevation: SchemaOrgNumber | SchemaOrgText
  latitude: SchemaOrgNumber | SchemaOrgText
  longitude: SchemaOrgNumber | SchemaOrgText
  postalCode: SchemaOrgText
} & CRStructuredValueState<Type>
