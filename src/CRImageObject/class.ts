import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRMediaObject } from '../CRMediaObject/class.js'
import { crTextSnapshot } from '../.shared/index.js'

import type {
  CRImageObjectDefaultShape,
  CRImageObjectState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org ImageObject.
 *
 * Schema.org: An image file.
 */
export class CRImageObject<
  Type = 'ImageObject',
  Shape extends CRImageObjectDefaultShape<Type> =
    CRImageObjectDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRMediaObject<Type, Shape, Snapshot>
  implements CRImageObjectState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org caption: The caption for this object.
   */
  declare public caption: CRImageObjectState<Type>['caption']
  /**
   * Schema.org embeddedTextCaption: Textual captioning from an image.
   */
  declare public embeddedTextCaption: CRImageObjectState<Type>['embeddedTextCaption']
  /**
   * Schema.org exifData: EXIF data for this object.
   */
  declare public exifData: CRImageObjectState<Type>['exifData']
  /**
   * Schema.org representativeOfPage: Whether this image represents the page.
   */
  declare public representativeOfPage: CRImageObjectState<Type>['representativeOfPage']

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
        '@type': 'ImageObject' as Type,
        caption: '',
        embeddedTextCaption: crTextSnapshot,
        exifData: '',
        representativeOfPage: false,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        embeddedTextCaption: 'text',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
