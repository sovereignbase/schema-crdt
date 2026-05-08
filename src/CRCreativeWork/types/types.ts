import type { CreativeWork } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRThingDefaultShape,
  CRThingSnapshot,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'

type SchemaOrgCreativeWorkRaw = Extract<
  CreativeWork,
  { '@type': 'CreativeWork' }
>

type SchemaOrgCreativeWork = Partial<SchemaOrgCreativeWorkRaw>

export type CRCreativeWorkAbout = CRThingSnapshot | CRIdReferenceValue

export type CRCreativeWorkDefaultShape<Type = 'CreativeWork'> = {
  about: CRSetSnapshot<CRCreativeWorkAbout>
} & CRThingDefaultShape<Type>

export type CRCreativeWorkSnapshot<Type = 'CreativeWork'> =
  CRStructPartialSnapshot<
    CRCreativeWorkDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgCreativeWork,
  keyof CRCreativeWorkSnapshot
>

type ExtraKeys = Exclude<
  keyof CRCreativeWorkSnapshot,
  keyof SchemaOrgCreativeWork
>

export type CRCreativeWorkState<Type = 'CreativeWork'> = {
  about: Readonly<CRSet<CRCreativeWorkAbout>>
} & CRThingState<Type>
