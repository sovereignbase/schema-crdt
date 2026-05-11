import type { HowTo } from 'schema-dts'
import type {
  CRList,
  CRListSnapshot,
} from '@sovereignbase/convergent-replicated-list'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkSnapshot,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRHowToSectionSnapshot } from '../../CRHowToSection/types/types.js'
import type { CRHowToStepSnapshot } from '../../CRHowToStep/types/types.js'
import type { CRHowToSupplySnapshot } from '../../CRHowToSupply/types/types.js'
import type { CRHowToToolSnapshot } from '../../CRHowToTool/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRMonetaryAmountSnapshot } from '../../CRMonetaryAmount/types/types.js'
import type { CRQuantitativeValueSnapshot } from '../../CRQuantitativeValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgDuration,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgHowToRaw = Extract<HowTo, { '@type': 'HowTo' }>

type SchemaOrgHowTo = Partial<SchemaOrgHowToRaw>

/**
 * Values accepted by Schema.org estimatedCost.
 */
export type CRHowToEstimatedCost =
  | CRMonetaryAmountSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org step.
 */
export type CRHowToStepValue =
  | CRHowToSectionSnapshot
  | CRHowToStepSnapshot
  | CRCreativeWorkSnapshot
  | CRTypedIdReferenceValue<'HowToSection'>
  | CRTypedIdReferenceValue<'HowToStep'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org supply.
 */
export type CRHowToSupplyValue =
  | CRHowToSupplySnapshot
  | CRTypedIdReferenceValue<'HowToSupply'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org tool.
 */
export type CRHowToToolValue =
  | CRHowToToolSnapshot
  | CRTypedIdReferenceValue<'HowToTool'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org yield.
 */
export type CRHowToYield =
  | CRQuantitativeValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org HowTo.
 *
 * Schema.org: Instructions that explain how to achieve a result.
 *
 * Deprecated Schema.org properties intentionally omitted:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews, steps.
 */
export type CRHowToDefaultShape<Type = 'HowTo'> = {
  /**
   * Schema.org estimatedCost: Estimated cost of the supplies consumed.
   */
  estimatedCost: CRSetSnapshot<CRHowToEstimatedCost>
  /**
   * Schema.org performTime: Time required to perform instructions.
   */
  performTime: SchemaOrgDuration
  /**
   * Schema.org prepTime: Time required to prepare the items.
   */
  prepTime: SchemaOrgDuration
  /**
   * Schema.org step: Ordered steps or sections in the instructions.
   */
  step: CRListSnapshot<CRHowToStepValue>
  /**
   * Schema.org supply: A supply consumed when performing instructions.
   */
  supply: CRSetSnapshot<CRHowToSupplyValue>
  /**
   * Schema.org tool: An object used when performing instructions.
   */
  tool: CRSetSnapshot<CRHowToToolValue>
  /**
   * Schema.org totalTime: Total time required to perform instructions.
   */
  totalTime: SchemaOrgDuration
  /**
   * Schema.org yield: Quantity that results by performing instructions.
   */
  yield: CRHowToYield
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org HowTo.
 */
export type CRHowToSnapshot<Type = 'HowTo'> = CRStructPartialSnapshot<
  CRHowToDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org HowTo properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews, steps.
 */
type MissingKeys = Exclude<keyof SchemaOrgHowTo, keyof CRHowToSnapshot>

type ExtraKeys = Exclude<keyof CRHowToSnapshot, keyof SchemaOrgHowTo>

/**
 * Runtime CRDT state surface for Schema.org HowTo.
 */
export type CRHowToState<Type = 'HowTo'> = {
  /**
   * Schema.org estimatedCost: Estimated cost of the supplies consumed.
   */
  estimatedCost: Readonly<CRSet<CRHowToEstimatedCost>>
  /**
   * Schema.org performTime: Time required to perform instructions.
   */
  performTime: SchemaOrgDuration
  /**
   * Schema.org prepTime: Time required to prepare the items.
   */
  prepTime: SchemaOrgDuration
  /**
   * Schema.org step: Ordered steps or sections in the instructions.
   */
  step: Readonly<CRList<CRHowToStepValue>>
  /**
   * Schema.org supply: A supply consumed when performing instructions.
   */
  supply: Readonly<CRSet<CRHowToSupplyValue>>
  /**
   * Schema.org tool: An object used when performing instructions.
   */
  tool: Readonly<CRSet<CRHowToToolValue>>
  /**
   * Schema.org totalTime: Total time required to perform instructions.
   */
  totalTime: SchemaOrgDuration
  /**
   * Schema.org yield: Quantity that results by performing instructions.
   */
  yield: CRHowToYield
} & CRCreativeWorkState<Type>
