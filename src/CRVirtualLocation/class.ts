import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'

import type {
  CRVirtualLocationDefaultShape,
  CRVirtualLocationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org VirtualLocation.
 *
 * Schema.org: An online or virtual location for attending events or actions.
 */
export class CRVirtualLocation<
  Type = 'VirtualLocation',
  Shape extends CRVirtualLocationDefaultShape<Type> =
    CRVirtualLocationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRVirtualLocationState<Type>
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
        '@type': 'VirtualLocation' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
