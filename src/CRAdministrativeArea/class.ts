import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRPlace } from '../CRPlace/class.js'

import type {
  CRAdministrativeAreaDefaultShape,
  CRAdministrativeAreaState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org AdministrativeArea.
 *
 * Schema.org: A geographical region, typically under the jurisdiction of a
 * particular government.
 */
export class CRAdministrativeArea<
  Type = 'AdministrativeArea',
  Shape extends CRAdministrativeAreaDefaultShape<Type> =
    CRAdministrativeAreaDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRPlace<Type, Shape, Snapshot>
  implements CRAdministrativeAreaState<Type>
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
        '@type': 'AdministrativeArea' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
