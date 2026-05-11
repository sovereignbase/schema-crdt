import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CREnumeration } from '../CREnumeration/class.js'

import type {
  CRStatusEnumerationDefaultShape,
  CRStatusEnumerationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org StatusEnumeration.
 *
 * Schema.org: Lists or enumerations dealing with status types.
 */
export class CRStatusEnumeration<
  Type = 'StatusEnumeration',
  Shape extends CRStatusEnumerationDefaultShape<Type> =
    CRStatusEnumerationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CREnumeration<Type, Shape, Snapshot>
  implements CRStatusEnumerationState<Type>
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
        '@type': 'StatusEnumeration' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
