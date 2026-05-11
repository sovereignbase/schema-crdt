import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CREnumeration } from '../CREnumeration/class.js'

import type {
  CRActionStatusTypeDefaultShape,
  CRActionStatusTypeState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org ActionStatusType.
 *
 * Schema.org: The status of an Action.
 */
export class CRActionStatusType<
  Type = 'ActionStatusType',
  Shape extends CRActionStatusTypeDefaultShape<Type> =
    CRActionStatusTypeDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CREnumeration<Type, Shape, Snapshot>
  implements CRActionStatusTypeState<Type>
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
        '@type': 'ActionStatusType' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
