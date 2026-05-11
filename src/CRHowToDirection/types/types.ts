import type { HowToDirection } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRHowToSupplySnapshot } from '../../CRHowToSupply/types/types.js'
import type { CRHowToToolSnapshot } from '../../CRHowToTool/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRListItemItem,
  CRListItemPosition,
  CRListItemRelation,
} from '../../CRListItem/types/types.js'
import type { CRMediaObjectSnapshot } from '../../CRMediaObject/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgDuration,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgHowToDirectionRaw = Extract<
  HowToDirection,
  { '@type': 'HowToDirection' }
>

type SchemaOrgHowToDirection = Partial<SchemaOrgHowToDirectionRaw>

/**
 * Values accepted by Schema.org afterMedia, beforeMedia and duringMedia.
 */
export type CRHowToDirectionMedia =
  | CRMediaObjectSnapshot
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org supply.
 */
export type CRHowToDirectionSupply =
  | CRHowToSupplySnapshot
  | CRTypedIdReferenceValue<'HowToSupply'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org tool.
 */
export type CRHowToDirectionTool =
  | CRHowToToolSnapshot
  | CRTypedIdReferenceValue<'HowToTool'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org HowToDirection.
 *
 * Schema.org: A direction indicating a single action in how-to instructions.
 */
export type CRHowToDirectionDefaultShape<Type = 'HowToDirection'> = {
  /**
   * Schema.org afterMedia: Media after performing this direction.
   */
  afterMedia: CRSetSnapshot<CRHowToDirectionMedia>
  /**
   * Schema.org beforeMedia: Media before performing this direction.
   */
  beforeMedia: CRSetSnapshot<CRHowToDirectionMedia>
  /**
   * Schema.org duringMedia: Media while performing this direction.
   */
  duringMedia: CRSetSnapshot<CRHowToDirectionMedia>
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  item: CRListItemItem
  /**
   * Schema.org nextItem: A link to the ListItem that follows the current one.
   */
  nextItem: CRListItemRelation
  /**
   * Schema.org performTime: Time required to perform instructions.
   */
  performTime: SchemaOrgDuration
  /**
   * Schema.org position: The position of an item in a series or sequence.
   */
  position: CRListItemPosition
  /**
   * Schema.org prepTime: Time required to prepare the items.
   */
  prepTime: SchemaOrgDuration
  /**
   * Schema.org previousItem: A link to the ListItem that precedes the current
   * one.
   */
  previousItem: CRListItemRelation
  /**
   * Schema.org supply: A supply consumed when performing the direction.
   */
  supply: CRSetSnapshot<CRHowToDirectionSupply>
  /**
   * Schema.org tool: An object used when performing the direction.
   */
  tool: CRSetSnapshot<CRHowToDirectionTool>
  /**
   * Schema.org totalTime: Total time required to perform instructions.
   */
  totalTime: SchemaOrgDuration
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org HowToDirection.
 */
export type CRHowToDirectionSnapshot<Type = 'HowToDirection'> =
  CRStructPartialSnapshot<
    CRHowToDirectionDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgHowToDirection,
  keyof CRHowToDirectionSnapshot
>

type ExtraKeys = Exclude<
  keyof CRHowToDirectionSnapshot,
  keyof SchemaOrgHowToDirection
>

/**
 * Runtime CRDT state surface for Schema.org HowToDirection.
 */
export type CRHowToDirectionState<Type = 'HowToDirection'> = {
  /**
   * Schema.org afterMedia: Media after performing this direction.
   */
  afterMedia: Readonly<CRSet<CRHowToDirectionMedia>>
  /**
   * Schema.org beforeMedia: Media before performing this direction.
   */
  beforeMedia: Readonly<CRSet<CRHowToDirectionMedia>>
  /**
   * Schema.org duringMedia: Media while performing this direction.
   */
  duringMedia: Readonly<CRSet<CRHowToDirectionMedia>>
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  item: CRListItemItem
  /**
   * Schema.org nextItem: A link to the ListItem that follows the current one.
   */
  nextItem: CRListItemRelation
  /**
   * Schema.org performTime: Time required to perform instructions.
   */
  performTime: SchemaOrgDuration
  /**
   * Schema.org position: The position of an item in a series or sequence.
   */
  position: CRListItemPosition
  /**
   * Schema.org prepTime: Time required to prepare the items.
   */
  prepTime: SchemaOrgDuration
  /**
   * Schema.org previousItem: A link to the ListItem that precedes the current
   * one.
   */
  previousItem: CRListItemRelation
  /**
   * Schema.org supply: A supply consumed when performing the direction.
   */
  supply: Readonly<CRSet<CRHowToDirectionSupply>>
  /**
   * Schema.org tool: An object used when performing the direction.
   */
  tool: Readonly<CRSet<CRHowToDirectionTool>>
  /**
   * Schema.org totalTime: Total time required to perform instructions.
   */
  totalTime: SchemaOrgDuration
} & CRCreativeWorkState<Type>
