import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRListItem } from '../CRListItem/class.js'

import type {
  CRHowToItemDefaultShape,
  CRHowToItemState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org HowToItem.
 *
 * Schema.org: An item used as either a tool or supply when performing
 * instructions.
 */
export class CRHowToItem<
  Type = 'HowToItem',
  Shape extends CRHowToItemDefaultShape<Type> = CRHowToItemDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRListItem<Type, Shape, Snapshot>
  implements CRHowToItemState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org requiredQuantity: The required quantity of the item(s).
   */
  declare public requiredQuantity: CRHowToItemState<Type>['requiredQuantity']

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
        '@type': 'HowToItem' as Type,
        requiredQuantity: 0,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
