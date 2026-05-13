import type { HowToStep } from 'schema-dts'
import type {
  CRList,
  CRListSnapshot,
} from '@sovereignbase/convergent-replicated-list'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRHowToDirectionSnapshot } from '../../CRHowToDirection/types/types.js'
import type { CRHowToTipSnapshot } from '../../CRHowToTip/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRItemListAggregateElement,
  CRItemListOrder,
} from '../../CRItemList/types/types.js'
import type {
  CRListItemItem,
  CRListItemPosition,
  CRListItemRelation,
} from '../../CRListItem/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgInteger,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgHowToStepRaw = Extract<HowToStep, { '@type': 'HowToStep' }>

type SchemaOrgHowToStep = Partial<SchemaOrgHowToStepRaw>

/**
 * Values accepted by Schema.org itemListElement for HowToStep.
 */
export type CRHowToStepElement =
  | CRHowToDirectionSnapshot
  | CRHowToTipSnapshot
  | CRTypedIdReferenceValue<'HowToDirection'>
  | CRTypedIdReferenceValue<'HowToTip'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org HowToStep.
 *
 * Schema.org: A step in how-to instructions.
 */
export type CRHowToStepDefaultShape<Type = 'HowToStep'> = {
  /**
   * Schema.org aggregateElement: A prototype of the elements in the list.
   */
  aggregateElement: CRItemListAggregateElement
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  item: CRListItemItem
  /**
   * Schema.org itemListElement: Direction or tip items in this step.
   */
  itemListElement: CRListSnapshot<CRHowToStepElement>
  /**
   * Schema.org itemListOrder: Type of ordering.
   */
  itemListOrder: CRItemListOrder
  /**
   * Schema.org nextItem: A link to the ListItem that follows the current one.
   */
  nextItem: CRListItemRelation
  /**
   * Schema.org numberOfItems: The number of items in an ItemList.
   */
  numberOfItems: SchemaOrgInteger
  /**
   * Schema.org position: The position of an item in a series or sequence.
   */
  position: CRListItemPosition
  /**
   * Schema.org previousItem: A link to the ListItem that precedes the current
   * one.
   */
  previousItem: CRListItemRelation
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org HowToStep.
 */
export type CRHowToStepSnapshot<Type = 'HowToStep'> = CRStructPartialSnapshot<
  CRHowToStepDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org HowToStep properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews.
 */
type MissingKeys = Exclude<keyof SchemaOrgHowToStep, keyof CRHowToStepSnapshot>

type ExtraKeys = Exclude<keyof CRHowToStepSnapshot, keyof SchemaOrgHowToStep>

/**
 * Runtime CRDT state surface for Schema.org HowToStep.
 */
export type CRHowToStepState<Type = 'HowToStep'> = {
  /**
   * Schema.org aggregateElement: A prototype of the elements in the list.
   */
  aggregateElement: CRItemListAggregateElement
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  item: CRListItemItem
  /**
   * Schema.org itemListElement: Direction or tip items in this step.
   */
  itemListElement: Readonly<CRList<CRHowToStepElement>>
  /**
   * Schema.org itemListOrder: Type of ordering.
   */
  itemListOrder: CRItemListOrder
  /**
   * Schema.org nextItem: A link to the ListItem that follows the current one.
   */
  nextItem: CRListItemRelation
  /**
   * Schema.org numberOfItems: The number of items in an ItemList.
   */
  numberOfItems: SchemaOrgInteger
  /**
   * Schema.org position: The position of an item in a series or sequence.
   */
  position: CRListItemPosition
  /**
   * Schema.org previousItem: A link to the ListItem that precedes the current
   * one.
   */
  previousItem: CRListItemRelation
} & CRCreativeWorkState<Type>
