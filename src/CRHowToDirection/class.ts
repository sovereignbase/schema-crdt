import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crIdReferenceValue, crSetSnapshot } from '../.shared/index.js'

import type {
  CRHowToDirectionDefaultShape,
  CRHowToDirectionState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org HowToDirection.
 *
 * Schema.org: A direction indicating a single action in how-to instructions.
 */
export class CRHowToDirection<
  Type = 'HowToDirection',
  Shape extends CRHowToDirectionDefaultShape<Type> =
    CRHowToDirectionDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRHowToDirectionState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public afterMedia: CRHowToDirectionState<Type>['afterMedia']
  declare public beforeMedia: CRHowToDirectionState<Type>['beforeMedia']
  declare public duringMedia: CRHowToDirectionState<Type>['duringMedia']
  declare public item: CRHowToDirectionState<Type>['item']
  declare public nextItem: CRHowToDirectionState<Type>['nextItem']
  declare public performTime: CRHowToDirectionState<Type>['performTime']
  declare public position: CRHowToDirectionState<Type>['position']
  declare public prepTime: CRHowToDirectionState<Type>['prepTime']
  declare public previousItem: CRHowToDirectionState<Type>['previousItem']
  declare public supply: CRHowToDirectionState<Type>['supply']
  declare public tool: CRHowToDirectionState<Type>['tool']
  declare public totalTime: CRHowToDirectionState<Type>['totalTime']

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
        '@type': 'HowToDirection' as Type,
        afterMedia: crSetSnapshot,
        beforeMedia: crSetSnapshot,
        duringMedia: crSetSnapshot,
        item: crIdReferenceValue,
        nextItem: crIdReferenceValue,
        performTime: '',
        position: 0,
        prepTime: '',
        previousItem: crIdReferenceValue,
        supply: crSetSnapshot,
        tool: crSetSnapshot,
        totalTime: '',
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        afterMedia: 'set',
        beforeMedia: 'set',
        duringMedia: 'set',
        supply: 'set',
        tool: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >,
      {
        performTime:
          /^P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$/,
        prepTime:
          /^P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$/,
        totalTime:
          /^P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$/,
      } as Partial<Record<Extract<keyof Shape, string>, RegExp>>
    )
  }
}

export * from './types/types.js'
