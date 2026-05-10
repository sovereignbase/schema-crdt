import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type { CRRatingDefaultShape, CRRatingState } from './types/types.js'

/**
 * CRDT-backed Schema.org Rating.
 *
 * Schema.org: An evaluation on a numeric scale, such as 1 to 5 stars.
 */
export class CRRating<
  Type = 'Rating',
  Shape extends CRRatingDefaultShape<Type> = CRRatingDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRRatingState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org author: The author of this content or rating.
   */
  declare public author: CRRatingState['author']
  /**
   * Schema.org bestRating: The highest value allowed in this rating system.
   */
  declare public bestRating: CRRatingState['bestRating']
  /**
   * Schema.org ratingExplanation: A short explanation providing context for
   * the rating.
   */
  declare public ratingExplanation: CRRatingState['ratingExplanation']
  /**
   * Schema.org ratingValue: The rating for the content.
   */
  declare public ratingValue: CRRatingState['ratingValue']
  /**
   * Schema.org reviewAspect: The part or facet of the itemReviewed to which
   * this Review or Rating is relevant.
   */
  declare public reviewAspect: CRRatingState['reviewAspect']
  /**
   * Schema.org worstRating: The lowest value allowed in this rating system.
   */
  declare public worstRating: CRRatingState['worstRating']

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
        '@type': 'Rating' as Type,
        author: crSetSnapshot,
        bestRating: 0,
        ratingExplanation: crTextSnapshot,
        ratingValue: 0,
        reviewAspect: crSetSnapshot,
        worstRating: 0,
        ...defaultShape,
      } as Partial<Shape>,
      {
        author: 'set',
        ratingExplanation: 'text',
        reviewAspect: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >,
      {
        ratingValue: /^(?:0|[1-9]\d*)(?:\.\d+)?$/,
      } as Partial<Record<Extract<keyof Shape, string>, RegExp>>
    )
  }
}

export * from './types/types.js'
