import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crIdReferenceValue, crListSnapshot } from '../.shared/index.js'

import type {
  CRHowToStepDefaultShape,
  CRHowToStepState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org HowToStep.
 *
 * Schema.org: A step in how-to instructions.
 */
export class CRHowToStep<
  Type = 'HowToStep',
  Shape extends CRHowToStepDefaultShape<Type> = CRHowToStepDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRHowToStepState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public aggregateElement: CRHowToStepState<Type>['aggregateElement']
  declare public item: CRHowToStepState<Type>['item']
  declare public itemListElement: CRHowToStepState<Type>['itemListElement']
  declare public itemListOrder: CRHowToStepState<Type>['itemListOrder']
  declare public nextItem: CRHowToStepState<Type>['nextItem']
  declare public numberOfItems: CRHowToStepState<Type>['numberOfItems']
  declare public position: CRHowToStepState<Type>['position']
  declare public previousItem: CRHowToStepState<Type>['previousItem']

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
        '@type': 'HowToStep' as Type,
        aggregateElement: crIdReferenceValue,
        item: crIdReferenceValue,
        itemListElement: crListSnapshot,
        itemListOrder: '',
        nextItem: crIdReferenceValue,
        numberOfItems: 0,
        position: 0,
        previousItem: crIdReferenceValue,
        ...defaultShape,
      } as unknown as Partial<Shape>,
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
