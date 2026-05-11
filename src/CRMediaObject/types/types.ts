import type { MediaObject } from 'schema-dts'
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
  CRCreativeWorkSnapshot,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRGeoShapeSnapshot } from '../../CRGeoShape/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRQuantitativeValueSnapshot } from '../../CRQuantitativeValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgBoolean,
  SchemaOrgDate,
  SchemaOrgDateTime,
  SchemaOrgDistance,
  SchemaOrgDuration,
  SchemaOrgText,
  SchemaOrgTime,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgMediaObjectRaw = Extract<MediaObject, { '@type': 'MediaObject' }>

type SchemaOrgMediaObject = Partial<SchemaOrgMediaObjectRaw>

/**
 * Values accepted by Schema.org associatedArticle.
 */
export type CRMediaObjectAssociatedArticle =
  CRTypedIdReferenceValue<'NewsArticle'>

/**
 * Values accepted by Schema.org duration.
 */
export type CRMediaObjectDuration =
  | SchemaOrgDuration
  | CRQuantitativeValueSnapshot
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org height and width.
 */
export type CRMediaObjectDimension =
  | SchemaOrgDistance
  | CRQuantitativeValueSnapshot
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org ineligibleRegion and regionsAllowed.
 */
export type CRMediaObjectRegion =
  | CRGeoShapeSnapshot
  | CRTypedIdReferenceValue<'Place'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org requiresSubscription.
 */
export type CRMediaObjectRequiresSubscription =
  | SchemaOrgBoolean
  | CRTypedIdReferenceValue<'MediaSubscription'>

/**
 * Serializable CRDT shape for Schema.org MediaObject.
 *
 * Schema.org: A media object, such as an image, video, audio, or text object
 * embedded in a web page or a downloadable dataset.
 */
