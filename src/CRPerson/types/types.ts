import type { Person } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type { CRContactPointSnapshot } from '../../CRContactPoint/types/types.js'
import type { CRCountrySnapshot } from '../../CRCountry/types/types.js'
import type { CRCreativeWorkSnapshot } from '../../CRCreativeWork/types/types.js'
import type { CRDefinedTermSnapshot } from '../../CRDefinedTerm/types/types.js'
import type { CREnumerationSnapshot } from '../../CREnumeration/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRPlaceSnapshot } from '../../CRPlace/types/types.js'
import type { CRPostalAddressSnapshot } from '../../CRPostalAddress/types/types.js'
import type { CRStructuredValueSnapshot } from '../../CRStructuredValue/types/types.js'
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

type SchemaOrgPersonRaw = Extract<Person, { '@type': 'Person' }>

type SchemaOrgPerson = Partial<SchemaOrgPersonRaw>

/** Values accepted by Schema.org person address properties. */
export type CRPersonAddress =
  | CRPostalAddressSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/** Values accepted by Schema.org person organization relationship properties. */
export type CRPersonOrganization = CRTypedIdReferenceValue<'Organization'>

/** Values accepted by Schema.org person-person relationship properties. */
export type CRPersonRelation = CRTypedIdReferenceValue<'Person'>

/** Values accepted by Schema.org person or organization relationship properties. */
export type CRPersonOrOrganization =
  | CRTypedIdReferenceValue<'Person'>
  | CRTypedIdReferenceValue<'Organization'>

/** Values accepted by Schema.org person place relationship properties. */
export type CRPersonPlace = CRPlaceSnapshot<string> | CRIdReferenceValue

/** Values accepted by Schema.org person location properties. */
export type CRPersonLocation =
  | CRContactPointSnapshot
  | CRPlaceSnapshot<string>
  | CRIdReferenceValue

/** Values accepted by Schema.org person topic properties. */
export type CRPersonTopic =
  | CRDefinedTermSnapshot
  | CRThingSnapshot
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/** Values accepted by Schema.org person policy document properties. */
export type CRPersonPolicy =
  | CRCreativeWorkSnapshot
  | CRTypedIdReferenceValue<'WebPage'>
  | SchemaOrgURL
  | CRIdReferenceValue

/** Values accepted by Schema.org person quantitative properties. */
export type CRPersonQuantitativeValue =
  | CRStructuredValueSnapshot
  | CRIdReferenceValue

/** Values accepted by Schema.org pronouns. */
export type CRPersonPronouns =
  | CRDefinedTermSnapshot
  | CRStructuredValueSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org Person.
 *
 * Schema.org: A person (alive, dead, undead, or fictional).
 */
