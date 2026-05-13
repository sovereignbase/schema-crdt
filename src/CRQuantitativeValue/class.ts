import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRQuantitativeValueDefaultShape,
  CRQuantitativeValueState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org QuantitativeValue.
 *
 * Schema.org: A point value or interval for product characteristics and other
 * purposes.
 */
export class CRQuantitativeValue<
  Type = 'QuantitativeValue',
  Shape extends CRQuantitativeValueDefaultShape<Type> =
    CRQuantitativeValueDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStructuredValue<Type, Shape, Snapshot>
  implements CRQuantitativeValueState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org additionalProperty: Additional property-value characteristics.
   */
  declare public additionalProperty: CRQuantitativeValueState<Type>['additionalProperty']
  /**
   * Schema.org maxValue: The upper value of some characteristic or property.
   */
  declare public maxValue: CRQuantitativeValueState<Type>['maxValue']
  /**
   * Schema.org minValue: The lower value of some characteristic or property.
   */
  declare public minValue: CRQuantitativeValueState<Type>['minValue']
  /**
   * Schema.org unitCode: The unit of measurement as a UN/CEFACT code or URL.
   */
  declare public unitCode: CRQuantitativeValueState<Type>['unitCode']
  /**
   * Schema.org unitText: A string indicating the unit of measurement.
   */
  declare public unitText: CRQuantitativeValueState<Type>['unitText']
  /**
   * Schema.org value: The value of a QuantitativeValue node.
   */
  declare public value: CRQuantitativeValueState<Type>['value']
  /**
   * Schema.org valueReference: Secondary information about the original value.
   */
  declare public valueReference: CRQuantitativeValueState<Type>['valueReference']

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
        '@type': 'QuantitativeValue' as Type,
        additionalProperty: crSetSnapshot,
        maxValue: 0,
        minValue: 0,
        unitCode: '',
        unitText: '',
        value: 0,
        valueReference: crSetSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        additionalProperty: 'set',
        valueReference: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