export type CRMediaObjectDefaultShape<Type = 'MediaObject'> = {
  /**
   * Schema.org associatedArticle: A NewsArticle associated with the MediaObject.
   */
  associatedArticle: CRSetSnapshot<CRMediaObjectAssociatedArticle>
  /**
   * Schema.org bitrate: The bitrate of the media object.
   */
  bitrate: CRTextSnapshot
  /**
   * Schema.org contentSize: File size in bytes, kilobytes or megabytes.
   */
  contentSize: CRTextSnapshot
  /**
   * Schema.org contentUrl: Actual bytes of the media object.
   */
  contentUrl: SchemaOrgURL
  /**
   * Schema.org duration: Duration in ISO 8601 duration format.
   */
  duration: CRMediaObjectDuration
  /**
   * Schema.org embedUrl: A URL pointing to a player for a specific video.
   */
  embedUrl: SchemaOrgURL
  /**
   * Schema.org encodesCreativeWork: The CreativeWork encoded by this media object.
   */
  encodesCreativeWork: CRSetSnapshot<
    | CRCreativeWorkSnapshot
    | CRTypedIdReferenceValue<'WebPage'>
    | CRIdReferenceValue
  >
  /**
   * Schema.org encodingFormat: Media type, MIME format, text or URL format.
   */
  encodingFormat: CRSetSnapshot<SchemaOrgText | SchemaOrgURL>
  /**
   * Schema.org endTime: End time or media clip offset.
   */
  endTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org height: The height of the item.
   */
  height: CRMediaObjectDimension
  /**
   * Schema.org ineligibleRegion: Region where this media is not valid.
   */
  ineligibleRegion: CRSetSnapshot<CRMediaObjectRegion>
  /**
   * Schema.org interpretedAsClaim: A specific claim interpreted from this content.
   */
  interpretedAsClaim: CRSetSnapshot<CRTypedIdReferenceValue<'Claim'>>
  /**
   * Schema.org playerType: Player type required.
   */
  playerType: CRTextSnapshot
  /**
   * Schema.org productionCompany: Organization responsible for the item.
   */
  productionCompany: CRSetSnapshot<CRTypedIdReferenceValue<'Organization'>>
  /**
   * Schema.org regionsAllowed: Regions where the media is allowed.
   */
  regionsAllowed: CRSetSnapshot<
    CRTypedIdReferenceValue<'Place'> | CRIdReferenceValue
  >
  /**
   * Schema.org requiresSubscription: Whether use of the media requires a subscription.
   */
  requiresSubscription: CRMediaObjectRequiresSubscription
  /**
   * Schema.org sha256: SHA-2 SHA256 hash of the content.
   */
  sha256: CRTextSnapshot
  /**
   * Schema.org startTime: Start time or media clip offset.
   */
  startTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org uploadDate: Date when this media object was uploaded.
   */
  uploadDate: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org width: The width of the item.
   */
  width: CRMediaObjectDimension
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org MediaObject.
 */
export type CRMediaObjectSnapshot<Type = 'MediaObject'> =
  CRStructPartialSnapshot<
    CRMediaObjectDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgMediaObject,
  keyof CRMediaObjectSnapshot
>

type ExtraKeys = Exclude<
  keyof CRMediaObjectSnapshot,
  keyof SchemaOrgMediaObject
>

/**
 * Runtime CRDT state surface for Schema.org MediaObject.
 */
export type CRMediaObjectState<Type = 'MediaObject'> = {
  /**
   * Schema.org associatedArticle: A NewsArticle associated with the MediaObject.
   */
  associatedArticle: Readonly<CRSet<CRMediaObjectAssociatedArticle>>
  /**
   * Schema.org bitrate: The bitrate of the media object.
   */
  bitrate: Readonly<CRText>
  /**
   * Schema.org contentSize: File size in bytes, kilobytes or megabytes.
   */
  contentSize: Readonly<CRText>
  /**
   * Schema.org contentUrl: Actual bytes of the media object.
   */
  contentUrl: SchemaOrgURL
  /**
   * Schema.org duration: Duration in ISO 8601 duration format.
   */
  duration: CRMediaObjectDuration
  /**
   * Schema.org embedUrl: A URL pointing to a player for a specific video.
   */
  embedUrl: SchemaOrgURL
  /**
   * Schema.org encodesCreativeWork: The CreativeWork encoded by this media object.
   */
  encodesCreativeWork: Readonly<
    CRSet<
      | CRCreativeWorkSnapshot
      | CRTypedIdReferenceValue<'WebPage'>
      | CRIdReferenceValue
    >
  >
  /**
   * Schema.org encodingFormat: Media type, MIME format, text or URL format.
   */
  encodingFormat: Readonly<CRSet<SchemaOrgText | SchemaOrgURL>>
  /**
   * Schema.org endTime: End time or media clip offset.
   */
  endTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org height: The height of the item.
   */
  height: CRMediaObjectDimension
  /**
   * Schema.org ineligibleRegion: Region where this media is not valid.
   */
  ineligibleRegion: Readonly<CRSet<CRMediaObjectRegion>>
  /**
   * Schema.org interpretedAsClaim: A specific claim interpreted from this content.
   */
  interpretedAsClaim: Readonly<CRSet<CRTypedIdReferenceValue<'Claim'>>>
  /**
   * Schema.org playerType: Player type required.
   */
  playerType: Readonly<CRText>
  /**
   * Schema.org productionCompany: Organization responsible for the item.
   */
  productionCompany: Readonly<CRSet<CRTypedIdReferenceValue<'Organization'>>>
  /**
   * Schema.org regionsAllowed: Regions where the media is allowed.
   */
  regionsAllowed: Readonly<
    CRSet<CRTypedIdReferenceValue<'Place'> | CRIdReferenceValue>
  >
  /**
   * Schema.org requiresSubscription: Whether use of the media requires a subscription.
   */
  requiresSubscription: CRMediaObjectRequiresSubscription
  /**
   * Schema.org sha256: SHA-2 SHA256 hash of the content.
   */
  sha256: Readonly<CRText>
  /**
   * Schema.org startTime: Start time or media clip offset.
   */
  startTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org uploadDate: Date when this media object was uploaded.
   */
  uploadDate: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org width: The width of the item.
   */
  width: CRMediaObjectDimension
} & CRCreativeWorkState<Type>
