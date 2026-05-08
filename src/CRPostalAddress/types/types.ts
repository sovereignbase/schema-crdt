import type { PostalAddress } from 'schema-dts'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

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
  addressCountry: CRTextSnapshot
  addressLocality: CRTextSnapshot
  addressRegion: CRTextSnapshot
  extendedAddress: CRTextSnapshot
  postalCode: CRTextSnapshot
  postOfficeBoxNumber: CRTextSnapshot
  streetAddress: CRTextSnapshot
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
  addressCountry: Readonly<CRText>
  addressLocality: Readonly<CRText>
  addressRegion: Readonly<CRText>
  extendedAddress: Readonly<CRText>
  postalCode: Readonly<CRText>
  postOfficeBoxNumber: Readonly<CRText>
  streetAddress: Readonly<CRText>
} & CRContactPointState<Type>
