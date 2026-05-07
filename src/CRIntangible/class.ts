import { CRThing } from '../CRThing/class.js'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleSnapshot,
  CRIntangibleState,
} from './types/types.js'

export class CRIntangible<
  Type = 'Intangible',
  Shape extends Record<string, unknown> = CRIntangibleDefaultShape<Type>,
  Snapshot extends CRIntangibleSnapshot<Type> = CRIntangibleSnapshot<Type>,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRIntangibleState<Type>
{
  declare public readonly '@type': Type

  constructor(snapshot?: Snapshot) {
    super(snapshot)
  }
}

export * from './types/types.js'
