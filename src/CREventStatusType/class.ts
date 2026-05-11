import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStatusEnumeration } from '../CRStatusEnumeration/class.js'

import type {
  CREventStatusTypeDefaultShape,
  CREventStatusTypeState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org EventStatusType.
 *
 * Schema.org: An enumeration type whose instances represent states that an
 * Event may be in.
 */
export class CREventStatusType<
  Type = 'EventStatusType',
  Shape extends CREventStatusTypeDefaultShape<Type> =
    CREventStatusTypeDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStatusEnumeration<Type, Shape, Snapshot>
  implements CREventStatusTypeState<Type>
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
        '@type': 'EventStatusType' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
