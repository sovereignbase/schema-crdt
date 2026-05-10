import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRAdministrativeArea } from '../CRAdministrativeArea/class.js'

import type { CRCountryDefaultShape, CRCountryState } from './types/types.js'

/**
 * CRDT-backed Schema.org Country.
 *
 * Schema.org: A country.
 */
export class CRCountry<
  Type = 'Country',
  Shape extends CRCountryDefaultShape<Type> = CRCountryDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRAdministrativeArea<Type, Shape, Snapshot>
  implements CRCountryState<Type>
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
        '@type': 'Country' as Type,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
