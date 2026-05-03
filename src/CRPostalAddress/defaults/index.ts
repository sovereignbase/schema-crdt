import type { PostalAddress } from 'schema-dts'
import type { ISO31661Alpha2 } from '@sovereignbase/utils'
import {
  additionalType,
  addressCountry,
  addressLocality,
} from '../../.shared/index.js'

type SchemaOrgPostalAddressRaw = Extract<
  PostalAddress,
  { '@type': 'PostalAddress' }
>

export type SchemaOrgPostalAddress = Partial<
  Record<
    keyof SchemaOrgPostalAddressRaw,
    SchemaOrgPostalAddressRaw[keyof SchemaOrgPostalAddressRaw]
  >
>

export const defaults = {
  '@id': '',
  '@type': 'PostalAddress',
  additionalType,
  addressCountry,
  addressLocality,
  addressRegion: '',
  alternateName: '',
  areaServed: '',
  availableLanguage: '',
  contactOption: '',
  contactType: '',
  description: '',
  disambiguatingDescription: '',
  email: '',
  extendedAddress: '',
  faxNumber: '',
  hoursAvailable: '',
  identifier: '',
  image: '',
  mainEntityOfPage: '',
  name: '',
  owner: '',
  postOfficeBoxNumber: '',
  postalCode: '',
  potentialAction: '',
  productSupported: '',
  sameAs: '',
  streetAddress: '',
  subjectOf: '',
  telephone: '',
  url: '',
} as const

type MissingKeys = Exclude<keyof SchemaOrgPostalAddress, keyof typeof defaults>
type ExtraKeys = Exclude<keyof typeof defaults, keyof SchemaOrgPostalAddress>
