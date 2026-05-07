import type { Thing } from 'schema-dts'
import type { OpaqueIdentifier } from '@sovereignbase/cryptosuite'
import type {
  CRTextSnapshot,
  CRText,
} from '@sovereignbase/convergent-replicated-text'
import type {
  CRSetSnapshot,
  CRSet,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgThingRaw = Extract<Thing, { '@type': 'Thing' }>

type SchemaOrgThing = Partial<SchemaOrgThingRaw>

export type CRThingDefaultShape<T = 'Thing'> = {
  '@id': OpaqueIdentifier
  '@type': T
  additionalType: CRSetSnapshot<SchemaOrgURL | SchemaOrgText>
  alternateName: CRSetSnapshot<SchemaOrgText>
  description: CRTextSnapshot
  disambiguatingDescription: CRTextSnapshot
  identifier: OpaqueIdentifier
  image: string
  mainEntityOfPage: SchemaOrgURL
  name: CRTextSnapshot
  owner: string
  potentialAction?: string
  sameAs: CRSetSnapshot<SchemaOrgURL>
  subjectOf: CRSetSnapshot<string>
  url: SchemaOrgURL
}

export type CRThingSnapshot = CRStructPartialSnapshot<
  CRThingDefaultShape,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgThing, keyof CRThingSnapshot>

type ExtraKeys = Exclude<keyof CRThingSnapshot, keyof SchemaOrgThing>

export type CRThingState<T = 'Thing'> = {
  '@id': Readonly<OpaqueIdentifier>
  '@type': Readonly<T>
  additionalType: Readonly<CRSet<string>>
  alternateName: Readonly<CRSet<string>>
  description: Readonly<CRText>
  disambiguatingDescription: Readonly<CRText>
  identifier: Readonly<OpaqueIdentifier>
  image: string
  mainEntityOfPage: string
  name: Readonly<CRText>
  owner: string
  potentialAction: string
  sameAs: Readonly<CRSet<string>>
  subjectOf: Readonly<CRSet<string>>
  url: string
}
