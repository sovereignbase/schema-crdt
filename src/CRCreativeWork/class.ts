import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org CreativeWork.
 *
 * Schema.org: The most generic kind of creative work.
 */
export class CRCreativeWork<
  Type = 'CreativeWork',
  Shape extends CRCreativeWorkDefaultShape<Type> =
    CRCreativeWorkDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRCreativeWorkState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org about: The subject matter of an object.
   */
  declare public about: CRCreativeWorkState['about']

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
        '@type': 'CreativeWork' as Type,
        about: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
        about: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
