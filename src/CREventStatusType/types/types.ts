import type { EventStatusType } from 'schema-dts'

import type {
  CRStatusEnumerationDefaultShape,
  CRStatusEnumerationState,
} from '../../CRStatusEnumeration/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgEventStatusTypeRaw = Extract<
  EventStatusType,
  { '@type': 'EventStatusType' }
>

type SchemaOrgEventStatusType = Partial<SchemaOrgEventStatusTypeRaw>

/**
 * Serializable CRDT shape for Schema.org EventStatusType.
 *
 * Schema.org: An enumeration type whose instances represent states that an
 * Event may be in.
 */
export type CREventStatusTypeDefaultShape<Type = 'EventStatusType'> =
  CRStatusEnumerationDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org EventStatusType.
 */
export type CREventStatusTypeSnapshot<Type = 'EventStatusType'> =
  CRStructPartialSnapshot<
    CREventStatusTypeDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgEventStatusType,
  keyof CREventStatusTypeSnapshot
>

type ExtraKeys = Exclude<
  keyof CREventStatusTypeSnapshot,
  keyof SchemaOrgEventStatusType
>

/**
 * Runtime CRDT state surface for Schema.org EventStatusType.
 */
export type CREventStatusTypeState<Type = 'EventStatusType'> =
  CRStatusEnumerationState<Type>
