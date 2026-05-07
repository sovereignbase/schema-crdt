import type { Intangible } from 'schema-dts'

import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgIntangibleRaw = Extract<Intangible, { '@type': 'Intangible' }>

type SchemaOrgIntangible = Partial<SchemaOrgIntangibleRaw>

export type CRIntangibleDefaultShape = CRThingDefaultShape<'Intangible'>

export type CRIntangibleSnapshot = CRStructPartialSnapshot<
  CRIntangibleDefaultShape,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<
  keyof SchemaOrgIntangible,
  keyof CRIntangibleSnapshot
>

type ExtraKeys = Exclude<keyof CRIntangibleSnapshot, keyof SchemaOrgIntangible>

export type CRIntangibleState = CRThingState<'Intangible'>
