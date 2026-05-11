import type { HowToSupply } from 'schema-dts'

import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type {
  CRHowToItemDefaultShape,
  CRHowToItemState,
} from '../../CRHowToItem/types/types.js'
import type { CRMonetaryAmountSnapshot } from '../../CRMonetaryAmount/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgHowToSupplyRaw = Extract<HowToSupply, { '@type': 'HowToSupply' }>

type SchemaOrgHowToSupply = Partial<SchemaOrgHowToSupplyRaw>

/**
 * Values accepted by Schema.org estimatedCost.
 */
export type CRHowToSupplyEstimatedCost =
  | CRMonetaryAmountSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org HowToSupply.
 *
 * Schema.org: A supply consumed when performing instructions.
 */
export type CRHowToSupplyDefaultShape<Type = 'HowToSupply'> = {
  /**
   * Schema.org estimatedCost: Estimated cost of consumed supplies.
   */
  estimatedCost: CRHowToSupplyEstimatedCost
} & CRHowToItemDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org HowToSupply.
 */
export type CRHowToSupplySnapshot<Type = 'HowToSupply'> =
  CRStructPartialSnapshot<
    CRHowToSupplyDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgHowToSupply,
  keyof CRHowToSupplySnapshot
>

type ExtraKeys = Exclude<
  keyof CRHowToSupplySnapshot,
  keyof SchemaOrgHowToSupply
>

/**
 * Runtime CRDT state surface for Schema.org HowToSupply.
 */
export type CRHowToSupplyState<Type = 'HowToSupply'> = {
  /**
   * Schema.org estimatedCost: Estimated cost of consumed supplies.
   */
  estimatedCost: CRHowToSupplyEstimatedCost
} & CRHowToItemState<Type>
