import type { HowToSection } from 'schema-dts'
import type {
  CRList,
  CRListSnapshot,
} from '@sovereignbase/convergent-replicated-list'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkSnapshot,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRHowToStepSnapshot } from '../../CRHowToStep/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRItemListAggregateElement,
  CRItemListElement,
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

type SchemaOrgHowToSectionRaw = Extract<
  HowToSection,
  { '@type': 'HowToSection' }
>

type SchemaOrgHowToSection = Partial<SchemaOrgHowToSectionRaw>

/**
 * Values accepted by Schema.org steps for HowToSection.
 */
export type CRHowToSectionStep =
  | CRHowToStepSnapshot
  | CRCreativeWorkSnapshot
  | CRTypedIdReferenceValue<'HowToSection'>
  | CRTypedIdReferenceValue<'HowToStep'>
  | CRTypedIdReferenceValue<'ItemList'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org HowToSection.
 *
 * Schema.org: A sub-grouping of how-to steps.
 */
export type CRHowToSectionDefaultShape<Type = 'HowToSection'> = {
  /**
   * Schema.org aggregateElement: A prototype of the elements in the list.
   */
  aggregateElement: CRItemListAggregateElement
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  item: CRListItemItem
  /**
   * Schema.org itemListElement: Items in this section.
   */
  itemListElement: CRListSnapshot<CRItemListElement>
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
  /**
   * Schema.org steps: Deprecated alias for step.
   */
  steps: CRListSnapshot<CRHowToSectionStep>
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org HowToSection.
 */
export type CRHowToSectionSnapshot<Type = 'HowToSection'> =
  CRStructPartialSnapshot<
    CRHowToSectionDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgHowToSection,
  keyof CRHowToSectionSnapshot
>

type ExtraKeys = Exclude<
  keyof CRHowToSectionSnapshot,
  keyof SchemaOrgHowToSection
>

/**
 * Runtime CRDT state surface for Schema.org HowToSection.
 */
export type CRHowToSectionState<Type = 'HowToSection'> = {
  /**
   * Schema.org aggregateElement: A prototype of the elements in the list.
   */
  aggregateElement: CRItemListAggregateElement
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  item: CRListItemItem
  /**
   * Schema.org itemListElement: Items in this section.
   */
  itemListElement: Readonly<CRList<CRItemListElement>>
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
  /**
   * Schema.org steps: Deprecated alias for step.
   */
  steps: Readonly<CRList<CRHowToSectionStep>>
} & CRCreativeWorkState<Type>
