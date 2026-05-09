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

/**
 * Values accepted by Schema.org about.
 */
export type CRCreativeWorkAbout = CRThingSnapshot | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org CreativeWork.
 *
 * Schema.org: The most generic kind of creative work.
 */
export type CRCreativeWorkDefaultShape<Type = 'CreativeWork'> = {
  /**
   * Schema.org about: The subject matter of an object.
   */
  about: CRSetSnapshot<CRCreativeWorkAbout>
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org CreativeWork.
 */
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

/**
 * Runtime CRDT state surface for Schema.org CreativeWork.
 */
export type CRCreativeWorkState<Type = 'CreativeWork'> = {
  /**
   * Schema.org about: The subject matter of an object.
   */
  about: Readonly<CRSet<CRCreativeWorkAbout>>
} & CRThingState<Type>
