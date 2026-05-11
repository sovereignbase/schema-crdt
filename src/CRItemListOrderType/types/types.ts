import type { ItemListOrderType } from 'schema-dts'

import type {
  CREnumerationDefaultShape,
  CREnumerationState,
} from '../../CREnumeration/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgItemListOrderTypeRaw = Extract<
  ItemListOrderType,
  { '@type': 'ItemListOrderType' }
>

type SchemaOrgItemListOrderType = Partial<SchemaOrgItemListOrderTypeRaw>

/**
 * Serializable CRDT shape for Schema.org ItemListOrderType.
 *
 * Schema.org: Enumerated values for how an ordered ItemList is organized.
 */
export type CRItemListOrderTypeDefaultShape<Type = 'ItemListOrderType'> =
  CREnumerationDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org ItemListOrderType.
 */
export type CRItemListOrderTypeSnapshot<Type = 'ItemListOrderType'> =
  CRStructPartialSnapshot<
    CRItemListOrderTypeDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgItemListOrderType,
  keyof CRItemListOrderTypeSnapshot
>

type ExtraKeys = Exclude<
  keyof CRItemListOrderTypeSnapshot,
  keyof SchemaOrgItemListOrderType
>

/**
 * Runtime CRDT state surface for Schema.org ItemListOrderType.
 */
export type CRItemListOrderTypeState<Type = 'ItemListOrderType'> =
  CREnumerationState<Type>
