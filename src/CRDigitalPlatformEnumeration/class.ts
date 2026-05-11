import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CREnumeration } from '../CREnumeration/class.js'

import type {
  CRDigitalPlatformEnumerationDefaultShape,
  CRDigitalPlatformEnumerationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org DigitalPlatformEnumeration.
 *
 * Schema.org: Enumerates common technology platforms for properties such as
 * actionPlatform.
 */
export class CRDigitalPlatformEnumeration<
  Type = 'DigitalPlatformEnumeration',
  Shape extends CRDigitalPlatformEnumerationDefaultShape<Type> =
    CRDigitalPlatformEnumerationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CREnumeration<Type, Shape, Snapshot>
  implements CRDigitalPlatformEnumerationState<Type>
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
        '@type': 'DigitalPlatformEnumeration' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
