import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from './types/types.js'

export class CRIntangible<
  Type = 'Intangible',
  Shape extends CRIntangibleDefaultShape<Type> = CRIntangibleDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRIntangibleState<Type>
{
  declare public readonly '@type': Type

  constructor(
    snapshot?: Snapshot,
    defaultShape?: Partial<Shape>,
    crdtProperties?: Partial<
      Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
    >
  ) {
    super(snapshot, defaultShape, crdtProperties)
  }
}

export * from './types/types.js'
