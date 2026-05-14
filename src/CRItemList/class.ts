import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crIdReferenceValue, crListSnapshot } from '../.shared/index.js'

import type { CRItemListDefaultShape, CRItemListState } from './types/types.js'

/**
 * CRDT-backed Schema.org ItemList.
 *
 * Schema.org: A list of items of any sort.
 */
export class CRItemList<
  Type = 'ItemList',
  Shape extends CRItemListDefaultShape<Type> = CRItemListDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRItemListState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org aggregateElement: A prototype of the elements in the list.
   */
  declare public aggregateElement: CRItemListState<Type>['aggregateElement']
  /**
   * Schema.org itemListElement: An item in the list.
   */
  declare public itemListElement: CRItemListState<Type>['itemListElement']
  /**
   * Schema.org itemListOrder: Type of ordering, e.g. ascending or descending.
   */
  declare public itemListOrder: CRItemListState<Type>['itemListOrder']
  /**
   * Schema.org numberOfItems: The number of items in an ItemList.
   */
  declare public numberOfItems: CRItemListState<Type>['numberOfItems']

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
        '@type': 'ItemList' as Type,
        aggregateElement: crIdReferenceValue,
        itemListElement: crListSnapshot,
        itemListOrder: '',
        numberOfItems: 0,
        ...defaultShape,
      } as Partial<Shape>,
      {
        itemListElement: 'list',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
