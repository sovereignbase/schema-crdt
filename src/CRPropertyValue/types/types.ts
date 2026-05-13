import type { PropertyValue } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type { CREnumerationSnapshot } from '../../CREnumeration/types/types.js'
import type { CRDefinedTermSnapshot } from '../../CRDefinedTerm/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueSnapshot,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgBoolean,
  SchemaOrgNumber,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgPropertyValueRaw = Extract<
  PropertyValue,
  { '@type': 'PropertyValue' }
>

type SchemaOrgPropertyValue = Partial<SchemaOrgPropertyValueRaw>

/**
 * Values accepted by Schema.org measurementMethod and measurementTechnique.
 */
export type CRPropertyValueMeasurement =
  | CRDefinedTermSnapshot
  | CREnumerationSnapshot<'MeasurementMethodEnum'>
  | CRTypedIdReferenceValue<'DefinedTerm'>
  | CRTypedIdReferenceValue<'MeasurementMethodEnum'>
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org value.
 */
export type CRPropertyValueValue =
  | SchemaOrgBoolean
  | SchemaOrgNumber
  | SchemaOrgText
  | CRStructuredValueSnapshot
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org valueReference.
 */
export type CRPropertyValueReference =
  | CRDefinedTermSnapshot
  | CREnumerationSnapshot
  | CREnumerationSnapshot<'MeasurementTypeEnumeration'>
  | CRStructuredValueSnapshot
  | CRTypedIdReferenceValue<'DefinedTerm'>
  | CRTypedIdReferenceValue<'Enumeration'>
  | CRTypedIdReferenceValue<'MeasurementTypeEnumeration'>
  | CRTypedIdReferenceValue<'PropertyValue'>
  | CRTypedIdReferenceValue<'QualitativeValue'>
  | CRTypedIdReferenceValue<'QuantitativeValue'>
  | CRTypedIdReferenceValue<'StructuredValue'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org PropertyValue.
 *
 * Schema.org: A property-value pair representing a feature of a product or
 * place.
 */
export type CRPropertyValueDefaultShape<Type = 'PropertyValue'> = {
  /**
   * Schema.org maxValue: The upper value of some characteristic or property.
   */
  maxValue: SchemaOrgNumber
  /**
   * Schema.org measurementMethod: A subproperty of measurementTechnique used
   * for specifying specific methods.
   */
  measurementMethod: CRSetSnapshot<CRPropertyValueMeasurement>
  /**
   * Schema.org measurementTechnique: A technique, method or technology used for
   * measuring the corresponding variable.
   */
  measurementTechnique: CRSetSnapshot<CRPropertyValueMeasurement>
  /**
   * Schema.org minValue: The lower value of some characteristic or property.
   */
  minValue: SchemaOrgNumber
  /**
   * Schema.org propertyID: A commonly used identifier for the characteristic
   * represented by the property.
   */
  propertyID: CRTextSnapshot
  /**
   * Schema.org unitCode: The unit of measurement as a UN/CEFACT Common Code or
   * URL.
   */
  unitCode: CRTextSnapshot
  /**
   * Schema.org unitText: A string or text indicating the unit of measurement.
   */
  unitText: CRTextSnapshot
  /**
   * Schema.org value: The value of a QuantitativeValue or property value node.
   */
  value: CRPropertyValueValue
  /**
   * Schema.org valueReference: A secondary value that provides additional
   * information on the original value.
   */
  valueReference: CRSetSnapshot<CRPropertyValueReference>
} & CRStructuredValueDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org PropertyValue.
 */
export type CRPropertyValueSnapshot<Type = 'PropertyValue'> =
  CRStructPartialSnapshot<
    CRPropertyValueDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgPropertyValue,
  keyof CRPropertyValueSnapshot
>

type ExtraKeys = Exclude<
  keyof CRPropertyValueSnapshot,
  keyof SchemaOrgPropertyValue
>

/**
 * Runtime CRDT state surface for Schema.org PropertyValue.
 */
export type CRPropertyValueState<Type = 'PropertyValue'> = {
  /**
   * Schema.org maxValue: The upper value of some characteristic or property.
   */
  maxValue: SchemaOrgNumber
  /**
   * Schema.org measurementMethod: A subproperty of measurementTechnique used
   * for specifying specific methods.
   */
  measurementMethod: Readonly<CRSet<CRPropertyValueMeasurement>>
  /**
   * Schema.org measurementTechnique: A technique, method or technology used for
   * measuring the corresponding variable.
   */
  measurementTechnique: Readonly<CRSet<CRPropertyValueMeasurement>>
  /**
   * Schema.org minValue: The lower value of some characteristic or property.
   */
  minValue: SchemaOrgNumber
  /**
   * Schema.org propertyID: A commonly used identifier for the characteristic
   * represented by the property.
   */
  propertyID: Readonly<CRText>
  /**
   * Schema.org unitCode: The unit of measurement as a UN/CEFACT Common Code or
   * URL.
   */
  unitCode: Readonly<CRText>
  /**
   * Schema.org unitText: A string or text indicating the unit of measurement.
   */
  unitText: Readonly<CRText>
  /**
   * Schema.org value: The value of a QuantitativeValue or property value node.
   */
  value: CRPropertyValueValue
  /**
   * Schema.org valueReference: A secondary value that provides additional
   * information on the original value.
   */
  valueReference: Readonly<CRSet<CRPropertyValueReference>>
} & CRStructuredValueState<Type>
