import type { StatusEnumeration } from 'schema-dts'

import type {
  CREnumerationDefaultShape,
  CREnumerationState,
} from '../../CREnumeration/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgStatusEnumerationRaw = Extract<
  StatusEnumeration,
  { '@type': 'StatusEnumeration' }
>

type SchemaOrgStatusEnumeration = Partial<SchemaOrgStatusEnumerationRaw>

/**
 * Serializable CRDT shape for Schema.org StatusEnumeration.
 *
 * Schema.org: Lists or enumerations dealing with status types.
 */
export type CRStatusEnumerationDefaultShape<Type = 'StatusEnumeration'> =
  CREnumerationDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org StatusEnumeration.
 */
export type CRStatusEnumerationSnapshot<Type = 'StatusEnumeration'> =
  CRStructPartialSnapshot<
    CRStatusEnumerationDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgStatusEnumeration,
  keyof CRStatusEnumerationSnapshot
>

type ExtraKeys = Exclude<
  keyof CRStatusEnumerationSnapshot,
  keyof SchemaOrgStatusEnumeration
>

/**
 * Runtime CRDT state surface for Schema.org StatusEnumeration.
 */
export type CRStatusEnumerationState<Type = 'StatusEnumeration'> =
  CREnumerationState<Type>
