import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crIdReferenceValue } from '../.shared/index.js'

import type { CRHowToTipDefaultShape, CRHowToTipState } from './types/types.js'

/**
 * CRDT-backed Schema.org HowToTip.
 *
 * Schema.org: Supplementary information in how-to instructions.
 */
export class CRHowToTip<
  Type = 'HowToTip',
  Shape extends CRHowToTipDefaultShape<Type> = CRHowToTipDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRHowToTipState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public item: CRHowToTipState<Type>['item']
  declare public nextItem: CRHowToTipState<Type>['nextItem']
  declare public position: CRHowToTipState<Type>['position']
  declare public previousItem: CRHowToTipState<Type>['previousItem']

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
        '@type': 'HowToTip' as Type,
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
