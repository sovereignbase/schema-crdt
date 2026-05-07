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

export type CRStructuredValueDefaultShape =
  CRIntangibleDefaultShape<'StructuredValue'>

export type CRStructuredValueSnapshot = CRStructPartialSnapshot<
  CRStructuredValueDefaultShape,
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

export type CRStructuredValueState = CRIntangibleState<'StructuredValue'>
