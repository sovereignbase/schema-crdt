import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crTextSnapshot } from '../.shared/index.js'

import type {
  CRMonetaryAmountDefaultShape,
  CRMonetaryAmountState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org MonetaryAmount.
 *
 * Schema.org: A monetary value or range.
 */
export class CRMonetaryAmount<
  Type = 'MonetaryAmount',
  Shape extends CRMonetaryAmountDefaultShape<Type> =
    CRMonetaryAmountDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStructuredValue<Type, Shape, Snapshot>
  implements CRMonetaryAmountState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public currency: CRMonetaryAmountState<Type>['currency']
  declare public maxValue: CRMonetaryAmountState<Type>['maxValue']
  declare public minValue: CRMonetaryAmountState<Type>['minValue']
  declare public validFrom: CRMonetaryAmountState<Type>['validFrom']
  declare public validThrough: CRMonetaryAmountState<Type>['validThrough']
  declare public value: CRMonetaryAmountState<Type>['value']

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
        '@type': 'MonetaryAmount' as Type,
        currency: crTextSnapshot,
        maxValue: 0,
        minValue: 0,
        validFrom: '',
        validThrough: '',
        value: 0,
        ...defaultShape,
      } as Partial<Shape>,
      {
        currency: 'text',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
