import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CREnumeration } from '../CREnumeration/class.js'

import type {
  CRItemListOrderTypeDefaultShape,
  CRItemListOrderTypeState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org ItemListOrderType.
 *
 * Schema.org: Enumerated values for how an ordered ItemList is organized.
 */
export class CRItemListOrderType<
  Type = 'ItemListOrderType',
  Shape extends CRItemListOrderTypeDefaultShape<Type> =
    CRItemListOrderTypeDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CREnumeration<Type, Shape, Snapshot>
  implements CRItemListOrderTypeState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type

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
        '@type': 'ItemListOrderType' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
