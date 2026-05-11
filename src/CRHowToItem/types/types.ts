import type { HowToItem } from 'schema-dts'

import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type {
  CRListItemDefaultShape,
  CRListItemState,
} from '../../CRListItem/types/types.js'
import type { CRQuantitativeValueSnapshot } from '../../CRQuantitativeValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgNumber,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgHowToItemRaw = Extract<HowToItem, { '@type': 'HowToItem' }>

type SchemaOrgHowToItem = Partial<SchemaOrgHowToItemRaw>

/**
 * Values accepted by Schema.org requiredQuantity.
 */
export type CRHowToItemRequiredQuantity =
  | SchemaOrgNumber
  | CRQuantitativeValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org HowToItem.
 *
 * Schema.org: An item used as either a tool or supply when performing
 * instructions.
 */
export type CRHowToItemDefaultShape<Type = 'HowToItem'> = {
  /**
   * Schema.org requiredQuantity: The required quantity of the item(s).
   */
  requiredQuantity: CRHowToItemRequiredQuantity
} & CRListItemDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org HowToItem.
 */
export type CRHowToItemSnapshot<Type = 'HowToItem'> = CRStructPartialSnapshot<
  CRHowToItemDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgHowToItem, keyof CRHowToItemSnapshot>

type ExtraKeys = Exclude<keyof CRHowToItemSnapshot, keyof SchemaOrgHowToItem>

/**
 * Runtime CRDT state surface for Schema.org HowToItem.
 */
export type CRHowToItemState<Type = 'HowToItem'> = {
  /**
   * Schema.org requiredQuantity: The required quantity of the item(s).
   */
  requiredQuantity: CRHowToItemRequiredQuantity
} & CRListItemState<Type>
