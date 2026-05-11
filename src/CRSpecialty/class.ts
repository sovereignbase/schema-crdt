import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CREnumeration } from '../CREnumeration/class.js'

import type {
  CRSpecialtyDefaultShape,
  CRSpecialtyState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org Specialty.
 *
 * Schema.org: A branch of a field in which people develop specific expertise.
 */
export class CRSpecialty<
  Type = 'Specialty',
  Shape extends CRSpecialtyDefaultShape<Type> = CRSpecialtyDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CREnumeration<Type, Shape, Snapshot>
  implements CRSpecialtyState<Type>
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
        '@type': 'Specialty' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