export type CRPersonDefaultShape<Type = 'Person'> = {
  /** Schema.org additionalName: An additional name for a Person. */
  additionalName: CRSetSnapshot<SchemaOrgText>
  /** Schema.org address: Physical address of the item. */
  address: CRSetSnapshot<CRPersonAddress>
  /** Schema.org affiliation: An organization that this person is affiliated with. */
  affiliation: CRSetSnapshot<CRPersonOrganization>
  /** Schema.org agentInteractionStatistic: Completed interactions for this entity. */
  agentInteractionStatistic: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org alumniOf: An organization that the person is an alumni of. */
  alumniOf: CRSetSnapshot<CRPersonOrganization>
  /** Schema.org award: An award won by or for this item. */
  award: CRSetSnapshot<SchemaOrgText>
  /** Schema.org birthDate: Date of birth. */
  birthDate: SchemaOrgDate
  /** Schema.org birthPlace: The place where the person was born. */
  birthPlace: CRSetSnapshot<CRPersonPlace>
  /** Schema.org brand: Brand associated with this person. */
  brand: CRSetSnapshot<CRPersonOrganization>
  /** Schema.org callSign: Callsign used in broadcasting or radio communications. */
  callSign: CRSetSnapshot<SchemaOrgText>
  /** Schema.org children: A child of the person. */
  children: CRSetSnapshot<CRPersonRelation>
  /** Schema.org colleague: A colleague of the person. */
  colleague: CRSetSnapshot<CRPersonRelation | SchemaOrgURL>
  /** Schema.org contactPoint: A contact point for a person or organization. */
  contactPoint: CRSetSnapshot<CRContactPointSnapshot | CRIdReferenceValue>
  /** Schema.org deathDate: Date of death. */
  deathDate: SchemaOrgDate
  /** Schema.org deathPlace: The place where the person died. */
  deathPlace: CRSetSnapshot<CRPersonPlace>
  /** Schema.org duns: Dun & Bradstreet DUNS number. */
  duns: CRSetSnapshot<SchemaOrgText>
  /** Schema.org email: Email address. */
  email: CRSetSnapshot<SchemaOrgText>
  /** Schema.org familyName: Family name. */
  familyName: CRTextSnapshot
  /** Schema.org faxNumber: The fax number. */
  faxNumber: CRSetSnapshot<SchemaOrgText>
  /** Schema.org follows: The most generic uni-directional social relation. */
  follows: CRSetSnapshot<CRPersonRelation>
  /** Schema.org funder: Person or organization that supports something financially. */
  funder: CRSetSnapshot<CRPersonOrOrganization>
  /** Schema.org funding: Grant that provides funding or sponsorship. */
  funding: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org gender: Gender of something. */
  gender: CRSetSnapshot<
    CREnumerationSnapshot<'GenderType'> | SchemaOrgText | CRIdReferenceValue
  >
  /** Schema.org givenName: Given name. */
  givenName: CRTextSnapshot
  /** Schema.org globalLocationNumber: GS1 Global Location Number. */
  globalLocationNumber: CRSetSnapshot<SchemaOrgText>
  /** Schema.org hasCertification: Certification information. */
  hasCertification: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasCredential: Credential awarded to the Person. */
  hasCredential: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasOccupation: The Person's occupation. */
  hasOccupation: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasOfferCatalog: OfferCatalog listing for this person. */
  hasOfferCatalog: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org hasPOS: Points-of-sale operated by the person. */
  hasPOS: CRSetSnapshot<CRPersonPlace>
  /** Schema.org height: The height of the item. */
  height: CRPersonQuantitativeValue
  /** Schema.org homeLocation: A contact location for a person's residence. */
  homeLocation: CRSetSnapshot<CRPersonLocation>
  /** Schema.org honorificPrefix: Honorific prefix preceding a Person's name. */
  honorificPrefix: CRSetSnapshot<SchemaOrgText>
  /** Schema.org honorificSuffix: Honorific suffix following a Person's name. */
  honorificSuffix: CRSetSnapshot<SchemaOrgText>
  /** Schema.org interactionStatistic: Interaction counter for this entity. */
  interactionStatistic: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org isicV4: ISIC Revision 4 code. */
  isicV4: CRSetSnapshot<SchemaOrgText>
  /** Schema.org jobTitle: The job title of the person. */
  jobTitle: CRSetSnapshot<
    CRDefinedTermSnapshot | SchemaOrgText | CRIdReferenceValue
  >
  /** Schema.org knows: The most generic bi-directional social/work relation. */
  knows: CRSetSnapshot<CRPersonRelation>
  /** Schema.org knowsAbout: Topic that the person knows about. */
  knowsAbout: CRSetSnapshot<CRPersonTopic>
  /** Schema.org knowsLanguage: Language known by the person. */
  knowsLanguage: CRSetSnapshot<SchemaOrgText | CRIdReferenceValue>
  /** Schema.org lifeEvent: A life event. */
  lifeEvent: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org makesOffer: Products or services offered by the person. */
  makesOffer: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org memberOf: Organization or membership this person belongs to. */
  memberOf: CRSetSnapshot<CRPersonOrganization>
  /** Schema.org naics: NAICS code. */
  naics: CRSetSnapshot<SchemaOrgText>
  /** Schema.org nationality: Nationality of the person. */
  nationality: CRSetSnapshot<CRCountrySnapshot | CRIdReferenceValue>
  /** Schema.org netWorth: Total financial value of the person. */
  netWorth: CRPersonQuantitativeValue
  /** Schema.org owns: Things owned by the person. */
  owns: CRSetSnapshot<CRThingSnapshot | CRIdReferenceValue>
  /** Schema.org parent: A parent of this person. */
  parent: CRSetSnapshot<CRPersonRelation>
  /** Schema.org performerIn: Event that this person is a performer or participant in. */
  performerIn: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org pronouns: Pronouns for a person. */
  pronouns: CRSetSnapshot<CRPersonPronouns>
  /** Schema.org publishingPrinciples: Editorial principles document. */
  publishingPrinciples: CRSetSnapshot<CRPersonPolicy>
  /** Schema.org relatedTo: The most generic familial relation. */
  relatedTo: CRSetSnapshot<CRPersonRelation>
  /** Schema.org seeks: Products or services sought by the person. */
  seeks: CRSetSnapshot<CRIdReferenceValue>
  /** Schema.org sibling: A sibling of the person. */
  sibling: CRSetSnapshot<CRPersonRelation>
  /** Schema.org skills: Competency statement. */
  skills: CRSetSnapshot<
    CRDefinedTermSnapshot | SchemaOrgText | CRIdReferenceValue
  >
  /** Schema.org sponsor: Person or organization that supports a thing. */
  sponsor: CRSetSnapshot<CRPersonOrOrganization>
  /** Schema.org spouse: The person's spouse. */
  spouse: CRSetSnapshot<CRPersonRelation>
  /** Schema.org taxID: Tax or fiscal identifier. */
  taxID: CRSetSnapshot<SchemaOrgText>
  /** Schema.org telephone: The telephone number. */
  telephone: CRSetSnapshot<SchemaOrgText>
  /** Schema.org vatID: Value-added tax identifier. */
  vatID: CRSetSnapshot<SchemaOrgText>
  /** Schema.org weight: The weight of the person. */
  weight: CRPersonQuantitativeValue
  /** Schema.org workLocation: A contact location for a person's place of work. */
  workLocation: CRSetSnapshot<CRPersonLocation>
  /** Schema.org worksFor: Organizations that the person works for. */
  worksFor: CRSetSnapshot<CRPersonOrganization>
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Person.
 */
export type CRPersonSnapshot<Type = 'Person'> = CRStructPartialSnapshot<
  CRPersonDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org Person properties:
 * awards, colleagues, contactPoints, parents, siblings.
 */
type MissingKeys = Exclude<keyof SchemaOrgPerson, keyof CRPersonSnapshot>

type ExtraKeys = Exclude<keyof CRPersonSnapshot, keyof SchemaOrgPerson>

/**
 * Runtime CRDT state surface for Schema.org Person.
 */
export type CRPersonState<Type = 'Person'> = {
  /** Schema.org additionalName: An additional name for a Person. */
  additionalName: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org address: Physical address of the item. */
  address: Readonly<CRSet<CRPersonAddress>>
  /** Schema.org affiliation: An organization that this person is affiliated with. */
  affiliation: Readonly<CRSet<CRPersonOrganization>>
  /** Schema.org agentInteractionStatistic: Completed interactions for this entity. */
  agentInteractionStatistic: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org alumniOf: An organization that the person is an alumni of. */
  alumniOf: Readonly<CRSet<CRPersonOrganization>>
  /** Schema.org award: An award won by or for this item. */
  award: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org birthDate: Date of birth. */
  birthDate: SchemaOrgDate
  /** Schema.org birthPlace: The place where the person was born. */
  birthPlace: Readonly<CRSet<CRPersonPlace>>
  /** Schema.org brand: Brand associated with this person. */
  brand: Readonly<CRSet<CRPersonOrganization>>
  /** Schema.org callSign: Callsign used in broadcasting or radio communications. */
  callSign: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org children: A child of the person. */
  children: Readonly<CRSet<CRPersonRelation>>
  /** Schema.org colleague: A colleague of the person. */
  colleague: Readonly<CRSet<CRPersonRelation | SchemaOrgURL>>
  /** Schema.org contactPoint: A contact point for a person or organization. */
  contactPoint: Readonly<CRSet<CRContactPointSnapshot | CRIdReferenceValue>>
  /** Schema.org deathDate: Date of death. */
  deathDate: SchemaOrgDate
  /** Schema.org deathPlace: The place where the person died. */
  deathPlace: Readonly<CRSet<CRPersonPlace>>
  /** Schema.org duns: Dun & Bradstreet DUNS number. */
  duns: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org email: Email address. */
  email: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org familyName: Family name. */
  familyName: Readonly<CRText>
  /** Schema.org faxNumber: The fax number. */
  faxNumber: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org follows: The most generic uni-directional social relation. */
  follows: Readonly<CRSet<CRPersonRelation>>
  /** Schema.org funder: Person or organization that supports something financially. */
  funder: Readonly<CRSet<CRPersonOrOrganization>>
  /** Schema.org funding: Grant that provides funding or sponsorship. */
  funding: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org gender: Gender of something. */
  gender: Readonly<
    CRSet<
      CREnumerationSnapshot<'GenderType'> | SchemaOrgText | CRIdReferenceValue
    >
  >
  /** Schema.org givenName: Given name. */
  givenName: Readonly<CRText>
  /** Schema.org globalLocationNumber: GS1 Global Location Number. */
  globalLocationNumber: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org hasCertification: Certification information. */
  hasCertification: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasCredential: Credential awarded to the Person. */
  hasCredential: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasOccupation: The Person's occupation. */
  hasOccupation: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasOfferCatalog: OfferCatalog listing for this person. */
  hasOfferCatalog: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org hasPOS: Points-of-sale operated by the person. */
  hasPOS: Readonly<CRSet<CRPersonPlace>>
  /** Schema.org height: The height of the item. */
  height: CRPersonQuantitativeValue
  /** Schema.org homeLocation: A contact location for a person's residence. */
  homeLocation: Readonly<CRSet<CRPersonLocation>>
  /** Schema.org honorificPrefix: Honorific prefix preceding a Person's name. */
  honorificPrefix: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org honorificSuffix: Honorific suffix following a Person's name. */
  honorificSuffix: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org interactionStatistic: Interaction counter for this entity. */
  interactionStatistic: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org isicV4: ISIC Revision 4 code. */
  isicV4: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org jobTitle: The job title of the person. */
  jobTitle: Readonly<
    CRSet<CRDefinedTermSnapshot | SchemaOrgText | CRIdReferenceValue>
  >
  /** Schema.org knows: The most generic bi-directional social/work relation. */
  knows: Readonly<CRSet<CRPersonRelation>>
  /** Schema.org knowsAbout: Topic that the person knows about. */
  knowsAbout: Readonly<CRSet<CRPersonTopic>>
  /** Schema.org knowsLanguage: Language known by the person. */
  knowsLanguage: Readonly<CRSet<SchemaOrgText | CRIdReferenceValue>>
  /** Schema.org lifeEvent: A life event. */
  lifeEvent: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org makesOffer: Products or services offered by the person. */
  makesOffer: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org memberOf: Organization or membership this person belongs to. */
  memberOf: Readonly<CRSet<CRPersonOrganization>>
  /** Schema.org naics: NAICS code. */
  naics: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org nationality: Nationality of the person. */
  nationality: Readonly<CRSet<CRCountrySnapshot | CRIdReferenceValue>>
  /** Schema.org netWorth: Total financial value of the person. */
  netWorth: CRPersonQuantitativeValue
  /** Schema.org owns: Things owned by the person. */
  owns: Readonly<CRSet<CRThingSnapshot | CRIdReferenceValue>>
  /** Schema.org parent: A parent of this person. */
  parent: Readonly<CRSet<CRPersonRelation>>
  /** Schema.org performerIn: Event that this person is a performer or participant in. */
  performerIn: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org pronouns: Pronouns for a person. */
  pronouns: Readonly<CRSet<CRPersonPronouns>>
  /** Schema.org publishingPrinciples: Editorial principles document. */
  publishingPrinciples: Readonly<CRSet<CRPersonPolicy>>
  /** Schema.org relatedTo: The most generic familial relation. */
  relatedTo: Readonly<CRSet<CRPersonRelation>>
  /** Schema.org seeks: Products or services sought by the person. */
  seeks: Readonly<CRSet<CRIdReferenceValue>>
  /** Schema.org sibling: A sibling of the person. */
  sibling: Readonly<CRSet<CRPersonRelation>>
  /** Schema.org skills: Competency statement. */
  skills: Readonly<
    CRSet<CRDefinedTermSnapshot | SchemaOrgText | CRIdReferenceValue>
  >
  /** Schema.org sponsor: Person or organization that supports a thing. */
  sponsor: Readonly<CRSet<CRPersonOrOrganization>>
  /** Schema.org spouse: The person's spouse. */
  spouse: Readonly<CRSet<CRPersonRelation>>
  /** Schema.org taxID: Tax or fiscal identifier. */
  taxID: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org telephone: The telephone number. */
  telephone: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org vatID: Value-added tax identifier. */
  vatID: Readonly<CRSet<SchemaOrgText>>
  /** Schema.org weight: The weight of the person. */
  weight: CRPersonQuantitativeValue
  /** Schema.org workLocation: A contact location for a person's place of work. */
  workLocation: Readonly<CRSet<CRPersonLocation>>
  /** Schema.org worksFor: Organizations that the person works for. */
  worksFor: Readonly<CRSet<CRPersonOrganization>>
} & CRThingState<Type>
