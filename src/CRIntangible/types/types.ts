import type { Intangible } from 'schema-dts'

import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgIntangibleRaw = Extract<Intangible, { '@type': 'Intangible' }>

type SchemaOrgIntangible = Partial<SchemaOrgIntangibleRaw>

/**
 * Serializable CRDT shape for Schema.org Intangible.
 *
 * Schema.org: A utility class for intangible things such as quantities,
 * structured values, etc.
 */
export type CRIntangibleDefaultShape<Type = 'Intangible'> =
  CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Intangible.
 */
export type CRIntangibleSnapshot<Type = 'Intangible'> = CRStructPartialSnapshot<
  CRIntangibleDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<
  keyof SchemaOrgIntangible,
  keyof CRIntangibleSnapshot
>

type ExtraKeys = Exclude<keyof CRIntangibleSnapshot, keyof SchemaOrgIntangible>

/**
 * Runtime CRDT state surface for Schema.org Intangible.
 */
export type CRIntangibleState<Type = 'Intangible'> = CRThingState<Type>
