import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crIdReferenceValue } from '../.shared/index.js'

import type { CRListItemDefaultShape, CRListItemState } from './types/types.js'

/**
 * CRDT-backed Schema.org ListItem.
 *
 * Schema.org: An list item, e.g. a step in a checklist or how-to description.
 */
export class CRListItem<
  Type = 'ListItem',
  Shape extends CRListItemDefaultShape<Type> = CRListItemDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRListItemState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org item: An entity represented by an entry in a list or data feed.
   */
  declare public item: CRListItemState<Type>['item']
  /**
   * Schema.org nextItem: A link to the ListItem that follows the current one.
   */
  declare public nextItem: CRListItemState<Type>['nextItem']
  /**
   * Schema.org position: The position of an item in a series or sequence.
   */
  declare public position: CRListItemState<Type>['position']
  /**
   * Schema.org previousItem: A link to the ListItem that precedes the current
   * one.
   */
  declare public previousItem: CRListItemState<Type>['previousItem']

  constructor(
    snapshot?: Snapshot,
    defaultShape?: Partial<Shape>,
    crdtProperties?: Partial<
      Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
    >
  ) {
    super(
      snapshot,
      {
        '@type': 'ListItem' as Type,
        item: crIdReferenceValue,
        nextItem: crIdReferenceValue,
        position: 0,
        previousItem: crIdReferenceValue,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
