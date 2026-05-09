import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type {
  CRPropertyValueDefaultShape,
  CRPropertyValueState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org PropertyValue.
 *
 * Schema.org: A property-value pair representing a feature of a product or
 * place.
 */
export class CRPropertyValue<
  Type = 'PropertyValue',
  Shape extends CRPropertyValueDefaultShape<Type> =
    CRPropertyValueDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStructuredValue<Type, Shape, Snapshot>
  implements CRPropertyValueState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org maxValue: The upper value of some characteristic or property.
   */
  declare public maxValue: CRPropertyValueState['maxValue']
  /**
   * Schema.org measurementMethod: A subproperty of measurementTechnique used
   * for specifying specific methods.
   */
  declare public measurementMethod: CRPropertyValueState['measurementMethod']
  /**
   * Schema.org measurementTechnique: A technique, method or technology used for
   * measuring the corresponding variable.
   */
  declare public measurementTechnique: CRPropertyValueState['measurementTechnique']
  /**
   * Schema.org minValue: The lower value of some characteristic or property.
   */
  declare public minValue: CRPropertyValueState['minValue']
  /**
   * Schema.org propertyID: A commonly used identifier for the characteristic
   * represented by the property.
   */
  declare public propertyID: CRPropertyValueState['propertyID']
  /**
   * Schema.org unitCode: The unit of measurement as a UN/CEFACT Common Code or
   * URL.
   */
  declare public unitCode: CRPropertyValueState['unitCode']
  /**
   * Schema.org unitText: A string or text indicating the unit of measurement.
   */
  declare public unitText: CRPropertyValueState['unitText']
  /**
   * Schema.org value: The value of a QuantitativeValue or property value node.
   */
  declare public value: CRPropertyValueState['value']
  /**
   * Schema.org valueReference: A secondary value that provides additional
   * information on the original value.
   */
  declare public valueReference: CRPropertyValueState['valueReference']

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
        '@type': 'PropertyValue' as Type,
        maxValue: 0,
        measurementMethod: crSetSnapshot,
        measurementTechnique: crSetSnapshot,
        minValue: 0,
        propertyID: crTextSnapshot,
        unitCode: crTextSnapshot,
        unitText: crTextSnapshot,
        value: '',
        valueReference: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
        measurementMethod: 'set',
        measurementTechnique: 'set',
        propertyID: 'text',
        unitCode: 'text',
        unitText: 'text',
        valueReference: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
