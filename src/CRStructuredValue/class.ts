import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'

import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from './types/types.js'

export class CRStructuredValue<
  Type = 'StructuredValue',
  Shape extends CRStructuredValueDefaultShape<Type> =
    CRStructuredValueDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRStructuredValueState<Type>
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
