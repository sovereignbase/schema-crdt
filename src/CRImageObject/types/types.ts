import type { ImageObject } from 'schema-dts'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type {
  CRMediaObjectDefaultShape,
  CRMediaObjectSnapshot,
  CRMediaObjectState,
} from '../../CRMediaObject/types/types.js'
import type { CRPropertyValueSnapshot } from '../../CRPropertyValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgBoolean,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgImageObjectRaw = Extract<ImageObject, { '@type': 'ImageObject' }>

type SchemaOrgImageObject = Partial<SchemaOrgImageObjectRaw>

/**
 * Values accepted by Schema.org caption.
 */
export type CRImageObjectCaption =
  | CRMediaObjectSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org exifData.
 */
export type CRImageObjectExifData =
  | CRPropertyValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org ImageObject.
 *
 * Schema.org: An image file.
 */
export type CRImageObjectDefaultShape<Type = 'ImageObject'> = {
  /**
   * Schema.org caption: The caption for this object.
   */
  caption: CRImageObjectCaption
  /**
   * Schema.org embeddedTextCaption: Textual captioning from an image.
   */
  embeddedTextCaption: CRTextSnapshot
  /**
   * Schema.org exifData: EXIF data for this object.
   */
  exifData: CRImageObjectExifData
  /**
   * Schema.org representativeOfPage: Whether this image represents the page.
   */
  representativeOfPage: SchemaOrgBoolean
} & CRMediaObjectDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org ImageObject.
 */
export type CRImageObjectSnapshot<Type = 'ImageObject'> =
  CRStructPartialSnapshot<
    CRImageObjectDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

/**
 * Intentionally omitted deprecated Schema.org ImageObject properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews.
 */
type MissingKeys = Exclude<
  keyof SchemaOrgImageObject,
  keyof CRImageObjectSnapshot
>

type ExtraKeys = Exclude<
  keyof CRImageObjectSnapshot,
  keyof SchemaOrgImageObject
>

/**
 * Runtime CRDT state surface for Schema.org ImageObject.
 */
export type CRImageObjectState<Type = 'ImageObject'> = {
  /**
   * Schema.org caption: The caption for this object.
   */
  caption: CRImageObjectCaption
  /**
   * Schema.org embeddedTextCaption: Textual captioning from an image.
   */
  embeddedTextCaption: Readonly<CRText>
  /**
   * Schema.org exifData: EXIF data for this object.
   */
  exifData: CRImageObjectExifData
  /**
   * Schema.org representativeOfPage: Whether this image represents the page.
   */
  representativeOfPage: SchemaOrgBoolean
} & CRMediaObjectState<Type>
