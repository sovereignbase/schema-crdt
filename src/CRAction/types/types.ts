import type { Action } from 'schema-dts'
import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'
import type { OpaqueIdentifier } from '@sovereignbase/cryptosuite'
import type { CRSetSnapshot } from '@sovereignbase/convergent-replicated-set'
import type { CRTextSnapshot } from '@sovereignbase/convergent-replicated-text'
import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgActionRaw = Extract<Action, { '@type': 'Action' }>

type SchemaOrgAction = Partial<SchemaOrgActionRaw>

export type CRActionDefaultShape = {
  actionProcess: ''
  actionStatus: ''
  agent: ''
  endTime: ''
  error: ''
  instrument: ''
  location: ''
  object: ''
  participant: ''
  provider: ''
  result: ''
  startTime: ''
  target: ''
} & CRThingDefaultShape<'Action'>

export type CRActionSnapshot = CRStructPartialSnapshot<
  CRActionDefaultShape,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgAction, keyof CRActionSnapshot>

type ExtraKeys = Exclude<keyof CRActionSnapshot, keyof SchemaOrgAction>

export type CRActionState = {
  actionProcess: ''
  actionStatus: ''
  agent: ''
  endTime: ''
  error: ''
  instrument: ''
  location: ''
  object: ''
  participant: ''
  provider: ''
  result: ''
  startTime: ''
  target: ''
} & CRThingState<'Action'>
