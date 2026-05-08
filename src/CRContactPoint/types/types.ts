import type { ContactPoint } from 'schema-dts'

import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgContactPointRaw = Extract<
  ContactPoint,
  { '@type': 'ContactPoint' }
>

type SchemaOrgContactPoint = Partial<SchemaOrgContactPointRaw>

export type CRContactPointDefaultShape<Type = 'ContactPoint'> = {
  areaServed: string
  availableLanguage: string
  contactOption: string
  contactType: string
  email: string
  faxNumber: string
  hoursAvailable: string
  productSupported: string
  serviceArea: string
  telephone: string
} & CRStructuredValueDefaultShape<Type>

export type CRContactPointSnapshot<Type = 'ContactPoint'> =
  CRStructPartialSnapshot<
    CRContactPointDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgContactPoint,
  keyof CRContactPointSnapshot
>

type ExtraKeys = Exclude<
  keyof CRContactPointSnapshot,
  keyof SchemaOrgContactPoint
>

export type CRContactPointState<Type = 'ContactPoint'> = {
  areaServed: string
  availableLanguage: string
  contactOption: string
  contactType: string
  email: string
  faxNumber: string
  hoursAvailable: string
  productSupported: string
  serviceArea: string
  telephone: string
} & CRStructuredValueState<Type>
