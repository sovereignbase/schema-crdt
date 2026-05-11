import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crSetSnapshot, itemListElement } from '../.shared/index.js'

import type { CRHowToDefaultShape, CRHowToState } from './types/types.js'

/**
 * CRDT-backed Schema.org HowTo.
 *
 * Schema.org: Instructions that explain how to achieve a result.
 */
export class CRHowTo<
  Type = 'HowTo',
  Shape extends CRHowToDefaultShape<Type> = CRHowToDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRHowToState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public estimatedCost: CRHowToState<Type>['estimatedCost']
  declare public performTime: CRHowToState<Type>['performTime']
  declare public prepTime: CRHowToState<Type>['prepTime']
  declare public step: CRHowToState<Type>['step']
  declare public supply: CRHowToState<Type>['supply']
  declare public tool: CRHowToState<Type>['tool']
  declare public totalTime: CRHowToState<Type>['totalTime']
  declare public yield: CRHowToState<Type>['yield']

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
        '@type': 'HowTo' as Type,
        estimatedCost: crSetSnapshot,
        performTime: '',
        prepTime: '',
        step: itemListElement,
        supply: crSetSnapshot,
        tool: crSetSnapshot,
        totalTime: '',
        yield: '',
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        estimatedCost: 'set',
        step: 'list',
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
