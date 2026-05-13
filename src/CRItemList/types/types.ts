import type { ItemList } from 'schema-dts'
import type {
  CRList,
  CRListSnapshot,
} from '@sovereignbase/convergent-replicated-list'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type { CRItemListOrderTypeSnapshot } from '../../CRItemListOrderType/types/types.js'
import type { CRListItemSnapshot } from '../../CRListItem/types/types.js'
import type { CRThingDefaultShape } from '../../CRThing/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgInteger,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgItemListRaw = Extract<ItemList, { '@type': 'ItemList' }>

type SchemaOrgItemList = Partial<SchemaOrgItemListRaw>

/**
 * Values accepted by Schema.org aggregateElement.
 */
export type CRItemListAggregateElement =
  | CRStructPartialSnapshot<
      CRThingDefaultShape<string>,
      '@id' | '@type' | 'identifier'
    >
  | CRTypedIdReferenceValue<'Thing'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org itemListElement.
 */
export type CRItemListElement =
  | CRListItemSnapshot
  | CRStructPartialSnapshot<
      CRThingDefaultShape<string>,
      '@id' | '@type' | 'identifier'
    >
  | CRTypedIdReferenceValue<'Thing'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org itemListOrder.
 */
export type CRItemListOrder =
  | CRItemListOrderTypeSnapshot
  | CRTypedIdReferenceValue<'ItemListOrderType'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org ItemList.
 *
 * Schema.org: A list of items of any sort.
 */
export type CRItemListDefaultShape<Type = 'ItemList'> = {
  /**
   * Schema.org aggregateElement: A prototype of the elements in the list.
   */
  aggregateElement: CRItemListAggregateElement
  /**
   * Schema.org itemListElement: An item in the list.
   */
  itemListElement: CRListSnapshot<CRItemListElement>
  /**
   * Schema.org itemListOrder: Type of ordering, e.g. ascending or descending.
   */
  itemListOrder: CRItemListOrder
  /**
   * Schema.org numberOfItems: The number of items in an ItemList.
   */
  numberOfItems: SchemaOrgInteger
} & CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org ItemList.
 */
export type CRItemListSnapshot<Type = 'ItemList'> = CRStructPartialSnapshot<
  CRItemListDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgItemList, keyof CRItemListSnapshot>

type ExtraKeys = Exclude<keyof CRItemListSnapshot, keyof SchemaOrgItemList>

/**
 * Runtime CRDT state surface for Schema.org ItemList.
 */
export type CRItemListState<Type = 'ItemList'> = {
  /**
   * Schema.org aggregateElement: A prototype of the elements in the list.
   */
  aggregateElement: CRItemListAggregateElement
  /**
   * Schema.org itemListElement: An item in the list.
   */
  itemListElement: Readonly<CRList<CRItemListElement>>
  /**
   * Schema.org itemListOrder: Type of ordering, e.g. ascending or descending.
   */
  itemListOrder: CRItemListOrder
  /**
   * Schema.org numberOfItems: The number of items in an ItemList.
   */
  numberOfItems: SchemaOrgInteger
} & CRIntangibleState<Type>
