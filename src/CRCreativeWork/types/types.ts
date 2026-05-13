import type { CreativeWork } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type { CRAggregateRatingSnapshot } from '../../CRAggregateRating/types/types.js'
import type { CRCountrySnapshot } from '../../CRCountry/types/types.js'
import type { CRDefinedTermSnapshot } from '../../CRDefinedTerm/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRItemListSnapshot } from '../../CRItemList/types/types.js'
import type { CRPlaceSnapshot } from '../../CRPlace/types/types.js'
import type { CRQuantitativeValueSnapshot } from '../../CRQuantitativeValue/types/types.js'
import type { CRRatingSnapshot } from '../../CRRating/types/types.js'
import type {
  CRThingDefaultShape,
  CRThingSnapshot,
  CRThingState,
} from '../../CRThing/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgBoolean,
  SchemaOrgDate,
  SchemaOrgDateTime,
  SchemaOrgDuration,
  SchemaOrgInteger,
  SchemaOrgNumber,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgCreativeWorkRaw = Extract<
  CreativeWork,
  { '@type': 'CreativeWork' }
>

type SchemaOrgCreativeWork = Partial<SchemaOrgCreativeWorkRaw>

/**
 * Values accepted by Schema.org about, mainEntity and mentions.
 */
export type CRCreativeWorkThing = CRThingSnapshot | CRIdReferenceValue

/**
 * Values accepted by Schema.org Person-valued CreativeWork properties.
 */
export type CRCreativeWorkPerson =
  | CRTypedIdReferenceValue<'Person'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org Organization-valued CreativeWork properties.
 */
export type CRCreativeWorkOrganization =
  | CRTypedIdReferenceValue<'Organization'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org Person or Organization CreativeWork properties.
 */
export type CRCreativeWorkPersonOrOrganization =
  | CRTypedIdReferenceValue<'Organization'>
  | CRTypedIdReferenceValue<'Person'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org CreativeWork reference properties.
 */
export type CRCreativeWorkReference =
  | CRTypedIdReferenceValue<'CreativeWork'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org CreativeWork or URL properties.
 */
export type CRCreativeWorkReferenceOrURL =
  | CRTypedIdReferenceValue<'CreativeWork'>
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org archivedAt.
 */
export type CRCreativeWorkArchivedAt =
  | CRTypedIdReferenceValue<'WebPage'>
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org DefinedTerm or text properties.
 */
export type CRCreativeWorkDefinedTermText =
  | CRDefinedTermSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org DefinedTerm, text or URL properties.
 */
export type CRCreativeWorkDefinedTermTextOrURL =
  | CRDefinedTermSnapshot
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org MediaObject reference properties.
 */
export type CRCreativeWorkMediaObject =
  | CRTypedIdReferenceValue<'MediaObject'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org audio.
 */
export type CRCreativeWorkAudio =
  | CRTypedIdReferenceValue<'AudioObject'>
  | CRTypedIdReferenceValue<'Clip'>
  | CRTypedIdReferenceValue<'MusicRecording'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org video.
 */
export type CRCreativeWorkVideo =
  | CRTypedIdReferenceValue<'Clip'>
  | CRTypedIdReferenceValue<'VideoObject'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org contentRating.
 */
export type CRCreativeWorkContentRating =
  | CRRatingSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org correction.
 */
export type CRCreativeWorkCorrection =
  | CRTypedIdReferenceValue<'CorrectionComment'>
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org location and coverage properties.
 */
export type CRCreativeWorkPlace =
  | CRPlaceSnapshot
  | CRTypedIdReferenceValue<'Place'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org inLanguage.
 */
export type CRCreativeWorkLanguage =
  | CRTypedIdReferenceValue<'Language'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org isBasedOn and material.
 */
export type CRCreativeWorkProductTextOrURL =
  | CRTypedIdReferenceValue<'Product'>
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org isBasedOn.
 */
export type CRCreativeWorkBasedOn =
  | CRCreativeWorkReference
  | CRTypedIdReferenceValue<'Product'>
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org materialExtent.
 */
export type CRCreativeWorkMaterialExtent =
  | CRQuantitativeValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org offers.
 */
export type CRCreativeWorkOffer =
  | CRTypedIdReferenceValue<'Demand'>
  | CRTypedIdReferenceValue<'Offer'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org publication and releasedEvent.
 */
export type CRCreativeWorkPublicationEvent =
  | CRTypedIdReferenceValue<'PublicationEvent'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org recordedAt.
 */
export type CRCreativeWorkEvent =
  | CRTypedIdReferenceValue<'Event'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org review.
 */
export type CRCreativeWorkReview =
  | CRTypedIdReferenceValue<'Review'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org size.
 */
export type CRCreativeWorkSize =
  | CRDefinedTermSnapshot
  | CRQuantitativeValueSnapshot
  | CRTypedIdReferenceValue<'SizeSpecification'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org thumbnail.
 */
