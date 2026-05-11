import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type {
  CRMediaObjectDefaultShape,
  CRMediaObjectState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org MediaObject.
 *
 * Schema.org: A media object, such as an image, video, audio, or text object
 * embedded in a web page or a downloadable dataset.
 */
export class CRMediaObject<
  Type = 'MediaObject',
  Shape extends CRMediaObjectDefaultShape<Type> =
    CRMediaObjectDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRMediaObjectState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public associatedArticle: CRMediaObjectState<Type>['associatedArticle']
  declare public bitrate: CRMediaObjectState<Type>['bitrate']
  declare public contentSize: CRMediaObjectState<Type>['contentSize']
  declare public contentUrl: CRMediaObjectState<Type>['contentUrl']
  declare public duration: CRMediaObjectState<Type>['duration']
  declare public embedUrl: CRMediaObjectState<Type>['embedUrl']
  declare public encodesCreativeWork: CRMediaObjectState<Type>['encodesCreativeWork']
  declare public encodingFormat: CRMediaObjectState<Type>['encodingFormat']
  declare public endTime: CRMediaObjectState<Type>['endTime']
  declare public height: CRMediaObjectState<Type>['height']
  declare public ineligibleRegion: CRMediaObjectState<Type>['ineligibleRegion']
  declare public interpretedAsClaim: CRMediaObjectState<Type>['interpretedAsClaim']
  declare public playerType: CRMediaObjectState<Type>['playerType']
  declare public productionCompany: CRMediaObjectState<Type>['productionCompany']
  declare public regionsAllowed: CRMediaObjectState<Type>['regionsAllowed']
  declare public requiresSubscription: CRMediaObjectState<Type>['requiresSubscription']
  declare public sha256: CRMediaObjectState<Type>['sha256']
  declare public startTime: CRMediaObjectState<Type>['startTime']
  declare public uploadDate: CRMediaObjectState<Type>['uploadDate']
  declare public width: CRMediaObjectState<Type>['width']

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
        '@type': 'MediaObject' as Type,
        associatedArticle: crSetSnapshot,
        bitrate: crTextSnapshot,
        contentSize: crTextSnapshot,
        contentUrl: '',
        duration: '',
        embedUrl: '',
        encodesCreativeWork: crSetSnapshot,
        encodingFormat: crSetSnapshot,
        endTime: '',
        height: '',
        ineligibleRegion: crSetSnapshot,
        interpretedAsClaim: crSetSnapshot,
        playerType: crTextSnapshot,
        productionCompany: crSetSnapshot,
        regionsAllowed: crSetSnapshot,
        requiresSubscription: false,
        sha256: crTextSnapshot,
        startTime: '',
        uploadDate: '',
        width: '',
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        associatedArticle: 'set',
        bitrate: 'text',
        contentSize: 'text',
        encodesCreativeWork: 'set',
        encodingFormat: 'set',
        ineligibleRegion: 'set',
        interpretedAsClaim: 'set',
        playerType: 'text',
        productionCompany: 'set',
        regionsAllowed: 'set',
        sha256: 'text',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >,
      {
        duration:
          /^P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$/,
        sha256: /^[a-fA-F0-9]{64}$/,
      } as Partial<Record<Extract<keyof Shape, string>, RegExp>>
    )
  }
}

export * from './types/types.js'
