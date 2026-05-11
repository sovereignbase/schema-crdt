import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type { CRPersonDefaultShape, CRPersonState } from './types/types.js'

/**
 * CRDT-backed Schema.org Person.
 *
 * Schema.org: A person (alive, dead, undead, or fictional).
 */
export class CRPerson<
  Type = 'Person',
  Shape extends CRPersonDefaultShape<Type> = CRPersonDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRPersonState<Type>
{
  /** Schema.org type name for this node. */
  declare public readonly '@type': Type
  declare public additionalName: CRPersonState<Type>['additionalName']
  declare public address: CRPersonState<Type>['address']
  declare public affiliation: CRPersonState<Type>['affiliation']
  declare public agentInteractionStatistic: CRPersonState<Type>['agentInteractionStatistic']
  declare public alumniOf: CRPersonState<Type>['alumniOf']
  declare public award: CRPersonState<Type>['award']
  declare public birthDate: CRPersonState<Type>['birthDate']
  declare public birthPlace: CRPersonState<Type>['birthPlace']
  declare public brand: CRPersonState<Type>['brand']
  declare public callSign: CRPersonState<Type>['callSign']
  declare public children: CRPersonState<Type>['children']
  declare public colleague: CRPersonState<Type>['colleague']
  declare public contactPoint: CRPersonState<Type>['contactPoint']
  declare public deathDate: CRPersonState<Type>['deathDate']
  declare public deathPlace: CRPersonState<Type>['deathPlace']
  declare public duns: CRPersonState<Type>['duns']
  declare public email: CRPersonState<Type>['email']
  declare public familyName: CRPersonState<Type>['familyName']
  declare public faxNumber: CRPersonState<Type>['faxNumber']
  declare public follows: CRPersonState<Type>['follows']
  declare public funder: CRPersonState<Type>['funder']
  declare public funding: CRPersonState<Type>['funding']
  declare public gender: CRPersonState<Type>['gender']
  declare public givenName: CRPersonState<Type>['givenName']
  declare public globalLocationNumber: CRPersonState<Type>['globalLocationNumber']
  declare public hasCertification: CRPersonState<Type>['hasCertification']
  declare public hasCredential: CRPersonState<Type>['hasCredential']
  declare public hasOccupation: CRPersonState<Type>['hasOccupation']
  declare public hasOfferCatalog: CRPersonState<Type>['hasOfferCatalog']
  declare public hasPOS: CRPersonState<Type>['hasPOS']
  declare public height: CRPersonState<Type>['height']
  declare public homeLocation: CRPersonState<Type>['homeLocation']
  declare public honorificPrefix: CRPersonState<Type>['honorificPrefix']
  declare public honorificSuffix: CRPersonState<Type>['honorificSuffix']
  declare public interactionStatistic: CRPersonState<Type>['interactionStatistic']
  declare public isicV4: CRPersonState<Type>['isicV4']
  declare public jobTitle: CRPersonState<Type>['jobTitle']
  declare public knows: CRPersonState<Type>['knows']
  declare public knowsAbout: CRPersonState<Type>['knowsAbout']
  declare public knowsLanguage: CRPersonState<Type>['knowsLanguage']
  declare public lifeEvent: CRPersonState<Type>['lifeEvent']
  declare public makesOffer: CRPersonState<Type>['makesOffer']
  declare public memberOf: CRPersonState<Type>['memberOf']
  declare public naics: CRPersonState<Type>['naics']
  declare public nationality: CRPersonState<Type>['nationality']
  declare public netWorth: CRPersonState<Type>['netWorth']
  declare public owns: CRPersonState<Type>['owns']
  declare public parent: CRPersonState<Type>['parent']
  declare public performerIn: CRPersonState<Type>['performerIn']
  declare public pronouns: CRPersonState<Type>['pronouns']
  declare public publishingPrinciples: CRPersonState<Type>['publishingPrinciples']
  declare public relatedTo: CRPersonState<Type>['relatedTo']
  declare public seeks: CRPersonState<Type>['seeks']
  declare public sibling: CRPersonState<Type>['sibling']
  declare public skills: CRPersonState<Type>['skills']
  declare public sponsor: CRPersonState<Type>['sponsor']
  declare public spouse: CRPersonState<Type>['spouse']
  declare public taxID: CRPersonState<Type>['taxID']
  declare public telephone: CRPersonState<Type>['telephone']
  declare public vatID: CRPersonState<Type>['vatID']
  declare public weight: CRPersonState<Type>['weight']
  declare public workLocation: CRPersonState<Type>['workLocation']
  declare public worksFor: CRPersonState<Type>['worksFor']

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
        '@type': 'Person' as Type,
        additionalName: crSetSnapshot,
        address: crSetSnapshot,
        affiliation: crSetSnapshot,
        agentInteractionStatistic: crSetSnapshot,
        alumniOf: crSetSnapshot,
        award: crSetSnapshot,
        birthDate: '',
        birthPlace: crSetSnapshot,
        brand: crSetSnapshot,
        callSign: crSetSnapshot,
        children: crSetSnapshot,
        colleague: crSetSnapshot,
        contactPoint: crSetSnapshot,
        deathDate: '',
        deathPlace: crSetSnapshot,
        duns: crSetSnapshot,
        email: crSetSnapshot,
        familyName: crTextSnapshot,
        faxNumber: crSetSnapshot,
        follows: crSetSnapshot,
        funder: crSetSnapshot,
        funding: crSetSnapshot,
        gender: crSetSnapshot,
        givenName: crTextSnapshot,
        globalLocationNumber: crSetSnapshot,
        hasCertification: crSetSnapshot,
        hasCredential: crSetSnapshot,
        hasOccupation: crSetSnapshot,
        hasOfferCatalog: crSetSnapshot,
        hasPOS: crSetSnapshot,
        height: { '@id': '' },
        homeLocation: crSetSnapshot,
        honorificPrefix: crSetSnapshot,
        honorificSuffix: crSetSnapshot,
        interactionStatistic: crSetSnapshot,
        isicV4: crSetSnapshot,
        jobTitle: crSetSnapshot,
        knows: crSetSnapshot,
        knowsAbout: crSetSnapshot,
        knowsLanguage: crSetSnapshot,
        lifeEvent: crSetSnapshot,
        makesOffer: crSetSnapshot,
        memberOf: crSetSnapshot,
        naics: crSetSnapshot,
        nationality: crSetSnapshot,
        netWorth: { '@id': '' },
        owns: crSetSnapshot,
        parent: crSetSnapshot,
        performerIn: crSetSnapshot,
        pronouns: crSetSnapshot,
        publishingPrinciples: crSetSnapshot,
        relatedTo: crSetSnapshot,
        seeks: crSetSnapshot,
        sibling: crSetSnapshot,
        skills: crSetSnapshot,
        sponsor: crSetSnapshot,
        spouse: crSetSnapshot,
        taxID: crSetSnapshot,
        telephone: crSetSnapshot,
        vatID: crSetSnapshot,
        weight: { '@id': '' },
        workLocation: crSetSnapshot,
        worksFor: crSetSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        additionalName: 'set',
        address: 'set',
        affiliation: 'set',
        agentInteractionStatistic: 'set',
        alumniOf: 'set',
        award: 'set',
        birthPlace: 'set',
        brand: 'set',
        callSign: 'set',
        children: 'set',
        colleague: 'set',
        contactPoint: 'set',
        deathPlace: 'set',
        duns: 'set',
        email: 'set',
        familyName: 'text',
        faxNumber: 'set',
        follows: 'set',
        funder: 'set',
        funding: 'set',
        gender: 'set',
        givenName: 'text',
        globalLocationNumber: 'set',
        hasCertification: 'set',
        hasCredential: 'set',
        hasOccupation: 'set',
        hasOfferCatalog: 'set',
        hasPOS: 'set',
        homeLocation: 'set',
        honorificPrefix: 'set',
        honorificSuffix: 'set',
        interactionStatistic: 'set',
        isicV4: 'set',
        jobTitle: 'set',
        knows: 'set',
        knowsAbout: 'set',
        knowsLanguage: 'set',
        lifeEvent: 'set',
        makesOffer: 'set',
        memberOf: 'set',
        naics: 'set',
        nationality: 'set',
        owns: 'set',
        parent: 'set',
        performerIn: 'set',
        pronouns: 'set',
        publishingPrinciples: 'set',
        relatedTo: 'set',
        seeks: 'set',
        sibling: 'set',
        skills: 'set',
        sponsor: 'set',
        spouse: 'set',
        taxID: 'set',
        telephone: 'set',
        vatID: 'set',
        workLocation: 'set',
        worksFor: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
