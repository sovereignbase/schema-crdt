import type { QuantitativeValue } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type { CRDefinedTermSnapshot } from '../../CRDefinedTerm/types/types.js'
import type { CREnumerationSnapshot } from '../../CREnumeration/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRPropertyValueSnapshot } from '../../CRPropertyValue/types/types.js'
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

type SchemaOrgQuantitativeValueRaw = Extract<
  QuantitativeValue,
  { '@type': 'QuantitativeValue' }
>

type SchemaOrgQuantitativeValue = Partial<SchemaOrgQuantitativeValueRaw>

/**
 * Values accepted by Schema.org additionalProperty.
 */
export type CRQuantitativeValueAdditionalProperty =
  | CRPropertyValueSnapshot
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org value.
 */
export type CRQuantitativeValueValue =
  | SchemaOrgBoolean
  | SchemaOrgNumber
  | SchemaOrgText
  | CRStructuredValueSnapshot
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org valueReference.
 */
export type CRQuantitativeValueReference =
  | CRDefinedTermSnapshot
  | CREnumerationSnapshot
  | CREnumerationSnapshot<'MeasurementTypeEnumeration'>
  | CREnumerationSnapshot<'QualitativeValue'>
  | CRPropertyValueSnapshot
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
 * Serializable CRDT shape for Schema.org QuantitativeValue.
 *
 * Schema.org: A point value or interval for product characteristics and other
 * purposes.
 */
export type CRQuantitativeValueDefaultShape<Type = 'QuantitativeValue'> = {
  /**
   * Schema.org additionalProperty: Additional property-value characteristics.
   */
  additionalProperty: CRSetSnapshot<CRQuantitativeValueAdditionalProperty>
  /**
   * Schema.org maxValue: The upper value of some characteristic or property.
   */
  maxValue: SchemaOrgNumber
  /**
   * Schema.org minValue: The lower value of some characteristic or property.
   */
  minValue: SchemaOrgNumber
  /**
   * Schema.org unitCode: The unit of measurement as a UN/CEFACT code or URL.
   */
  unitCode: SchemaOrgText | SchemaOrgURL
  /**
   * Schema.org unitText: A string indicating the unit of measurement.
   */
  unitText: SchemaOrgText
  /**
   * Schema.org value: The value of a QuantitativeValue node.
   */
  value: CRQuantitativeValueValue
  /**
   * Schema.org valueReference: Secondary information about the original value.
   */
  valueReference: CRSetSnapshot<CRQuantitativeValueReference>
} & CRStructuredValueDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org QuantitativeValue.
 */
export type CRQuantitativeValueSnapshot<Type = 'QuantitativeValue'> =
  CRStructPartialSnapshot<
    CRQuantitativeValueDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgQuantitativeValue,
  keyof CRQuantitativeValueSnapshot
>

type ExtraKeys = Exclude<
  keyof CRQuantitativeValueSnapshot,
  keyof SchemaOrgQuantitativeValue
>

/**
 * Runtime CRDT state surface for Schema.org QuantitativeValue.
 */
export type CRQuantitativeValueState<Type = 'QuantitativeValue'> = {
  /**
   * Schema.org additionalProperty: Additional property-value characteristics.
   */
  additionalProperty: Readonly<CRSet<CRQuantitativeValueAdditionalProperty>>
  /**
   * Schema.org maxValue: The upper value of some characteristic or property.
   */
  maxValue: SchemaOrgNumber
  /**
   * Schema.org minValue: The lower value of some characteristic or property.
   */
  minValue: SchemaOrgNumber
  /**
   * Schema.org unitCode: The unit of measurement as a UN/CEFACT code or URL.
   */
  unitCode: SchemaOrgText | SchemaOrgURL
  /**
   * Schema.org unitText: A string indicating the unit of measurement.
   */
  unitText: SchemaOrgText
  /**
   * Schema.org value: The value of a QuantitativeValue node.
   */
  value: CRQuantitativeValueValue
  /**
   * Schema.org valueReference: Secondary information about the original value.
   */
  valueReference: Readonly<CRSet<CRQuantitativeValueReference>>
} & CRStructuredValueState<Type>
