import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crIdReferenceValue, crListSnapshot } from '../.shared/index.js'

import type {
  CRHowToSectionDefaultShape,
  CRHowToSectionState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org HowToSection.
 *
 * Schema.org: A sub-grouping of how-to steps.
 */
export class CRHowToSection<
  Type = 'HowToSection',
  Shape extends CRHowToSectionDefaultShape<Type> =
    CRHowToSectionDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRHowToSectionState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public aggregateElement: CRHowToSectionState<Type>['aggregateElement']
  declare public item: CRHowToSectionState<Type>['item']
  declare public itemListElement: CRHowToSectionState<Type>['itemListElement']
  declare public itemListOrder: CRHowToSectionState<Type>['itemListOrder']
  declare public nextItem: CRHowToSectionState<Type>['nextItem']
  declare public numberOfItems: CRHowToSectionState<Type>['numberOfItems']
  declare public position: CRHowToSectionState<Type>['position']
  declare public previousItem: CRHowToSectionState<Type>['previousItem']

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
        '@type': 'HowToSection' as Type,
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
