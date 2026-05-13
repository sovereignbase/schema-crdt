import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'
import type { SchemaCRDTFormatValidators } from '../.types/types.js'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org CreativeWork.
 *
 * Schema.org: The most generic kind of creative work.
 */
export class CRCreativeWork<
  Type = 'CreativeWork',
  Shape extends CRCreativeWorkDefaultShape<Type> =
    CRCreativeWorkDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRCreativeWorkState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public 'about': CRCreativeWorkState<Type>['about']
  declare public 'abstract': CRCreativeWorkState<Type>['abstract']
  declare public 'accessMode': CRCreativeWorkState<Type>['accessMode']
  declare public 'accessModeSufficient': CRCreativeWorkState<Type>['accessModeSufficient']
  declare public 'accessibilityAPI': CRCreativeWorkState<Type>['accessibilityAPI']
  declare public 'accessibilityControl': CRCreativeWorkState<Type>['accessibilityControl']
  declare public 'accessibilityFeature': CRCreativeWorkState<Type>['accessibilityFeature']
  declare public 'accessibilityHazard': CRCreativeWorkState<Type>['accessibilityHazard']
  declare public 'accessibilitySummary': CRCreativeWorkState<Type>['accessibilitySummary']
  declare public 'accountablePerson': CRCreativeWorkState<Type>['accountablePerson']
  declare public 'acquireLicensePage': CRCreativeWorkState<Type>['acquireLicensePage']
  declare public 'aggregateRating': CRCreativeWorkState<Type>['aggregateRating']
  declare public 'alternativeHeadline': CRCreativeWorkState<Type>['alternativeHeadline']
  declare public 'archivedAt': CRCreativeWorkState<Type>['archivedAt']
  declare public 'assesses': CRCreativeWorkState<Type>['assesses']
  declare public 'associatedMedia': CRCreativeWorkState<Type>['associatedMedia']
  declare public 'audience': CRCreativeWorkState<Type>['audience']
  declare public 'audio': CRCreativeWorkState<Type>['audio']
  declare public 'author': CRCreativeWorkState<Type>['author']
  declare public 'award': CRCreativeWorkState<Type>['award']
  declare public 'character': CRCreativeWorkState<Type>['character']
  declare public 'citation': CRCreativeWorkState<Type>['citation']
  declare public 'comment': CRCreativeWorkState<Type>['comment']
  declare public 'commentCount': CRCreativeWorkState<Type>['commentCount']
  declare public 'conditionsOfAccess': CRCreativeWorkState<Type>['conditionsOfAccess']
  declare public 'contentLocation': CRCreativeWorkState<Type>['contentLocation']
  declare public 'contentRating': CRCreativeWorkState<Type>['contentRating']
  declare public 'contentReferenceTime': CRCreativeWorkState<Type>['contentReferenceTime']
  declare public 'contributor': CRCreativeWorkState<Type>['contributor']
  declare public 'copyrightHolder': CRCreativeWorkState<Type>['copyrightHolder']
  declare public 'copyrightNotice': CRCreativeWorkState<Type>['copyrightNotice']
  declare public 'copyrightYear': CRCreativeWorkState<Type>['copyrightYear']
  declare public 'correction': CRCreativeWorkState<Type>['correction']
  declare public 'countryOfOrigin': CRCreativeWorkState<Type>['countryOfOrigin']
  declare public 'creativeWorkStatus': CRCreativeWorkState<Type>['creativeWorkStatus']
  declare public 'creator': CRCreativeWorkState<Type>['creator']
  declare public 'creditText': CRCreativeWorkState<Type>['creditText']
  declare public 'dateCreated': CRCreativeWorkState<Type>['dateCreated']
  declare public 'dateModified': CRCreativeWorkState<Type>['dateModified']
  declare public 'datePublished': CRCreativeWorkState<Type>['datePublished']
  declare public 'digitalSourceType': CRCreativeWorkState<Type>['digitalSourceType']
  declare public 'discussionUrl': CRCreativeWorkState<Type>['discussionUrl']
  declare public 'displayLocation': CRCreativeWorkState<Type>['displayLocation']
  declare public 'editEIDR': CRCreativeWorkState<Type>['editEIDR']
  declare public 'editor': CRCreativeWorkState<Type>['editor']
  declare public 'educationalAlignment': CRCreativeWorkState<Type>['educationalAlignment']
  declare public 'educationalLevel': CRCreativeWorkState<Type>['educationalLevel']
  declare public 'educationalUse': CRCreativeWorkState<Type>['educationalUse']
  declare public 'encoding': CRCreativeWorkState<Type>['encoding']
  declare public 'encodingFormat': CRCreativeWorkState<Type>['encodingFormat']
  declare public 'exampleOfWork': CRCreativeWorkState<Type>['exampleOfWork']
  declare public 'expires': CRCreativeWorkState<Type>['expires']
  declare public 'funder': CRCreativeWorkState<Type>['funder']
  declare public 'funding': CRCreativeWorkState<Type>['funding']
  declare public 'genre': CRCreativeWorkState<Type>['genre']
  declare public 'hasPart': CRCreativeWorkState<Type>['hasPart']
  declare public 'headline': CRCreativeWorkState<Type>['headline']
  declare public 'inLanguage': CRCreativeWorkState<Type>['inLanguage']
  declare public 'interactionStatistic': CRCreativeWorkState<Type>['interactionStatistic']
  declare public 'interactivityType': CRCreativeWorkState<Type>['interactivityType']
  declare public 'interpretedAsClaim': CRCreativeWorkState<Type>['interpretedAsClaim']
  declare public 'isAccessibleForFree': CRCreativeWorkState<Type>['isAccessibleForFree']
  declare public 'isBasedOn': CRCreativeWorkState<Type>['isBasedOn']
  declare public 'isFamilyFriendly': CRCreativeWorkState<Type>['isFamilyFriendly']
  declare public 'isPartOf': CRCreativeWorkState<Type>['isPartOf']
  declare public 'keywords': CRCreativeWorkState<Type>['keywords']
  declare public 'learningResourceType': CRCreativeWorkState<Type>['learningResourceType']
  declare public 'license': CRCreativeWorkState<Type>['license']
  declare public 'locationCreated': CRCreativeWorkState<Type>['locationCreated']
  declare public 'mainEntity': CRCreativeWorkState<Type>['mainEntity']
  declare public 'maintainer': CRCreativeWorkState<Type>['maintainer']
  declare public 'material': CRCreativeWorkState<Type>['material']
  declare public 'materialExtent': CRCreativeWorkState<Type>['materialExtent']
  declare public 'mentions': CRCreativeWorkState<Type>['mentions']
  declare public 'offers': CRCreativeWorkState<Type>['offers']
  declare public 'pattern': CRCreativeWorkState<Type>['pattern']
  declare public 'position': CRCreativeWorkState<Type>['position']
  declare public 'producer': CRCreativeWorkState<Type>['producer']
  declare public 'provider': CRCreativeWorkState<Type>['provider']
  declare public 'publication': CRCreativeWorkState<Type>['publication']
  declare public 'publisher': CRCreativeWorkState<Type>['publisher']
  declare public 'publisherImprint': CRCreativeWorkState<Type>['publisherImprint']
  declare public 'publishingPrinciples': CRCreativeWorkState<Type>['publishingPrinciples']
  declare public 'recordedAt': CRCreativeWorkState<Type>['recordedAt']
  declare public 'releasedEvent': CRCreativeWorkState<Type>['releasedEvent']
  declare public 'review': CRCreativeWorkState<Type>['review']
  declare public 'schemaVersion': CRCreativeWorkState<Type>['schemaVersion']
  declare public 'sdDatePublished': CRCreativeWorkState<Type>['sdDatePublished']
  declare public 'sdLicense': CRCreativeWorkState<Type>['sdLicense']
  declare public 'sdPublisher': CRCreativeWorkState<Type>['sdPublisher']
  declare public 'size': CRCreativeWorkState<Type>['size']
  declare public 'sourceOrganization': CRCreativeWorkState<Type>['sourceOrganization']
  declare public 'spatial': CRCreativeWorkState<Type>['spatial']
  declare public 'spatialCoverage': CRCreativeWorkState<Type>['spatialCoverage']
  declare public 'sponsor': CRCreativeWorkState<Type>['sponsor']
  declare public 'teaches': CRCreativeWorkState<Type>['teaches']
  declare public 'temporal': CRCreativeWorkState<Type>['temporal']
  declare public 'temporalCoverage': CRCreativeWorkState<Type>['temporalCoverage']
  declare public 'text': CRCreativeWorkState<Type>['text']
  declare public 'thumbnail': CRCreativeWorkState<Type>['thumbnail']
  declare public 'thumbnailUrl': CRCreativeWorkState<Type>['thumbnailUrl']
  declare public 'timeRequired': CRCreativeWorkState<Type>['timeRequired']
  declare public 'translationOfWork': CRCreativeWorkState<Type>['translationOfWork']
  declare public 'translator': CRCreativeWorkState<Type>['translator']
  declare public 'typicalAgeRange': CRCreativeWorkState<Type>['typicalAgeRange']
  declare public 'usageInfo': CRCreativeWorkState<Type>['usageInfo']
  declare public 'version': CRCreativeWorkState<Type>['version']
  declare public 'video': CRCreativeWorkState<Type>['video']
  declare public 'wordCount': CRCreativeWorkState<Type>['wordCount']
  declare public 'workExample': CRCreativeWorkState<Type>['workExample']
  declare public 'workTranslation': CRCreativeWorkState<Type>['workTranslation']

  constructor(
    snapshot?: Snapshot,
    defaultShape?: Partial<Shape>,
    crdtProperties?: Partial<
      Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
    >,
    formatValidators?: SchemaCRDTFormatValidators<Shape>
  ) {
    super(
      snapshot,
      {
        '@type': 'CreativeWork' as Type,
        about: crSetSnapshot,
        abstract: crTextSnapshot,
        accessMode: crSetSnapshot,
        accessModeSufficient: crSetSnapshot,
        accessibilityAPI: crSetSnapshot,
        accessibilityControl: crSetSnapshot,
        accessibilityFeature: crSetSnapshot,
        accessibilityHazard: crSetSnapshot,
        accessibilitySummary: crTextSnapshot,
        accountablePerson: crSetSnapshot,
        acquireLicensePage: crSetSnapshot,
        aggregateRating: crSetSnapshot,
        alternativeHeadline: crTextSnapshot,
        archivedAt: crSetSnapshot,
        assesses: crSetSnapshot,
        associatedMedia: crSetSnapshot,
        audience: crSetSnapshot,
        audio: crSetSnapshot,
        author: crSetSnapshot,
        award: crSetSnapshot,
        character: crSetSnapshot,
        citation: crSetSnapshot,
        comment: crSetSnapshot,
        commentCount: 0,
        conditionsOfAccess: crTextSnapshot,
        contentLocation: crSetSnapshot,
        contentRating: crSetSnapshot,
        contentReferenceTime: '',
        contributor: crSetSnapshot,
        copyrightHolder: crSetSnapshot,
        copyrightNotice: crTextSnapshot,
        copyrightYear: 0,
        correction: crSetSnapshot,
        countryOfOrigin: crSetSnapshot,
        creativeWorkStatus: crSetSnapshot,
        creator: crSetSnapshot,
        creditText: crTextSnapshot,
        dateCreated: '',
        dateModified: '',
        datePublished: '',
        digitalSourceType: crSetSnapshot,
        discussionUrl: '',
        displayLocation: crSetSnapshot,
        editEIDR: crSetSnapshot,
        editor: crSetSnapshot,
        educationalAlignment: crSetSnapshot,
        educationalLevel: crSetSnapshot,
        educationalUse: crSetSnapshot,
        encoding: crSetSnapshot,
        encodingFormat: crSetSnapshot,
        exampleOfWork: crSetSnapshot,
        expires: '',
        funder: crSetSnapshot,
        funding: crSetSnapshot,
        genre: crSetSnapshot,
        hasPart: crSetSnapshot,
        headline: crTextSnapshot,
        inLanguage: crSetSnapshot,
        interactionStatistic: crSetSnapshot,
        interactivityType: crSetSnapshot,
        interpretedAsClaim: crSetSnapshot,
        isAccessibleForFree: false,
        isBasedOn: crSetSnapshot,
        isFamilyFriendly: false,
        isPartOf: crSetSnapshot,
        keywords: crSetSnapshot,
        learningResourceType: crSetSnapshot,
        license: crSetSnapshot,
        locationCreated: crSetSnapshot,
        mainEntity: crSetSnapshot,
        maintainer: crSetSnapshot,
        material: crSetSnapshot,
        materialExtent: crSetSnapshot,
        mentions: crSetSnapshot,
        offers: crSetSnapshot,
        pattern: crSetSnapshot,
        position: 0,
        producer: crSetSnapshot,
        provider: crSetSnapshot,
        publication: crSetSnapshot,
        publisher: crSetSnapshot,
        publisherImprint: crSetSnapshot,
        publishingPrinciples: crSetSnapshot,
        recordedAt: crSetSnapshot,
        releasedEvent: crSetSnapshot,
        review: crSetSnapshot,
        schemaVersion: crSetSnapshot,
        sdDatePublished: '',
        sdLicense: crSetSnapshot,
        sdPublisher: crSetSnapshot,
        size: crSetSnapshot,
        sourceOrganization: crSetSnapshot,
        spatial: crSetSnapshot,
        spatialCoverage: crSetSnapshot,
        sponsor: crSetSnapshot,
        teaches: crSetSnapshot,
        temporal: '',
        temporalCoverage: '',
        text: crTextSnapshot,
        thumbnail: crSetSnapshot,
        thumbnailUrl: '',
        timeRequired: '',
        translationOfWork: crSetSnapshot,
        translator: crSetSnapshot,
        typicalAgeRange: '',
        usageInfo: crSetSnapshot,
        version: '',
        video: crSetSnapshot,
        wordCount: 0,
        workExample: crSetSnapshot,
        workTranslation: crSetSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        about: 'set',
        abstract: 'text',
        accessMode: 'set',
        accessModeSufficient: 'set',
        accessibilityAPI: 'set',
        accessibilityControl: 'set',
        accessibilityFeature: 'set',
        accessibilityHazard: 'set',
        accessibilitySummary: 'text',
        accountablePerson: 'set',
        acquireLicensePage: 'set',
        aggregateRating: 'set',
        alternativeHeadline: 'text',
        archivedAt: 'set',
        assesses: 'set',
        associatedMedia: 'set',
        audience: 'set',
        audio: 'set',
        author: 'set',
        award: 'set',
        character: 'set',
        citation: 'set',
        comment: 'set',
        conditionsOfAccess: 'text',
        contentLocation: 'set',
        contentRating: 'set',
        contributor: 'set',
        copyrightHolder: 'set',
        copyrightNotice: 'text',
        correction: 'set',
        countryOfOrigin: 'set',
        creativeWorkStatus: 'set',
        creator: 'set',
        creditText: 'text',
        digitalSourceType: 'set',
        displayLocation: 'set',
        editEIDR: 'set',
        editor: 'set',
        educationalAlignment: 'set',
        educationalLevel: 'set',
        educationalUse: 'set',
        encoding: 'set',
        encodingFormat: 'set',
        exampleOfWork: 'set',
        funder: 'set',
        funding: 'set',
        genre: 'set',
        hasPart: 'set',
        headline: 'text',
        inLanguage: 'set',
        interactionStatistic: 'set',
        interactivityType: 'set',
        interpretedAsClaim: 'set',
        isBasedOn: 'set',
        isPartOf: 'set',
        keywords: 'set',
        learningResourceType: 'set',
        license: 'set',
        locationCreated: 'set',
        mainEntity: 'set',
        maintainer: 'set',
        material: 'set',
        materialExtent: 'set',
        mentions: 'set',
        offers: 'set',
        pattern: 'set',
        producer: 'set',
        provider: 'set',
        publication: 'set',
        publisher: 'set',
        publisherImprint: 'set',
        publishingPrinciples: 'set',
        recordedAt: 'set',
        releasedEvent: 'set',
        review: 'set',
        schemaVersion: 'set',
        sdLicense: 'set',
        sdPublisher: 'set',
        size: 'set',
        sourceOrganization: 'set',
        spatial: 'set',
        spatialCoverage: 'set',
        sponsor: 'set',
        teaches: 'set',
        text: 'text',
        thumbnail: 'set',
        translationOfWork: 'set',
        translator: 'set',
        usageInfo: 'set',
        video: 'set',
        workExample: 'set',
        workTranslation: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >,
      {
        timeRequired:
          /^P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$/,
        ...formatValidators,
      } as SchemaCRDTFormatValidators<Shape>
    )
  }
}

export * from './types/types.js'
