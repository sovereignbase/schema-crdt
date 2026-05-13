import type { MonetaryAmount } from 'schema-dts'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueSnapshot,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgBoolean,
  SchemaOrgDate,
  SchemaOrgDateTime,
  SchemaOrgNumber,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgMonetaryAmountRaw = Extract<
  MonetaryAmount,
  { '@type': 'MonetaryAmount' }
>

type SchemaOrgMonetaryAmount = Partial<SchemaOrgMonetaryAmountRaw>

/**
 * Values accepted by Schema.org MonetaryAmount value.
 */
export type CRMonetaryAmountValue =
  | SchemaOrgBoolean
  | SchemaOrgNumber
  | CRStructuredValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org MonetaryAmount.
 *
 * Schema.org: A monetary value or range.
 */
export type CRMonetaryAmountDefaultShape<Type = 'MonetaryAmount'> = {
  /**
   * Schema.org currency: The currency in which the monetary amount is expressed.
   */
  currency: SchemaOrgText
  /**
   * Schema.org maxValue: The upper value of some characteristic or property.
   */
  maxValue: SchemaOrgNumber
  /**
   * Schema.org minValue: The lower value of some characteristic or property.
   */
  minValue: SchemaOrgNumber
  /**
   * Schema.org validFrom: The date when the item becomes valid.
   */
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org validThrough: The date after when the item is not valid.
   */
  validThrough: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org value: The value of a MonetaryAmount node.
   */
  value: CRMonetaryAmountValue
} & CRStructuredValueDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org MonetaryAmount.
 */
export type CRMonetaryAmountSnapshot<Type = 'MonetaryAmount'> =
  CRStructPartialSnapshot<
    CRMonetaryAmountDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgMonetaryAmount,
  keyof CRMonetaryAmountSnapshot
>

type ExtraKeys = Exclude<
  keyof CRMonetaryAmountSnapshot,
  keyof SchemaOrgMonetaryAmount
>

/**
 * Runtime CRDT state surface for Schema.org MonetaryAmount.
 */
export type CRMonetaryAmountState<Type = 'MonetaryAmount'> = {
  /**
   * Schema.org currency: The currency in which the monetary amount is expressed.
   */
  currency: SchemaOrgText
  /**
   * Schema.org maxValue: The upper value of some characteristic or property.
   */
  maxValue: SchemaOrgNumber
  /**
   * Schema.org minValue: The lower value of some characteristic or property.
   */
  minValue: SchemaOrgNumber
  /**
   * Schema.org validFrom: The date when the item becomes valid.
   */
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org validThrough: The date after when the item is not valid.
   */
  validThrough: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org value: The value of a MonetaryAmount node.
   */
  value: CRMonetaryAmountValue
} & CRStructuredValueState<Type>
