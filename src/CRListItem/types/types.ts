import type { ListItem } from 'schema-dts'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
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

type SchemaOrgListItemRaw = Extract<ListItem, { '@type': 'ListItem' }>

type SchemaOrgListItem = Partial<SchemaOrgListItemRaw>

/**
 * Values accepted by Schema.org item.
 */
export type CRListItemItem =
  | CRStructPartialSnapshot<
      CRThingDefaultShape<string>,
      '@id' | '@type' | 'identifier'
    >
  | CRTypedIdReferenceValue<'Thing'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org nextItem and previousItem.
 */
export type CRListItemRelation =
  | CRTypedIdReferenceValue<'ListItem'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org position.
 */
export type CRListItemPosition = SchemaOrgInteger | SchemaOrgText

/**
 * Serializable CRDT shape for Schema.org ListItem.
 *
 * Schema.org: An list item, e.g. a step in a checklist or how-to description.
 */
export type CRListItemDefaultShape<Type = 'ListItem'> = {
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
} & CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org ListItem.
 */
export type CRListItemSnapshot<Type = 'ListItem'> = CRStructPartialSnapshot<
  CRListItemDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgListItem, keyof CRListItemSnapshot>

type ExtraKeys = Exclude<keyof CRListItemSnapshot, keyof SchemaOrgListItem>

/**
 * Runtime CRDT state surface for Schema.org ListItem.
 */
export type CRListItemState<Type = 'ListItem'> = {
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
} & CRIntangibleState<Type>