export type CRCreativeWorkThumbnail =
  | CRTypedIdReferenceValue<'ImageObject'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org version.
 */
export type CRCreativeWorkVersion = SchemaOrgNumber | SchemaOrgText

/**
 * Serializable CRDT shape for Schema.org CreativeWork.
 *
 * Schema.org: The most generic kind of creative work.
 */
export type CRCreativeWorkDefaultShape<Type = 'CreativeWork'> = {
  about: CRSetSnapshot<CRCreativeWorkThing>
  abstract: CRTextSnapshot
  accessMode: CRSetSnapshot<SchemaOrgText>
  accessModeSufficient: CRSetSnapshot<
    | CRItemListSnapshot
    | CRTypedIdReferenceValue<'ItemList'>
    | CRIdReferenceValue
  >
  accessibilityAPI: CRSetSnapshot<SchemaOrgText>
  accessibilityControl: CRSetSnapshot<SchemaOrgText>
  accessibilityFeature: CRSetSnapshot<SchemaOrgText>
  accessibilityHazard: CRSetSnapshot<SchemaOrgText>
  accessibilitySummary: CRTextSnapshot
  accountablePerson: CRSetSnapshot<CRCreativeWorkPerson>
  acquireLicensePage: CRSetSnapshot<CRCreativeWorkReferenceOrURL>
  aggregateRating: CRSetSnapshot<CRAggregateRatingSnapshot | CRIdReferenceValue>
  alternativeHeadline: CRTextSnapshot
  archivedAt: CRSetSnapshot<CRCreativeWorkArchivedAt>
  assesses: CRSetSnapshot<CRCreativeWorkDefinedTermText>
  associatedMedia: CRSetSnapshot<CRCreativeWorkMediaObject>
  audience: CRSetSnapshot<
    CRTypedIdReferenceValue<'Audience'> | CRIdReferenceValue
  >
  audio: CRSetSnapshot<CRCreativeWorkAudio>
  author: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  award: CRSetSnapshot<SchemaOrgText>
  character: CRSetSnapshot<CRCreativeWorkPerson>
  citation: CRSetSnapshot<
    CRCreativeWorkReference | SchemaOrgText | CRIdReferenceValue
  >
  comment: CRSetSnapshot<
    CRTypedIdReferenceValue<'Comment'> | CRIdReferenceValue
  >
  commentCount: SchemaOrgInteger
  conditionsOfAccess: CRTextSnapshot
  contentLocation: CRSetSnapshot<CRCreativeWorkPlace>
  contentRating: CRSetSnapshot<CRCreativeWorkContentRating>
  contentReferenceTime: SchemaOrgDateTime
  contributor: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  copyrightHolder: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  copyrightNotice: CRTextSnapshot
  copyrightYear: SchemaOrgNumber
  correction: CRSetSnapshot<CRCreativeWorkCorrection>
  countryOfOrigin: CRSetSnapshot<
    CRCountrySnapshot | CRTypedIdReferenceValue<'Country'> | CRIdReferenceValue
  >
  creativeWorkStatus: CRSetSnapshot<CRCreativeWorkDefinedTermText>
  creator: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  creditText: CRTextSnapshot
  dateCreated: SchemaOrgDate | SchemaOrgDateTime
  dateModified: SchemaOrgDate | SchemaOrgDateTime
  datePublished: SchemaOrgDate | SchemaOrgDateTime
  digitalSourceType: CRSetSnapshot<
    CRTypedIdReferenceValue<'IPTCDigitalSourceEnumeration'> | CRIdReferenceValue
  >
  discussionUrl: SchemaOrgURL
  displayLocation: CRSetSnapshot<CRCreativeWorkPlace>
  editEIDR: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  editor: CRSetSnapshot<CRCreativeWorkPerson>
  educationalAlignment: CRSetSnapshot<
    CRTypedIdReferenceValue<'AlignmentObject'> | CRIdReferenceValue
  >
  educationalLevel: CRSetSnapshot<CRCreativeWorkDefinedTermTextOrURL>
  educationalUse: CRSetSnapshot<CRCreativeWorkDefinedTermText>
  encoding: CRSetSnapshot<CRCreativeWorkMediaObject>
  encodingFormat: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  exampleOfWork: CRSetSnapshot<CRCreativeWorkReference>
  expires: SchemaOrgDate | SchemaOrgDateTime
  funder: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  funding: CRSetSnapshot<CRTypedIdReferenceValue<'Grant'> | CRIdReferenceValue>
  genre: CRSetSnapshot<CRCreativeWorkDefinedTermTextOrURL>
  hasPart: CRSetSnapshot<CRCreativeWorkReference>
  headline: CRTextSnapshot
  inLanguage: CRSetSnapshot<CRCreativeWorkLanguage>
  interactionStatistic: CRSetSnapshot<
    CRTypedIdReferenceValue<'InteractionCounter'> | CRIdReferenceValue
  >
  interactivityType: CRSetSnapshot<SchemaOrgText>
  interpretedAsClaim: CRSetSnapshot<
    CRTypedIdReferenceValue<'Claim'> | CRIdReferenceValue
  >
  isAccessibleForFree: SchemaOrgBoolean
  isBasedOn: CRSetSnapshot<CRCreativeWorkBasedOn>
  isFamilyFriendly: SchemaOrgBoolean
  isPartOf: CRSetSnapshot<CRCreativeWorkReferenceOrURL>
  keywords: CRSetSnapshot<CRCreativeWorkDefinedTermTextOrURL>
  learningResourceType: CRSetSnapshot<CRCreativeWorkDefinedTermText>
  license: CRSetSnapshot<CRCreativeWorkReferenceOrURL>
  locationCreated: CRSetSnapshot<CRCreativeWorkPlace>
  mainEntity: CRSetSnapshot<CRCreativeWorkThing>
  maintainer: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  material: CRSetSnapshot<CRCreativeWorkProductTextOrURL>
  materialExtent: CRSetSnapshot<CRCreativeWorkMaterialExtent>
  mentions: CRSetSnapshot<CRCreativeWorkThing>
  offers: CRSetSnapshot<CRCreativeWorkOffer>
  pattern: CRSetSnapshot<CRCreativeWorkDefinedTermText>
  position: SchemaOrgInteger | SchemaOrgText
  producer: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  provider: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  publication: CRSetSnapshot<CRCreativeWorkPublicationEvent>
  publisher: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  publisherImprint: CRSetSnapshot<CRCreativeWorkOrganization>
  publishingPrinciples: CRSetSnapshot<CRCreativeWorkReferenceOrURL>
  recordedAt: CRSetSnapshot<CRCreativeWorkEvent>
  releasedEvent: CRSetSnapshot<CRCreativeWorkPublicationEvent>
  review: CRSetSnapshot<CRCreativeWorkReview>
  schemaVersion: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  sdDatePublished: SchemaOrgDate
  sdLicense: CRSetSnapshot<CRCreativeWorkReferenceOrURL>
  sdPublisher: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  size: CRSetSnapshot<CRCreativeWorkSize>
  sourceOrganization: CRSetSnapshot<CRCreativeWorkOrganization>
  spatial: CRSetSnapshot<CRCreativeWorkPlace>
  spatialCoverage: CRSetSnapshot<CRCreativeWorkPlace>
  sponsor: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  teaches: CRSetSnapshot<CRCreativeWorkDefinedTermText>
  temporal: SchemaOrgDateTime | SchemaOrgText
  temporalCoverage: SchemaOrgDateTime | SchemaOrgText | SchemaOrgURL
  text: CRTextSnapshot
  thumbnail: CRSetSnapshot<CRCreativeWorkThumbnail>
  thumbnailUrl: SchemaOrgURL
  timeRequired: SchemaOrgDuration
  translationOfWork: CRSetSnapshot<CRCreativeWorkReference>
  translator: CRSetSnapshot<CRCreativeWorkPersonOrOrganization>
  typicalAgeRange: CRTextSnapshot
  usageInfo: CRSetSnapshot<CRCreativeWorkReferenceOrURL>
  version: CRCreativeWorkVersion
  video: CRSetSnapshot<CRCreativeWorkVideo>
  wordCount: SchemaOrgInteger
  workExample: CRSetSnapshot<CRCreativeWorkReference>
  workTranslation: CRSetSnapshot<CRCreativeWorkReference>
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org CreativeWork.
 */
export type CRCreativeWorkSnapshot<Type = 'CreativeWork'> =
  CRStructPartialSnapshot<
    CRCreativeWorkDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

/**
 * Intentionally omitted deprecated Schema.org CreativeWork properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews.
 */
type MissingKeys = Exclude<
  keyof SchemaOrgCreativeWork,
  keyof CRCreativeWorkSnapshot
>

type ExtraKeys = Exclude<
  keyof CRCreativeWorkSnapshot,
  keyof SchemaOrgCreativeWork
>

/**
 * Runtime CRDT state surface for Schema.org CreativeWork.
 */
export type CRCreativeWorkState<Type = 'CreativeWork'> = {
  [Key in Exclude<
    keyof CRCreativeWorkDefaultShape<Type>,
    keyof CRThingDefaultShape<Type>
  >]: CRCreativeWorkDefaultShape<Type>[Key] extends CRSetSnapshot<infer Value>
    ? Readonly<CRSet<Value>>
    : CRCreativeWorkDefaultShape<Type>[Key] extends CRTextSnapshot
      ? Readonly<CRText>
      : CRCreativeWorkDefaultShape<Type>[Key]
} & CRThingState<Type>
