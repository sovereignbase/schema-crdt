import type { AggregateRating } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type {
  CRRatingDefaultShape,
  CRRatingState,
} from '../../CRRating/types/types.js'
import type { CRThingSnapshot } from '../../CRThing/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgInteger,
} from '../../.types/types.js'

type SchemaOrgAggregateRatingRaw = Extract<
  AggregateRating,
  { '@type': 'AggregateRating' }
>

type SchemaOrgAggregateRating = Partial<SchemaOrgAggregateRatingRaw>

/**
 * Values accepted by Schema.org itemReviewed.
 */
export type CRAggregateRatingItemReviewed = CRThingSnapshot | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org AggregateRating.
 *
 * Schema.org: The average rating based on multiple ratings or reviews.
 */
export type CRAggregateRatingDefaultShape<Type = 'AggregateRating'> = {
  /**
   * Schema.org itemReviewed: The item that is being reviewed/rated.
   */
  itemReviewed: CRSetSnapshot<CRAggregateRatingItemReviewed>
  /**
   * Schema.org ratingCount: The count of total number of ratings.
   */
  ratingCount: SchemaOrgInteger
  /**
   * Schema.org reviewCount: The count of total number of reviews.
   */
  reviewCount: SchemaOrgInteger
} & CRRatingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org AggregateRating.
 */
export type CRAggregateRatingSnapshot<Type = 'AggregateRating'> =
  CRStructPartialSnapshot<
    CRAggregateRatingDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgAggregateRating,
  keyof CRAggregateRatingSnapshot
>

type ExtraKeys = Exclude<
  keyof CRAggregateRatingSnapshot,
  keyof SchemaOrgAggregateRating
>

/**
 * Runtime CRDT state surface for Schema.org AggregateRating.
 */
export type CRAggregateRatingState<Type = 'AggregateRating'> = {
  /**
   * Schema.org itemReviewed: The item that is being reviewed/rated.
   */
  itemReviewed: Readonly<CRSet<CRAggregateRatingItemReviewed>>
  /**
   * Schema.org ratingCount: The count of total number of ratings.
   */
  ratingCount: SchemaOrgInteger
  /**
   * Schema.org reviewCount: The count of total number of reviews.
   */
  reviewCount: SchemaOrgInteger
} & CRRatingState<Type>
