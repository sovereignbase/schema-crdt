import type { WebPage } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRBreadcrumbListSnapshot } from '../../CRBreadcrumbList/types/types.js'
import type { CRImageObjectSnapshot } from '../../CRImageObject/types/types.js'
import type { CROrganizationSnapshot } from '../../CROrganization/types/types.js'
import type { CRPersonSnapshot } from '../../CRPerson/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRSpeakableSpecificationSnapshot } from '../../CRSpeakableSpecification/types/types.js'
import type { CRSpecialtySnapshot } from '../../CRSpecialty/types/types.js'
import type { CRWebPageElementSnapshot } from '../../CRWebPageElement/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgDate,
  SchemaOrgURL,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgWebPageRaw = Extract<WebPage, { '@type': 'WebPage' }>

type SchemaOrgWebPage = Partial<SchemaOrgWebPageRaw>

/**
 * Values accepted by Schema.org breadcrumb.
 */
export type CRWebPageBreadcrumb =
  | CRBreadcrumbListSnapshot
  | CRTypedIdReferenceValue<'BreadcrumbList'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org mainContentOfPage.
 */
export type CRWebPageMainContent =
  | CRWebPageElementSnapshot
  | CRTypedIdReferenceValue<'WebPageElement'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org primaryImageOfPage.
 */
export type CRWebPagePrimaryImage =
  | CRImageObjectSnapshot
  | CRTypedIdReferenceValue<'ImageObject'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org reviewedBy.
 */
export type CRWebPageReviewedBy =
  | CROrganizationSnapshot
  | CRPersonSnapshot
  | CRTypedIdReferenceValue<'Organization'>
  | CRTypedIdReferenceValue<'Person'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org speakable.
 */
export type CRWebPageSpeakable =
  | CRSpeakableSpecificationSnapshot
  | CRTypedIdReferenceValue<'SpeakableSpecification'>
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org specialty.
 */
export type CRWebPageSpecialty =
  | CRSpecialtySnapshot
  | CRTypedIdReferenceValue<'Specialty'>
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org WebPage.
 *
 * Schema.org: A web page.
 */
export type CRWebPageDefaultShape<Type = 'WebPage'> = {
  /**
   * Schema.org breadcrumb: Links that help navigate a website hierarchy.
   */
  breadcrumb: CRSetSnapshot<CRWebPageBreadcrumb>
  /**
   * Schema.org lastReviewed: Date when page content was last reviewed.
   */
  lastReviewed: SchemaOrgDate
  /**
   * Schema.org mainContentOfPage: Main WebPageElement subject of the page.
   */
  mainContentOfPage: CRSetSnapshot<CRWebPageMainContent>
  /**
   * Schema.org primaryImageOfPage: The main image on the page.
   */
  primaryImageOfPage: CRSetSnapshot<CRWebPagePrimaryImage>
  /**
   * Schema.org relatedLink: Link related to this web page.
   */
  relatedLink: CRSetSnapshot<SchemaOrgURL>
  /**
   * Schema.org reviewedBy: Reviewer of page accuracy or completeness.
   */
  reviewedBy: CRSetSnapshot<CRWebPageReviewedBy>
  /**
   * Schema.org significantLink: Significant URL on the page.
   */
  significantLink: CRSetSnapshot<SchemaOrgURL>
  /**
   * Schema.org speakable: Speakable sections of the web page.
   */
  speakable: CRSetSnapshot<CRWebPageSpeakable>
  /**
   * Schema.org specialty: Domain specialty of the page content.
   */
  specialty: CRSetSnapshot<CRWebPageSpecialty>
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org WebPage.
 */
export type CRWebPageSnapshot<Type = 'WebPage'> = CRStructPartialSnapshot<
  CRWebPageDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org WebPage properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews, significantLinks.
 */
type MissingKeys = Exclude<keyof SchemaOrgWebPage, keyof CRWebPageSnapshot>

type ExtraKeys = Exclude<keyof CRWebPageSnapshot, keyof SchemaOrgWebPage>

/**
 * Runtime CRDT state surface for Schema.org WebPage.
 */
export type CRWebPageState<Type = 'WebPage'> = {
  /**
   * Schema.org breadcrumb: Links that help navigate a website hierarchy.
   */
  breadcrumb: Readonly<CRSet<CRWebPageBreadcrumb>>
  /**
   * Schema.org lastReviewed: Date when page content was last reviewed.
   */
  lastReviewed: SchemaOrgDate
  /**
   * Schema.org mainContentOfPage: Main WebPageElement subject of the page.
   */
  mainContentOfPage: Readonly<CRSet<CRWebPageMainContent>>
  /**
   * Schema.org primaryImageOfPage: The main image on the page.
   */
  primaryImageOfPage: Readonly<CRSet<CRWebPagePrimaryImage>>
  /**
   * Schema.org relatedLink: Link related to this web page.
   */
  relatedLink: Readonly<CRSet<SchemaOrgURL>>
  /**
   * Schema.org reviewedBy: Reviewer of page accuracy or completeness.
   */
  reviewedBy: Readonly<CRSet<CRWebPageReviewedBy>>
  /**
   * Schema.org significantLink: Significant URL on the page.
   */
  significantLink: Readonly<CRSet<SchemaOrgURL>>
  /**
   * Schema.org speakable: Speakable sections of the web page.
   */
  speakable: Readonly<CRSet<CRWebPageSpeakable>>
  /**
   * Schema.org specialty: Domain specialty of the page content.
   */
  specialty: Readonly<CRSet<CRWebPageSpecialty>>
} & CRCreativeWorkState<Type>
