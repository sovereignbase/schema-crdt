import type { Review } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRItemListSnapshot } from '../../CRItemList/types/types.js'
import type { CRListItemSnapshot } from '../../CRListItem/types/types.js'
import type { CRRatingSnapshot } from '../../CRRating/types/types.js'
import type { CRStructuredValueSnapshot } from '../../CRStructuredValue/types/types.js'
import type { CRThingSnapshot } from '../../CRThing/types/types.js'
import type { CRWebContentSnapshot } from '../../CRWebContent/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgReviewRaw = Extract<Review, { '@type': 'Review' }>

type SchemaOrgReview = Partial<SchemaOrgReviewRaw>

/**
 * Values accepted by Schema.org associatedClaimReview.
 */
export type CRReviewAssociatedClaimReview =
  | CRTypedIdReferenceValue<'ClaimReview'>
  | CRTypedIdReferenceValue<'Review'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org associatedMediaReview.
 */
export type CRReviewAssociatedMediaReview =
  | CRTypedIdReferenceValue<'MediaReview'>
  | CRTypedIdReferenceValue<'Review'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org associatedReview.
 */
export type CRReviewAssociatedReview =
  | CRTypedIdReferenceValue<'Review'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org itemReviewed.
 */
export type CRReviewItemReviewed = CRThingSnapshot | CRIdReferenceValue

/**
 * Values accepted by Schema.org negativeNotes and positiveNotes.
 */
export type CRReviewNotes =
  | CRItemListSnapshot
  | CRListItemSnapshot
  | CRWebContentSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org reviewAspect.
 */
export type CRReviewAspect =
  | CRStructuredValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org reviewRating.
 */
export type CRReviewRating = CRRatingSnapshot | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org Review.
 *
 * Schema.org: A review of an item.
 *
 * Deprecated Schema.org properties intentionally omitted:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews.
 */
export type CRReviewDefaultShape<Type = 'Review'> = {
  /**
   * Schema.org associatedClaimReview: Associated claim review related by
   * common content, topic or claim.
   */
  associatedClaimReview: CRSetSnapshot<CRReviewAssociatedClaimReview>
  /**
   * Schema.org associatedMediaReview: Associated media review related by
   * common content, topic or claim.
   */
  associatedMediaReview: CRSetSnapshot<CRReviewAssociatedMediaReview>
  /**
   * Schema.org associatedReview: An associated Review.
   */
  associatedReview: CRSetSnapshot<CRReviewAssociatedReview>
  /**
   * Schema.org itemReviewed: The item that is being reviewed or rated.
   */
  itemReviewed: CRSetSnapshot<CRReviewItemReviewed>
  /**
   * Schema.org negativeNotes: Negative considerations regarding the reviewed item.
   */
  negativeNotes: CRSetSnapshot<CRReviewNotes>
  /**
   * Schema.org positiveNotes: Positive considerations regarding the reviewed item.
   */
  positiveNotes: CRSetSnapshot<CRReviewNotes>
  /**
   * Schema.org reviewAspect: The part or facet of itemReviewed to which this
   * review is relevant.
   */
  reviewAspect: CRSetSnapshot<CRReviewAspect>
  /**
   * Schema.org reviewBody: The actual body of the review.
   */
  reviewBody: CRTextSnapshot
  /**
   * Schema.org reviewRating: The rating given in this review.
   */
  reviewRating: CRSetSnapshot<CRReviewRating>
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Review.
 */
export type CRReviewSnapshot<Type = 'Review'> = CRStructPartialSnapshot<
  CRReviewDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org Review properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews.
 */
type MissingKeys = Exclude<keyof SchemaOrgReview, keyof CRReviewSnapshot>

type ExtraKeys = Exclude<keyof CRReviewSnapshot, keyof SchemaOrgReview>

/**
 * Runtime CRDT state surface for Schema.org Review.
 */
export type CRReviewState<Type = 'Review'> = {
  /**
   * Schema.org associatedClaimReview: Associated claim review related by
   * common content, topic or claim.
   */
  associatedClaimReview: Readonly<CRSet<CRReviewAssociatedClaimReview>>
  /**
   * Schema.org associatedMediaReview: Associated media review related by
   * common content, topic or claim.
   */
  associatedMediaReview: Readonly<CRSet<CRReviewAssociatedMediaReview>>
  /**
   * Schema.org associatedReview: An associated Review.
   */
  associatedReview: Readonly<CRSet<CRReviewAssociatedReview>>
  /**
   * Schema.org itemReviewed: The item that is being reviewed or rated.
   */
  itemReviewed: Readonly<CRSet<CRReviewItemReviewed>>
  /**
   * Schema.org negativeNotes: Negative considerations regarding the reviewed item.
   */
  negativeNotes: Readonly<CRSet<CRReviewNotes>>
  /**
   * Schema.org positiveNotes: Positive considerations regarding the reviewed item.
   */
  positiveNotes: Readonly<CRSet<CRReviewNotes>>
  /**
   * Schema.org reviewAspect: The part or facet of itemReviewed to which this
   * review is relevant.
   */
  reviewAspect: Readonly<CRSet<CRReviewAspect>>
  /**
   * Schema.org reviewBody: The actual body of the review.
   */
  reviewBody: Readonly<CRText>
  /**
   * Schema.org reviewRating: The rating given in this review.
   */
  reviewRating: Readonly<CRSet<CRReviewRating>>
} & CRCreativeWorkState<Type>
