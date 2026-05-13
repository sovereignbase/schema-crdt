import type { ActionStatusType } from 'schema-dts'

import type {
  CRStatusEnumerationDefaultShape,
  CRStatusEnumerationState,
} from '../../CRStatusEnumeration/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgActionStatusTypeRaw = Extract<
  ActionStatusType,
  { '@type': 'ActionStatusType' }
>

type SchemaOrgActionStatusType = Partial<SchemaOrgActionStatusTypeRaw>

/**
 * Serializable CRDT shape for Schema.org ActionStatusType.
 *
 * Schema.org: The status of an Action.
 */
export type CRActionStatusTypeDefaultShape<Type = 'ActionStatusType'> =
  CRStatusEnumerationDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org ActionStatusType.
 */
export type CRActionStatusTypeSnapshot<Type = 'ActionStatusType'> =
  CRStructPartialSnapshot<
    CRActionStatusTypeDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgActionStatusType,
  keyof CRActionStatusTypeSnapshot
>

type ExtraKeys = Exclude<
  keyof CRActionStatusTypeSnapshot,
  keyof SchemaOrgActionStatusType
>

/**
 * Runtime CRDT state surface for Schema.org ActionStatusType.
 */
export type CRActionStatusTypeState<Type = 'ActionStatusType'> =
  CRStatusEnumerationState<Type>
