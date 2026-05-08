import type { ContactPoint } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgContactPointRaw = Extract<
  ContactPoint,
  { '@type': 'ContactPoint' }
>

type SchemaOrgContactPoint = Partial<SchemaOrgContactPointRaw>

export type CRContactPointDefaultShape<Type = 'ContactPoint'> = {
  areaServed: CRSetSnapshot<SchemaOrgText>
  availableLanguage: CRSetSnapshot<SchemaOrgText>
  contactOption: CRSetSnapshot<SchemaOrgText>
  contactType: CRTextSnapshot
  email: CRTextSnapshot
  faxNumber: CRTextSnapshot
  hoursAvailable: CRSetSnapshot<SchemaOrgText>
  productSupported: CRSetSnapshot<SchemaOrgText>
  serviceArea: CRSetSnapshot<SchemaOrgText>
  telephone: CRTextSnapshot
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
  areaServed: Readonly<CRSet<SchemaOrgText>>
  availableLanguage: Readonly<CRSet<SchemaOrgText>>
  contactOption: Readonly<CRSet<SchemaOrgText>>
  contactType: Readonly<CRText>
  email: Readonly<CRText>
  faxNumber: Readonly<CRText>
  hoursAvailable: Readonly<CRSet<SchemaOrgText>>
  productSupported: Readonly<CRSet<SchemaOrgText>>
  serviceArea: Readonly<CRSet<SchemaOrgText>>
  telephone: Readonly<CRText>
} & CRStructuredValueState<Type>
