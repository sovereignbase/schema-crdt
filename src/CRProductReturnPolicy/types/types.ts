import type { ProductReturnPolicy } from 'schema-dts'

import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgInteger,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgProductReturnPolicyRaw = Extract<
  ProductReturnPolicy,
  { '@type': 'ProductReturnPolicy' }
>

type SchemaOrgProductReturnPolicy = Partial<SchemaOrgProductReturnPolicyRaw>

/**
 * Serializable CRDT shape for Schema.org ProductReturnPolicy.
 *
 * Schema.org: A product return policy.
 */
export type CRProductReturnPolicyDefaultShape<Type = 'ProductReturnPolicy'> = {
  /**
   * Schema.org productReturnDays: The productReturnDays property indicates the
   * number of days from delivery that a product can be returned.
   */
  productReturnDays: SchemaOrgInteger
  /**
   * Schema.org productReturnLink: Link to product return policy information.
   */
  productReturnLink: SchemaOrgURL
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org ProductReturnPolicy.
 */
export type CRProductReturnPolicySnapshot<Type = 'ProductReturnPolicy'> =
  CRStructPartialSnapshot<
    CRProductReturnPolicyDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgProductReturnPolicy,
  keyof CRProductReturnPolicySnapshot
>

type ExtraKeys = Exclude<
  keyof CRProductReturnPolicySnapshot,
  keyof SchemaOrgProductReturnPolicy
>

/**
 * Runtime CRDT state surface for Schema.org ProductReturnPolicy.
 */
export type CRProductReturnPolicyState<Type = 'ProductReturnPolicy'> = {
  /**
   * Schema.org productReturnDays: The productReturnDays property indicates the
   * number of days from delivery that a product can be returned.
   */
  productReturnDays: SchemaOrgInteger
  /**
   * Schema.org productReturnLink: Link to product return policy information.
   */
  productReturnLink: SchemaOrgURL
} & CRThingState<Type>
