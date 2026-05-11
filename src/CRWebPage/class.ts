import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type { CRWebPageDefaultShape, CRWebPageState } from './types/types.js'

/**
 * CRDT-backed Schema.org WebPage.
 *
 * Schema.org: A web page.
 */
export class CRWebPage<
  Type = 'WebPage',
  Shape extends CRWebPageDefaultShape<Type> = CRWebPageDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRWebPageState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org breadcrumb: Links that help navigate a website hierarchy.
   */
  declare public breadcrumb: CRWebPageState<Type>['breadcrumb']
  /**
   * Schema.org lastReviewed: Date when page content was last reviewed.
   */
  declare public lastReviewed: CRWebPageState<Type>['lastReviewed']
  /**
   * Schema.org mainContentOfPage: Main WebPageElement subject of the page.
   */
  declare public mainContentOfPage: CRWebPageState<Type>['mainContentOfPage']
  /**
   * Schema.org primaryImageOfPage: The main image on the page.
   */
  declare public primaryImageOfPage: CRWebPageState<Type>['primaryImageOfPage']
  /**
   * Schema.org relatedLink: Link related to this web page.
   */
  declare public relatedLink: CRWebPageState<Type>['relatedLink']
  /**
   * Schema.org reviewedBy: Reviewer of page accuracy or completeness.
   */
  declare public reviewedBy: CRWebPageState<Type>['reviewedBy']
  /**
   * Schema.org significantLink: Significant URL on the page.
   */
  declare public significantLink: CRWebPageState<Type>['significantLink']
  /**
   * Schema.org significantLinks: Deprecated alias for significantLink.
   */
  declare public significantLinks: CRWebPageState<Type>['significantLinks']
  /**
   * Schema.org speakable: Speakable sections of the web page.
   */
  declare public speakable: CRWebPageState<Type>['speakable']
  /**
   * Schema.org specialty: Domain specialty of the page content.
   */
  declare public specialty: CRWebPageState<Type>['specialty']

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
        '@type': 'WebPage' as Type,
        breadcrumb: crSetSnapshot,
        lastReviewed: '',
        mainContentOfPage: crSetSnapshot,
        primaryImageOfPage: crSetSnapshot,
        relatedLink: crSetSnapshot,
        reviewedBy: crSetSnapshot,
        significantLink: crSetSnapshot,
        significantLinks: crSetSnapshot,
        speakable: crSetSnapshot,
        specialty: crSetSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        breadcrumb: 'set',
        mainContentOfPage: 'set',
        primaryImageOfPage: 'set',
        relatedLink: 'set',
        reviewedBy: 'set',
        significantLink: 'set',
        significantLinks: 'set',
        speakable: 'set',
        specialty: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
