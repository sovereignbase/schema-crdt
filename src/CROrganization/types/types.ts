import type { Organization } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type { CRAggregateRatingSnapshot } from '../../CRAggregateRating/types/types.js'
import type { CRContactPointSnapshot } from '../../CRContactPoint/types/types.js'
import type { CRCreativeWorkSnapshot } from '../../CRCreativeWork/types/types.js'
import type { CRDefinedTermSnapshot } from '../../CRDefinedTerm/types/types.js'
import type { CREnumerationSnapshot } from '../../CREnumeration/types/types.js'
import type { CRGeoShapeSnapshot } from '../../CRGeoShape/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRPlaceSnapshot } from '../../CRPlace/types/types.js'
import type { CRPostalAddressSnapshot } from '../../CRPostalAddress/types/types.js'
import type { CRReviewSnapshot } from '../../CRReview/types/types.js'
import type {
  CRThingDefaultShape,
  CRThingSnapshot,
  CRThingState,
} from '../../CRThing/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgDate,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgOrganizationRaw = Extract<
  Organization,
  { '@type': 'Organization' }
>

type SchemaOrgOrganization = Partial<SchemaOrgOrganizationRaw>

/**
 * Values accepted by Schema.org organization policy document properties.
 */
export type CROrganizationPolicy =
  | CRCreativeWorkSnapshot
  | CRTypedIdReferenceValue<'WebPage'>
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org organization address properties.
 */
export type CROrganizationAddress =
  | CRPostalAddressSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org organization place properties.
 */
export type CROrganizationPlace =
  | CRPlaceSnapshot<string>
  | CRGeoShapeSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org organization topic properties.
 */
export type CROrganizationTopic =
  | CRDefinedTermSnapshot
  | CRThingSnapshot
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/** Values accepted by Schema.org organization-person relationship properties. */
export type CROrganizationPerson = CRTypedIdReferenceValue<'Person'>

/** Values accepted by Schema.org organization-organization relationship properties. */
export type CROrganizationOrganization = CRTypedIdReferenceValue<'Organization'>

/** Values accepted by Schema.org person or organization relationship properties. */
export type CROrganizationPersonOrOrganization =
  | CRTypedIdReferenceValue<'Person'>
  | CRTypedIdReferenceValue<'Organization'>

/** Values accepted by Schema.org organization logo. */
export type CROrganizationLogo =
  | SchemaOrgURL
  | CRTypedIdReferenceValue<'ImageObject'>
  | CRIdReferenceValue

/** Values accepted by Schema.org organization event properties. */
export type CROrganizationEvent =
  | CRTypedIdReferenceValue<'Event'>
  | CRIdReferenceValue

/** Values accepted by Schema.org organization review properties. */
export type CROrganizationReview =
  | CRReviewSnapshot
  | CRTypedIdReferenceValue<'Review'>
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org Organization.
 *
 * Schema.org: An organization such as a school, NGO, corporation, club, etc.
 */
