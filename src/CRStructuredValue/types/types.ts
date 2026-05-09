import type { StructuredValue } from 'schema-dts'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgStructuredValueRaw = Extract<
  StructuredValue,
  { '@type': 'StructuredValue' }
>

type SchemaOrgStructuredValue = Partial<SchemaOrgStructuredValueRaw>

/**
 * Serializable CRDT shape for Schema.org StructuredValue.
 *
 * Schema.org: A value with a more complex structure than a textual value or a
 * reference to another thing.
 */
export type CRStructuredValueDefaultShape<Type = 'StructuredValue'> =
  CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org StructuredValue.
 */
export type CRStructuredValueSnapshot<Type = 'StructuredValue'> =
  CRStructPartialSnapshot<
    CRStructuredValueDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgStructuredValue,
  keyof CRStructuredValueSnapshot
>

type ExtraKeys = Exclude<
  keyof CRStructuredValueSnapshot,
  keyof SchemaOrgStructuredValue
>

/**
 * Runtime CRDT state surface for Schema.org StructuredValue.
 */
export type CRStructuredValueState<Type = 'StructuredValue'> =
  CRIntangibleState<Type>
