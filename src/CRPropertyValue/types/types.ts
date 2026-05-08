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
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
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

export type CRPropertyValueMeasurement =
  | CRDefinedTermSnapshot
  | CREnumerationSnapshot<'MeasurementMethodEnum'>
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

export type CRPropertyValueValue =
  | SchemaOrgBoolean
  | SchemaOrgNumber
  | SchemaOrgText
  | CRStructuredValueSnapshot
  | CRIdReferenceValue

export type CRPropertyValueReference =
  | CRDefinedTermSnapshot
  | CREnumerationSnapshot
  | CREnumerationSnapshot<'MeasurementTypeEnumeration'>
  | CRStructuredValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

export type CRPropertyValueDefaultShape<Type = 'PropertyValue'> = {
  maxValue: SchemaOrgNumber
  measurementMethod: CRSetSnapshot<CRPropertyValueMeasurement>
  measurementTechnique: CRSetSnapshot<CRPropertyValueMeasurement>
  minValue: SchemaOrgNumber
  propertyID: CRTextSnapshot
  unitCode: CRTextSnapshot
  unitText: CRTextSnapshot
  value: CRPropertyValueValue
  valueReference: CRSetSnapshot<CRPropertyValueReference>
} & CRStructuredValueDefaultShape<Type>

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

export type CRPropertyValueState<Type = 'PropertyValue'> = {
  maxValue: SchemaOrgNumber
  measurementMethod: Readonly<CRSet<CRPropertyValueMeasurement>>
  measurementTechnique: Readonly<CRSet<CRPropertyValueMeasurement>>
  minValue: SchemaOrgNumber
  propertyID: Readonly<CRText>
  unitCode: Readonly<CRText>
  unitText: Readonly<CRText>
  value: CRPropertyValueValue
  valueReference: Readonly<CRSet<CRPropertyValueReference>>
} & CRStructuredValueState<Type>
