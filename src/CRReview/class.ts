import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type { CRReviewDefaultShape, CRReviewState } from './types/types.js'

/**
 * CRDT-backed Schema.org Review.
 *
 * Schema.org: A review of an item.
 */
export class CRReview<
  Type = 'Review',
  Shape extends CRReviewDefaultShape<Type> = CRReviewDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRReviewState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public associatedClaimReview: CRReviewState<Type>['associatedClaimReview']
  declare public associatedMediaReview: CRReviewState<Type>['associatedMediaReview']
  declare public associatedReview: CRReviewState<Type>['associatedReview']
  declare public itemReviewed: CRReviewState<Type>['itemReviewed']
  declare public negativeNotes: CRReviewState<Type>['negativeNotes']
  declare public positiveNotes: CRReviewState<Type>['positiveNotes']
  declare public reviewAspect: CRReviewState<Type>['reviewAspect']
  declare public reviewBody: CRReviewState<Type>['reviewBody']
  declare public reviewRating: CRReviewState<Type>['reviewRating']

  constructor(
    snapshot?: Snapshot,
    defaultShape?: Partial<Shape>,
    crdtProperties?: Partial<
      Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
    >
  ) {
    super(
      snapshot,
      {
        '@type': 'Review' as Type,
        associatedClaimReview: crSetSnapshot,
        associatedMediaReview: crSetSnapshot,
        associatedReview: crSetSnapshot,
        itemReviewed: crSetSnapshot,
        negativeNotes: crSetSnapshot,
        positiveNotes: crSetSnapshot,
        reviewAspect: crSetSnapshot,
        reviewBody: crTextSnapshot,
        reviewRating: crSetSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        associatedClaimReview: 'set',
        associatedMediaReview: 'set',
        associatedReview: 'set',
        itemReviewed: 'set',
        negativeNotes: 'set',
        positiveNotes: 'set',
        reviewAspect: 'set',
        reviewBody: 'text',
        reviewRating: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
