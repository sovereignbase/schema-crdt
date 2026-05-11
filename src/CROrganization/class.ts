import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type {
  CROrganizationDefaultShape,
  CROrganizationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org Organization.
 *
 * Schema.org: An organization such as a school, NGO, corporation, club, etc.
 */
export class CROrganization<
  Type = 'Organization',
  Shape extends CROrganizationDefaultShape<Type> =
    CROrganizationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CROrganizationState<Type>
{
  /** Schema.org type name for this node. */
  declare public readonly '@type': Type
  declare public acceptedPaymentMethod: CROrganizationState<Type>['acceptedPaymentMethod']
  declare public actionableFeedbackPolicy: CROrganizationState<Type>['actionableFeedbackPolicy']
  declare public address: CROrganizationState<Type>['address']
  declare public agentInteractionStatistic: CROrganizationState<Type>['agentInteractionStatistic']
  declare public aggregateRating: CROrganizationState<Type>['aggregateRating']
  declare public alumni: CROrganizationState<Type>['alumni']
  declare public areaServed: CROrganizationState<Type>['areaServed']
  declare public award: CROrganizationState<Type>['award']
  declare public awards: CROrganizationState<Type>['awards']
  declare public brand: CROrganizationState<Type>['brand']
  declare public companyRegistration: CROrganizationState<Type>['companyRegistration']
  declare public contactPoint: CROrganizationState<Type>['contactPoint']
  declare public contactPoints: CROrganizationState<Type>['contactPoints']
  declare public correctionsPolicy: CROrganizationState<Type>['correctionsPolicy']
  declare public department: CROrganizationState<Type>['department']
  declare public dissolutionDate: CROrganizationState<Type>['dissolutionDate']
  declare public diversityPolicy: CROrganizationState<Type>['diversityPolicy']
  declare public diversityStaffingReport: CROrganizationState<Type>['diversityStaffingReport']
  declare public duns: CROrganizationState<Type>['duns']
  declare public email: CROrganizationState<Type>['email']
  declare public employee: CROrganizationState<Type>['employee']
  declare public employees: CROrganizationState<Type>['employees']
  declare public ethicsPolicy: CROrganizationState<Type>['ethicsPolicy']
  declare public event: CROrganizationState<Type>['event']
  declare public events: CROrganizationState<Type>['events']
  declare public faxNumber: CROrganizationState<Type>['faxNumber']
  declare public founder: CROrganizationState<Type>['founder']
  declare public founders: CROrganizationState<Type>['founders']
  declare public foundingDate: CROrganizationState<Type>['foundingDate']
  declare public foundingLocation: CROrganizationState<Type>['foundingLocation']
  declare public funder: CROrganizationState<Type>['funder']
  declare public funding: CROrganizationState<Type>['funding']
  declare public globalLocationNumber: CROrganizationState<Type>['globalLocationNumber']
  declare public hasCertification: CROrganizationState<Type>['hasCertification']
  declare public hasCredential: CROrganizationState<Type>['hasCredential']
  declare public hasGS1DigitalLink: CROrganizationState<Type>['hasGS1DigitalLink']
  declare public hasMemberProgram: CROrganizationState<Type>['hasMemberProgram']
  declare public hasMerchantReturnPolicy: CROrganizationState<Type>['hasMerchantReturnPolicy']
  declare public hasProductReturnPolicy: CROrganizationState<Type>['hasProductReturnPolicy']
  declare public hasOfferCatalog: CROrganizationState<Type>['hasOfferCatalog']
  declare public hasPOS: CROrganizationState<Type>['hasPOS']
  declare public hasShippingService: CROrganizationState<Type>['hasShippingService']
  declare public interactionStatistic: CROrganizationState<Type>['interactionStatistic']
  declare public isicV4: CROrganizationState<Type>['isicV4']
  declare public iso6523Code: CROrganizationState<Type>['iso6523Code']
  declare public keywords: CROrganizationState<Type>['keywords']
  declare public knowsAbout: CROrganizationState<Type>['knowsAbout']
  declare public knowsLanguage: CROrganizationState<Type>['knowsLanguage']
  declare public legalAddress: CROrganizationState<Type>['legalAddress']
  declare public legalName: CROrganizationState<Type>['legalName']
  declare public legalRepresentative: CROrganizationState<Type>['legalRepresentative']
  declare public leiCode: CROrganizationState<Type>['leiCode']
  declare public location: CROrganizationState<Type>['location']
  declare public logo: CROrganizationState<Type>['logo']
  declare public makesOffer: CROrganizationState<Type>['makesOffer']
  declare public member: CROrganizationState<Type>['member']
  declare public members: CROrganizationState<Type>['members']
  declare public memberOf: CROrganizationState<Type>['memberOf']
  declare public naics: CROrganizationState<Type>['naics']
  declare public nonprofitStatus: CROrganizationState<Type>['nonprofitStatus']
  declare public numberOfEmployees: CROrganizationState<Type>['numberOfEmployees']
  declare public ownershipFundingInfo: CROrganizationState<Type>['ownershipFundingInfo']
  declare public owns: CROrganizationState<Type>['owns']
  declare public parentOrganization: CROrganizationState<Type>['parentOrganization']
  declare public publishingPrinciples: CROrganizationState<Type>['publishingPrinciples']
  declare public review: CROrganizationState<Type>['review']
  declare public reviews: CROrganizationState<Type>['reviews']
  declare public seeks: CROrganizationState<Type>['seeks']
  declare public serviceArea: CROrganizationState<Type>['serviceArea']
  declare public skills: CROrganizationState<Type>['skills']
  declare public slogan: CROrganizationState<Type>['slogan']
  declare public sponsor: CROrganizationState<Type>['sponsor']
  declare public subOrganization: CROrganizationState<Type>['subOrganization']
  declare public taxID: CROrganizationState<Type>['taxID']
  declare public telephone: CROrganizationState<Type>['telephone']
  declare public unnamedSourcesPolicy: CROrganizationState<Type>['unnamedSourcesPolicy']
  declare public vatID: CROrganizationState<Type>['vatID']

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
        '@type': 'Organization' as Type,
        acceptedPaymentMethod: crSetSnapshot,
        actionableFeedbackPolicy: crSetSnapshot,
        address: crSetSnapshot,
        agentInteractionStatistic: crSetSnapshot,
        aggregateRating: crSetSnapshot,
        alumni: crSetSnapshot,
        areaServed: crSetSnapshot,
        award: crSetSnapshot,
        awards: crSetSnapshot,
        brand: crSetSnapshot,
        companyRegistration: crSetSnapshot,
        contactPoint: crSetSnapshot,
        contactPoints: crSetSnapshot,
        correctionsPolicy: crSetSnapshot,
        department: crSetSnapshot,
        dissolutionDate: '',
        diversityPolicy: crSetSnapshot,
        diversityStaffingReport: crSetSnapshot,
        duns: crTextSnapshot,
        email: crTextSnapshot,
        employee: crSetSnapshot,
        employees: crSetSnapshot,
        ethicsPolicy: crSetSnapshot,
        event: crSetSnapshot,
        events: crSetSnapshot,
        faxNumber: crTextSnapshot,
        founder: crSetSnapshot,
        founders: crSetSnapshot,
        foundingDate: '',
        foundingLocation: crSetSnapshot,
        funder: crSetSnapshot,
        funding: crSetSnapshot,
        globalLocationNumber: crTextSnapshot,
        hasCertification: crSetSnapshot,
        hasCredential: crSetSnapshot,
        hasGS1DigitalLink: '',
        hasMemberProgram: crSetSnapshot,
        hasMerchantReturnPolicy: crSetSnapshot,
        hasProductReturnPolicy: crSetSnapshot,
        hasOfferCatalog: crSetSnapshot,
        hasPOS: crSetSnapshot,
        hasShippingService: crSetSnapshot,
        interactionStatistic: crSetSnapshot,
        isicV4: crTextSnapshot,
        iso6523Code: crTextSnapshot,
        keywords: crSetSnapshot,
        knowsAbout: crSetSnapshot,
        knowsLanguage: crSetSnapshot,
        legalAddress: crSetSnapshot,
        legalName: crTextSnapshot,
        legalRepresentative: crSetSnapshot,
        leiCode: crTextSnapshot,
        location: crSetSnapshot,
        logo: crSetSnapshot,
        makesOffer: crSetSnapshot,
        member: crSetSnapshot,
        members: crSetSnapshot,
        memberOf: crSetSnapshot,
        naics: crTextSnapshot,
        nonprofitStatus: { '@id': '' },
        numberOfEmployees: { '@id': '' },
        ownershipFundingInfo: crSetSnapshot,
        owns: crSetSnapshot,
        parentOrganization: crSetSnapshot,
        publishingPrinciples: crSetSnapshot,
        review: crSetSnapshot,
        reviews: crSetSnapshot,
        seeks: crSetSnapshot,
        serviceArea: crSetSnapshot,
        skills: crSetSnapshot,
        slogan: crTextSnapshot,
        sponsor: crSetSnapshot,
        subOrganization: crSetSnapshot,
        taxID: crTextSnapshot,
        telephone: crTextSnapshot,
        unnamedSourcesPolicy: crSetSnapshot,
        vatID: crTextSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        acceptedPaymentMethod: 'set',
        actionableFeedbackPolicy: 'set',
        address: 'set',
        agentInteractionStatistic: 'set',
        aggregateRating: 'set',
        alumni: 'set',
        areaServed: 'set',
        award: 'set',
        awards: 'set',
        brand: 'set',
        companyRegistration: 'set',
        contactPoint: 'set',
        contactPoints: 'set',
        correctionsPolicy: 'set',
        department: 'set',
        diversityPolicy: 'set',
        diversityStaffingReport: 'set',
        duns: 'text',
        email: 'text',
        employee: 'set',
        employees: 'set',
        ethicsPolicy: 'set',
        event: 'set',
        events: 'set',
        faxNumber: 'text',
        founder: 'set',
        founders: 'set',
        foundingLocation: 'set',
        funder: 'set',
        funding: 'set',
        globalLocationNumber: 'text',
        hasCertification: 'set',
        hasCredential: 'set',
        hasMemberProgram: 'set',
        hasMerchantReturnPolicy: 'set',
        hasProductReturnPolicy: 'set',
        hasOfferCatalog: 'set',
        hasPOS: 'set',
        hasShippingService: 'set',
        interactionStatistic: 'set',
        isicV4: 'text',
        iso6523Code: 'text',
        keywords: 'set',
        knowsAbout: 'set',
        knowsLanguage: 'set',
        legalAddress: 'set',
        legalName: 'text',
        legalRepresentative: 'set',
        leiCode: 'text',
        location: 'set',
        logo: 'set',
        makesOffer: 'set',
        member: 'set',
        members: 'set',
        memberOf: 'set',
        naics: 'text',
        ownershipFundingInfo: 'set',
        owns: 'set',
        parentOrganization: 'set',
        publishingPrinciples: 'set',
        review: 'set',
        reviews: 'set',
        seeks: 'set',
        serviceArea: 'set',
        skills: 'set',
        slogan: 'text',
        sponsor: 'set',
        subOrganization: 'set',
        taxID: 'text',
        telephone: 'text',
        unnamedSourcesPolicy: 'set',
        vatID: 'text',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
