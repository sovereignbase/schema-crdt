import type { Rating } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type { CRStructuredValueSnapshot } from '../../CRStructuredValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgNumber,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgRatingRaw = Extract<Rating, { '@type': 'Rating' }>

type SchemaOrgRating = Partial<SchemaOrgRatingRaw>

/**
 * Values accepted by Schema.org author.
 */
export type CRRatingAuthor =
  | CRTypedIdReferenceValue<'Organization'>
  | CRTypedIdReferenceValue<'Person'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org bestRating, ratingValue and worstRating.
 */
export type CRRatingValue = SchemaOrgNumber | SchemaOrgText

/**
 * Values accepted by Schema.org reviewAspect.
 */
export type CRRatingReviewAspect =
  | CRStructuredValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org Rating.
 *
 * Schema.org: An evaluation on a numeric scale, such as 1 to 5 stars.
 */
export type CRRatingDefaultShape<Type = 'Rating'> = {
  /**
   * Schema.org author: The author of this content or rating.
   */
  author: CRSetSnapshot<CRRatingAuthor>
  /**
   * Schema.org bestRating: The highest value allowed in this rating system.
   */
  bestRating: CRRatingValue
  /**
   * Schema.org ratingExplanation: A short explanation providing context for
   * the rating.
   */
  ratingExplanation: CRTextSnapshot
  /**
   * Schema.org ratingValue: The rating for the content.
   */
  ratingValue: CRRatingValue
  /**
   * Schema.org reviewAspect: The part or facet of the itemReviewed to which
   * this Review or Rating is relevant.
   */
  reviewAspect: CRSetSnapshot<CRRatingReviewAspect>
  /**
   * Schema.org worstRating: The lowest value allowed in this rating system.
   */
  worstRating: CRRatingValue
} & CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Rating.
 */
export type CRRatingSnapshot<Type = 'Rating'> = CRStructPartialSnapshot<
  CRRatingDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgRating, keyof CRRatingSnapshot>

type ExtraKeys = Exclude<keyof CRRatingSnapshot, keyof SchemaOrgRating>

/**
 * Runtime CRDT state surface for Schema.org Rating.
 */
export type CRRatingState<Type = 'Rating'> = {
  /**
   * Schema.org author: The author of this content or rating.
   */
  author: Readonly<CRSet<CRRatingAuthor>>
  /**
   * Schema.org bestRating: The highest value allowed in this rating system.
   */
  bestRating: CRRatingValue
  /**
   * Schema.org ratingExplanation: A short explanation providing context for
   * the rating.
   */
  ratingExplanation: Readonly<CRText>
  /**
   * Schema.org ratingValue: The rating for the content.
   */
  ratingValue: CRRatingValue
  /**
   * Schema.org reviewAspect: The part or facet of the itemReviewed to which
   * this Review or Rating is relevant.
   */
  reviewAspect: Readonly<CRSet<CRRatingReviewAspect>>
  /**
   * Schema.org worstRating: The lowest value allowed in this rating system.
   */
  worstRating: CRRatingValue
} & CRIntangibleState<Type>