export type CROrganizationDefaultShape<Type = 'Organization'> = {
  /** Schema.org acceptedPaymentMethod: Payment methods accepted by an organization. */
  acceptedPaymentMethod: CRSetSnapshot<
    CREnumerationSnapshot<'PaymentMethod'> | CRIdReferenceValue
  >
  /** Schema.org actionableFeedbackPolicy: Public engagement policy statement. */
  actionableFeedbackPolicy: CRSetSnapshot<CROrganizationPolicy>
  /** Schema.org address: Physical address of the item. */
  address: CRSetSnapshot<CROrganizationAddress>
  /** Schema.org agentInteractionStatistic: Completed interactions for this entity. */
  agentInteractionStatistic: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org aggregateRating: Overall rating based on reviews or ratings. */
  aggregateRating: CRSetSnapshot<CRAggregateRatingSnapshot | CRIdReferenceValue>
  /** Schema.org alumni: Alumni of an organization. */
  alumni: CRSetSnapshot<CROrganizationPerson>
  /** Schema.org areaServed: Geographic area where a service or item is provided. */
  areaServed: CRSetSnapshot<CROrganizationPlace>
  /** Schema.org award: An award won by or for this item. */
  award: CRSetSnapshot<SchemaOrgText>
  /** Schema.org brand: Brands associated with a product, service or organization. */
  brand: CRSetSnapshot<CROrganizationOrganization>
  /** Schema.org companyRegistration: Official business registration information. */
  companyRegistration: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org contactPoint: A contact point for a person or organization. */
  contactPoint: CRSetSnapshot<CRContactPointSnapshot | CRIdReferenceValue>
  /** Schema.org correctionsPolicy: Disclosure and correction policy for errors. */
  correctionsPolicy: CRSetSnapshot<CROrganizationPolicy>
  /** Schema.org department: An organization department relationship. */
  department: CRSetSnapshot<CROrganizationOrganization>
  /** Schema.org dissolutionDate: Date this organization was dissolved. */
  dissolutionDate: SchemaOrgDate
  /** Schema.org diversityPolicy: Diversity policy statement. */
  diversityPolicy: CRSetSnapshot<CROrganizationPolicy>
  /** Schema.org diversityStaffingReport: Staffing diversity report. */
  diversityStaffingReport: CRSetSnapshot<CROrganizationPolicy>
  /** Schema.org duns: Dun & Bradstreet DUNS number. */
  duns: CRTextSnapshot
  /** Schema.org email: Email address. */
  email: CRTextSnapshot
  /** Schema.org employee: Someone working for this organization. */
  employee: CRSetSnapshot<CROrganizationPerson>
  /** Schema.org ethicsPolicy: Ethics policy statement. */
  ethicsPolicy: CRSetSnapshot<CROrganizationPolicy>
  /** Schema.org event: Upcoming or past event associated with this organization. */
  event: CRSetSnapshot<CROrganizationEvent>
  /** Schema.org faxNumber: The fax number. */
  faxNumber: CRTextSnapshot
  /** Schema.org founder: Person or organization who founded this organization. */
  founder: CRSetSnapshot<CROrganizationPersonOrOrganization>
  /** Schema.org foundingDate: Date this organization was founded. */
  foundingDate: SchemaOrgDate
  /** Schema.org foundingLocation: Place where the organization was founded. */
  foundingLocation: CRSetSnapshot<CROrganizationPlace>
  /** Schema.org funder: Person or organization that supports something financially. */
  funder: CRSetSnapshot<CROrganizationPersonOrOrganization>
  /** Schema.org funding: Grant that provides funding or sponsorship. */
  funding: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org globalLocationNumber: GS1 Global Location Number. */
  globalLocationNumber: CRTextSnapshot
  /** Schema.org hasCertification: Certification information. */
  hasCertification: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasCredential: Credential awarded to the organization. */
  hasCredential: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasGS1DigitalLink: GS1 digital link URL. */
  hasGS1DigitalLink: SchemaOrgURL
  /** Schema.org hasMemberProgram: MemberProgram offered by an organization. */
  hasMemberProgram: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasMerchantReturnPolicy: Applicable merchant return policy. */
  hasMerchantReturnPolicy: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasOfferCatalog: OfferCatalog listing for this organization. */
  hasOfferCatalog: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasPOS: Points-of-sale operated by the organization. */
  hasPOS: CRSetSnapshot<CROrganizationPlace>
  /** Schema.org hasShippingService: Shipping service offered by the organization. */
  hasShippingService: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org interactionStatistic: Interaction counter for this entity. */
  interactionStatistic: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org isicV4: ISIC Revision 4 code. */
  isicV4: CRTextSnapshot
  /** Schema.org iso6523Code: ISO 6523 organization identifier. */
  iso6523Code: CRTextSnapshot
  /** Schema.org keywords: Keywords or tags used to describe the item. */
  keywords: CRSetSnapshot<CROrganizationTopic>
  /** Schema.org knowsAbout: Topic that the organization knows about. */
  knowsAbout: CRSetSnapshot<CROrganizationTopic>
  /** Schema.org knowsLanguage: Language known by the organization. */
  knowsLanguage: CRSetSnapshot<SchemaOrgText | CRIdReferenceValue>
  /** Schema.org legalAddress: Official registered legal address. */
  legalAddress: CRSetSnapshot<CRPostalAddressSnapshot | CRIdReferenceValue>
  /** Schema.org legalName: Official name of the organization. */
  legalName: CRTextSnapshot
  /** Schema.org legalRepresentative: Person who legally represents this organization. */
  legalRepresentative: CRSetSnapshot<CROrganizationPerson>
  /** Schema.org leiCode: Legal Entity Identifier. */
  leiCode: CRTextSnapshot
  /** Schema.org location: Location of the organization. */
  location: CRSetSnapshot<CROrganizationPlace | CRPostalAddressSnapshot>
  /** Schema.org logo: Associated logo. */
  logo: CRSetSnapshot<CROrganizationLogo>
  /** Schema.org makesOffer: Products or services offered by the organization. */
  makesOffer: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org member: A member of an Organization or ProgramMembership. */
  member: CRSetSnapshot<CROrganizationPersonOrOrganization>
  /** Schema.org memberOf: Organization or membership this organization belongs to. */
  memberOf: CRSetSnapshot<CROrganizationOrganization>
  /** Schema.org naics: NAICS code. */
  naics: CRTextSnapshot
  /** Schema.org nonprofitStatus: Legal status of a non-profit organization. */
  nonprofitStatus: CREnumerationSnapshot<'NonprofitType'> | CRIdReferenceValue
  /** Schema.org numberOfEmployees: Number of employees in an organization. */
  numberOfEmployees: CRIdReferenceValue
  /** Schema.org ownershipFundingInfo: Ownership structure, funding and grants. */
  ownershipFundingInfo: CRSetSnapshot<CROrganizationPolicy | SchemaOrgText>
  /** Schema.org owns: Things owned by the organization. */
  owns: CRSetSnapshot<CRThingSnapshot | CRIdReferenceValue>
  /** Schema.org parentOrganization: Larger organization this is part of. */
  parentOrganization: CRSetSnapshot<CROrganizationOrganization>
  /** Schema.org publishingPrinciples: Editorial principles document. */
  publishingPrinciples: CRSetSnapshot<CROrganizationPolicy>
  /** Schema.org review: A review of the item. */
  review: CRSetSnapshot<CROrganizationReview>
  /** Schema.org seeks: Products or services sought by the organization. */
  seeks: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org skills: Competency statement. */
  skills: CRSetSnapshot<
    CRDefinedTermSnapshot | SchemaOrgText | CRIdReferenceValue
  >
  /** Schema.org slogan: Slogan or motto associated with the item. */
  slogan: CRTextSnapshot
  /** Schema.org sponsor: Person or organization that supports a thing. */
  sponsor: CRSetSnapshot<CROrganizationPersonOrOrganization>
  /** Schema.org subOrganization: Organization included by this organization. */
  subOrganization: CRSetSnapshot<CROrganizationOrganization>
  /** Schema.org taxID: Tax or fiscal identifier. */
  taxID: CRTextSnapshot
  /** Schema.org telephone: The telephone number. */
  telephone: CRTextSnapshot
  /** Schema.org unnamedSourcesPolicy: Policy on use of unnamed sources. */
  unnamedSourcesPolicy: CRSetSnapshot<CROrganizationPolicy>
  /** Schema.org vatID: Value-added tax identifier. */
  vatID: CRTextSnapshot
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Organization.
 */
export type CROrganizationSnapshot<Type = 'Organization'> =
  CRStructPartialSnapshot<
    CROrganizationDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

/**
 * Intentionally omitted deprecated Schema.org Organization properties:
 * awards, contactPoints, employees, events, founders, hasProductReturnPolicy,
 * members, reviews, serviceArea.
 */
type MissingKeys = Exclude<
  keyof SchemaOrgOrganization,
  keyof CROrganizationSnapshot
>

type ExtraKeys = Exclude<
  keyof CROrganizationSnapshot,
  keyof SchemaOrgOrganization
>

/**
 * Runtime CRDT state surface for Schema.org Organization.
 */
export type CROrganizationState<Type = 'Organization'> = {
  /** Schema.org acceptedPaymentMethod: Payment methods accepted by an organization. */
  acceptedPaymentMethod: Readonly<
    CRSet<CREnumerationSnapshot<'PaymentMethod'> | CRIdReferenceValue>
  >
  /** Schema.org actionableFeedbackPolicy: Public engagement policy statement. */
  actionableFeedbackPolicy: Readonly<CRSet<CROrganizationPolicy>>
  /** Schema.org address: Physical address of the item. */
  address: Readonly<CRSet<CROrganizationAddress>>
  /** Schema.org agentInteractionStatistic: Completed interactions for this entity. */
  agentInteractionStatistic: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org aggregateRating: Overall rating based on reviews or ratings. */
  aggregateRating: Readonly<
    CRSet<CRAggregateRatingSnapshot | CRIdReferenceValue>
  >
  /** Schema.org alumni: Alumni of an organization. */
  alumni: Readonly<CRSet<CROrganizationPerson>>
  /** Schema.org areaServed: Geographic area where a service or item is provided. */
  areaServed: Readonly<CRSet<CROrganizationPlace>>
  /** Schema.org award: An award won by or for this item. */
  award: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org brand: Brands associated with a product, service or organization. */
  brand: Readonly<CRSet<CROrganizationOrganization>>
  /** Schema.org companyRegistration: Official business registration information. */
  companyRegistration: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org contactPoint: A contact point for a person or organization. */
  contactPoint: Readonly<CRSet<CRContactPointSnapshot | CRIdReferenceValue>>
  /** Schema.org correctionsPolicy: Disclosure and correction policy for errors. */
  correctionsPolicy: Readonly<CRSet<CROrganizationPolicy>>
  /** Schema.org department: An organization department relationship. */
  department: Readonly<CRSet<CROrganizationOrganization>>
  /** Schema.org dissolutionDate: Date this organization was dissolved. */
  dissolutionDate: SchemaOrgDate
  /** Schema.org diversityPolicy: Diversity policy statement. */
  diversityPolicy: Readonly<CRSet<CROrganizationPolicy>>
  /** Schema.org diversityStaffingReport: Staffing diversity report. */
  diversityStaffingReport: Readonly<CRSet<CROrganizationPolicy>>
  /** Schema.org duns: Dun & Bradstreet DUNS number. */
  duns: Readonly<CRText>
  /** Schema.org email: Email address. */
  email: Readonly<CRText>
  /** Schema.org employee: Someone working for this organization. */
  employee: Readonly<CRSet<CROrganizationPerson>>
  /** Schema.org ethicsPolicy: Ethics policy statement. */
  ethicsPolicy: Readonly<CRSet<CROrganizationPolicy>>
  /** Schema.org event: Upcoming or past event associated with this organization. */
  event: Readonly<CRSet<CROrganizationEvent>>
  /** Schema.org faxNumber: The fax number. */
  faxNumber: Readonly<CRText>
  /** Schema.org founder: Person or organization who founded this organization. */
  founder: Readonly<CRSet<CROrganizationPersonOrOrganization>>
  /** Schema.org foundingDate: Date this organization was founded. */
  foundingDate: SchemaOrgDate
  /** Schema.org foundingLocation: Place where the organization was founded. */
  foundingLocation: Readonly<CRSet<CROrganizationPlace>>
  /** Schema.org funder: Person or organization that supports something financially. */
  funder: Readonly<CRSet<CROrganizationPersonOrOrganization>>
  /** Schema.org funding: Grant that provides funding or sponsorship. */
  funding: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org globalLocationNumber: GS1 Global Location Number. */
  globalLocationNumber: Readonly<CRText>
  /** Schema.org hasCertification: Certification information. */
  hasCertification: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasCredential: Credential awarded to the organization. */
  hasCredential: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasGS1DigitalLink: GS1 digital link URL. */
  hasGS1DigitalLink: SchemaOrgURL
  /** Schema.org hasMemberProgram: MemberProgram offered by an organization. */
  hasMemberProgram: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasMerchantReturnPolicy: Applicable merchant return policy. */
  hasMerchantReturnPolicy: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasOfferCatalog: OfferCatalog listing for this organization. */
  hasOfferCatalog: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasPOS: Points-of-sale operated by the organization. */
  hasPOS: Readonly<CRSet<CROrganizationPlace>>
  /** Schema.org hasShippingService: Shipping service offered by the organization. */
  hasShippingService: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org interactionStatistic: Interaction counter for this entity. */
  interactionStatistic: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org isicV4: ISIC Revision 4 code. */
  isicV4: Readonly<CRText>
  /** Schema.org iso6523Code: ISO 6523 organization identifier. */
  iso6523Code: Readonly<CRText>
  /** Schema.org keywords: Keywords or tags used to describe the item. */
  keywords: Readonly<CRSet<CROrganizationTopic>>
  /** Schema.org knowsAbout: Topic that the organization knows about. */
  knowsAbout: Readonly<CRSet<CROrganizationTopic>>
  /** Schema.org knowsLanguage: Language known by the organization. */
  knowsLanguage: Readonly<CRSet<SchemaOrgText | CRIdReferenceValue>>
  /** Schema.org legalAddress: Official registered legal address. */
  legalAddress: Readonly<CRSet<CRPostalAddressSnapshot | CRIdReferenceValue>>
  /** Schema.org legalName: Official name of the organization. */
  legalName: Readonly<CRText>
  /** Schema.org legalRepresentative: Person who legally represents this organization. */
  legalRepresentative: Readonly<CRSet<CROrganizationPerson>>
  /** Schema.org leiCode: Legal Entity Identifier. */
  leiCode: Readonly<CRText>
  /** Schema.org location: Location of the organization. */
  location: Readonly<CRSet<CROrganizationPlace | CRPostalAddressSnapshot>>
  /** Schema.org logo: Associated logo. */
  logo: Readonly<CRSet<CROrganizationLogo>>
  /** Schema.org makesOffer: Products or services offered by the organization. */
  makesOffer: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org member: A member of an Organization or ProgramMembership. */
  member: Readonly<CRSet<CROrganizationPersonOrOrganization>>
  /** Schema.org memberOf: Organization or membership this organization belongs to. */
  memberOf: Readonly<CRSet<CROrganizationOrganization>>
  /** Schema.org naics: NAICS code. */
  naics: Readonly<CRText>
  /** Schema.org nonprofitStatus: Legal status of a non-profit organization. */
  nonprofitStatus: CREnumerationSnapshot<'NonprofitType'> | CRIdReferenceValue
  /** Schema.org numberOfEmployees: Number of employees in an organization. */
  numberOfEmployees: CRIdReferenceValue
  /** Schema.org ownershipFundingInfo: Ownership structure, funding and grants. */
  ownershipFundingInfo: Readonly<CRSet<CROrganizationPolicy | SchemaOrgText>>
  /** Schema.org owns: Things owned by the organization. */
  owns: Readonly<CRSet<CRThingSnapshot | CRIdReferenceValue>>
  /** Schema.org parentOrganization: Larger organization this is part of. */
  parentOrganization: Readonly<CRSet<CROrganizationOrganization>>
  /** Schema.org publishingPrinciples: Editorial principles document. */
  publishingPrinciples: Readonly<CRSet<CROrganizationPolicy>>
  /** Schema.org review: A review of the item. */
  review: Readonly<CRSet<CROrganizationReview>>
  /** Schema.org seeks: Products or services sought by the organization. */
  seeks: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org skills: Competency statement. */
  skills: Readonly<
    CRSet<CRDefinedTermSnapshot | SchemaOrgText | CRIdReferenceValue>
  >
  /** Schema.org slogan: Slogan or motto associated with the item. */
  slogan: Readonly<CRText>
  /** Schema.org sponsor: Person or organization that supports a thing. */
  sponsor: Readonly<CRSet<CROrganizationPersonOrOrganization>>
  /** Schema.org subOrganization: Organization included by this organization. */
  subOrganization: Readonly<CRSet<CROrganizationOrganization>>
  /** Schema.org taxID: Tax or fiscal identifier. */
  taxID: Readonly<CRText>
  /** Schema.org telephone: The telephone number. */
  telephone: Readonly<CRText>
  /** Schema.org unnamedSourcesPolicy: Policy on use of unnamed sources. */
  unnamedSourcesPolicy: Readonly<CRSet<CROrganizationPolicy>>
  /** Schema.org vatID: Value-added tax identifier. */
  vatID: Readonly<CRText>
} & CRThingState<Type>
