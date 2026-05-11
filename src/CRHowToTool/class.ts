import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRHowToItem } from '../CRHowToItem/class.js'

import type {
  CRHowToToolDefaultShape,
  CRHowToToolState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org HowToTool.
 *
 * Schema.org: A tool used when performing instructions.
 */
export class CRHowToTool<
  Type = 'HowToTool',
  Shape extends CRHowToToolDefaultShape<Type> = CRHowToToolDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRHowToItem<Type, Shape, Snapshot>
  implements CRHowToToolState<Type>
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
        '@type': 'HowToTool' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
