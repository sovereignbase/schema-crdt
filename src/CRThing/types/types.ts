import type { Thing } from 'schema-dts'
import type { OpaqueIdentifier } from '@sovereignbase/cryptosuite'
import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'
import type {
  CRTextSnapshot,
  CRText,
} from '@sovereignbase/convergent-replicated-text'
import type {
  CRSetSnapshot,
  CRSet,
} from '@sovereignbase/convergent-replicated-set'

import type { CRStructPartialSnapshot } from '../../.types/index.js'

type SchemaOrgThingRaw = Extract<Thing, { '@type': 'Thing' }>

type SchemaOrgThing = Partial<SchemaOrgThingRaw>

export type CRThingDefaultShape = {
  '@id': OpaqueIdentifier
  '@type': 'Thing'
  additionalType: CRSetSnapshot<string>
  alternateName: CRSetSnapshot<string>
  description: CRTextSnapshot
  disambiguatingDescription: CRTextSnapshot
  identifier: OpaqueIdentifier
  image: string
  mainEntityOfPage: string
  name: CRTextSnapshot
  owner: string
  potentialAction?: string
  sameAs: CRSetSnapshot<string>
  subjectOf: CRSetSnapshot<string>
  url: string
}

export type CRThingSnapshot = CRStructPartialSnapshot<
  CRThingDefaultShape,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgThing, keyof CRThingSnapshot>

type ExtraKeys = Exclude<keyof CRThingSnapshot, keyof SchemaOrgThing>

export type CRThingState = {
  '@id': Readonly<OpaqueIdentifier>
  '@type': Readonly<'Thing'>
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
