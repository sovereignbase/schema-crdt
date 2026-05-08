import type { PostalAddress } from 'schema-dts'

import type {
  CRContactPointDefaultShape,
  CRContactPointState,
} from '../../CRContactPoint/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgPostalAddressRaw = Extract<
  PostalAddress,
  { '@type': 'PostalAddress' }
>

type SchemaOrgPostalAddress = Partial<SchemaOrgPostalAddressRaw>

export type CRPostalAddressDefaultShape<Type = 'PostalAddress'> = {
  addressCountry: string
  addressLocality: string
  addressRegion: string
  extendedAddress: string
  postalCode: string
  postOfficeBoxNumber: string
  streetAddress: string
} & CRContactPointDefaultShape<Type>

export type CRPostalAddressSnapshot<Type = 'PostalAddress'> =
  CRStructPartialSnapshot<
    CRPostalAddressDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgPostalAddress,
  keyof CRPostalAddressSnapshot
>

type ExtraKeys = Exclude<
  keyof CRPostalAddressSnapshot,
  keyof SchemaOrgPostalAddress
>

export type CRPostalAddressState<Type = 'PostalAddress'> = {
  addressCountry: string
  addressLocality: string
  addressRegion: string
  extendedAddress: string
  postalCode: string
  postOfficeBoxNumber: string
  streetAddress: string
} & CRContactPointState<Type>
