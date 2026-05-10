import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRRating } from '../CRRating/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRAggregateRatingDefaultShape,
  CRAggregateRatingState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org AggregateRating.
 *
 * Schema.org: The average rating based on multiple ratings or reviews.
 */
export class CRAggregateRating<
  Type = 'AggregateRating',
  Shape extends CRAggregateRatingDefaultShape<Type> =
    CRAggregateRatingDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRRating<Type, Shape, Snapshot>
  implements CRAggregateRatingState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org itemReviewed: The item that is being reviewed/rated.
   */
  declare public itemReviewed: CRAggregateRatingState['itemReviewed']
  /**
   * Schema.org ratingCount: The count of total number of ratings.
   */
  declare public ratingCount: CRAggregateRatingState['ratingCount']
  /**
   * Schema.org reviewCount: The count of total number of reviews.
   */
  declare public reviewCount: CRAggregateRatingState['reviewCount']

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
        '@type': 'AggregateRating' as Type,
        itemReviewed: crSetSnapshot,
        ratingCount: 0,
        reviewCount: 0,
        ...defaultShape,
      } as Partial<Shape>,
      {
        itemReviewed: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
