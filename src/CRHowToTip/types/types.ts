import type { HowToTip } from 'schema-dts'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type {
  CRListItemItem,
  CRListItemPosition,
  CRListItemRelation,
} from '../../CRListItem/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgHowToTipRaw = Extract<HowToTip, { '@type': 'HowToTip' }>

type SchemaOrgHowToTip = Partial<SchemaOrgHowToTipRaw>

/**
 * Serializable CRDT shape for Schema.org HowToTip.
 *
 * Schema.org: Supplementary information in how-to instructions.
 */
export type CRHowToTipDefaultShape<Type = 'HowToTip'> = {
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  item: CRListItemItem
  /**
   * Schema.org nextItem: A link to the ListItem that follows the current one.
   */
  nextItem: CRListItemRelation
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
 * Serializable CRDT snapshot for Schema.org HowToTip.
 */
export type CRHowToTipSnapshot<Type = 'HowToTip'> = CRStructPartialSnapshot<
  CRHowToTipDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org HowToTip properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews.
 */
type MissingKeys = Exclude<keyof SchemaOrgHowToTip, keyof CRHowToTipSnapshot>

type ExtraKeys = Exclude<keyof CRHowToTipSnapshot, keyof SchemaOrgHowToTip>

/**
 * Runtime CRDT state surface for Schema.org HowToTip.
 */
export type CRHowToTipState<Type = 'HowToTip'> = {
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  item: CRListItemItem
  /**
   * Schema.org nextItem: A link to the ListItem that follows the current one.
   */
  nextItem: CRListItemRelation
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
