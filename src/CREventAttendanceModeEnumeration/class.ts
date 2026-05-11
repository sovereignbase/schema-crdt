import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CREnumeration } from '../CREnumeration/class.js'

import type {
  CREventAttendanceModeEnumerationDefaultShape,
  CREventAttendanceModeEnumerationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org EventAttendanceModeEnumeration.
 *
 * Schema.org: Values for whether an event is online, offline, or mixed.
 */
export class CREventAttendanceModeEnumeration<
  Type = 'EventAttendanceModeEnumeration',
  Shape extends CREventAttendanceModeEnumerationDefaultShape<Type> =
    CREventAttendanceModeEnumerationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CREnumeration<Type, Shape, Snapshot>
  implements CREventAttendanceModeEnumerationState<Type>
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
        '@type': 'EventAttendanceModeEnumeration' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
