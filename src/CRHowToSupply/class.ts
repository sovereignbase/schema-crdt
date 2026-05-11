import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRHowToItem } from '../CRHowToItem/class.js'

import type {
  CRHowToSupplyDefaultShape,
  CRHowToSupplyState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org HowToSupply.
 *
 * Schema.org: A supply consumed when performing instructions.
 */
export class CRHowToSupply<
  Type = 'HowToSupply',
  Shape extends CRHowToSupplyDefaultShape<Type> =
    CRHowToSupplyDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRHowToItem<Type, Shape, Snapshot>
  implements CRHowToSupplyState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org estimatedCost: Estimated cost of consumed supplies.
   */
  declare public estimatedCost: CRHowToSupplyState<Type>['estimatedCost']

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
        '@type': 'HowToSupply' as Type,
        estimatedCost: '',
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
