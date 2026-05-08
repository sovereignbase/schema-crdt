import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CREnumerationDefaultShape,
  CREnumerationState,
} from './types/types.js'

export class CREnumeration<
  Type = 'Enumeration',
  Shape extends CREnumerationDefaultShape<Type> =
    CREnumerationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CREnumerationState<Type>
{
  declare public readonly '@type': Type
  declare public supersededBy: CREnumerationState['supersededBy']

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
        '@type': 'Enumeration' as Type,
        supersededBy: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
        supersededBy: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
