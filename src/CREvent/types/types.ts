import type { Event } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type { CRAggregateRatingSnapshot } from '../../CRAggregateRating/types/types.js'
import type { CRAudienceSnapshot } from '../../CRAudience/types/types.js'
import type { CRCreativeWorkSnapshot } from '../../CRCreativeWork/types/types.js'
import type { CRDefinedTermSnapshot } from '../../CRDefinedTerm/types/types.js'
import type { CREventAttendanceModeEnumerationSnapshot } from '../../CREventAttendanceModeEnumeration/types/types.js'
import type { CREventStatusTypeSnapshot } from '../../CREventStatusType/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CROrganizationSnapshot } from '../../CROrganization/types/types.js'
import type { CRPersonSnapshot } from '../../CRPerson/types/types.js'
import type { CRPlaceSnapshot } from '../../CRPlace/types/types.js'
import type { CRPostalAddressSnapshot } from '../../CRPostalAddress/types/types.js'
import type { CRQuantitativeValueSnapshot } from '../../CRQuantitativeValue/types/types.js'
import type { CRReviewSnapshot } from '../../CRReview/types/types.js'
import type { CRScheduleSnapshot } from '../../CRSchedule/types/types.js'
import type {
  CRThingDefaultShape,
  CRThingSnapshot,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRVirtualLocationSnapshot } from '../../CRVirtualLocation/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgBoolean,
  SchemaOrgDate,
  SchemaOrgDateTime,
  SchemaOrgDuration,
  SchemaOrgInteger,
  SchemaOrgText,
  SchemaOrgTime,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgEventRaw = Extract<Event, { '@type': 'Event' }>

type SchemaOrgEvent = Partial<SchemaOrgEventRaw>

/**
 * Values accepted by Schema.org about.
 */
export type CREventThing = CRThingSnapshot | CRIdReferenceValue

/**
 * Values accepted by Schema.org Person-valued Event properties.
 */
export type CREventPerson =
  | CRPersonSnapshot
  | CRTypedIdReferenceValue<'Person'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org Organization-valued Event properties.
 */
export type CREventOrganization =
  | CROrganizationSnapshot
  | CRTypedIdReferenceValue<'Organization'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org Person or Organization Event properties.
 */
export type CREventPersonOrOrganization = CREventPerson | CREventOrganization

/**
 * Values accepted by Schema.org actor.
 */
export type CREventActor =
  | CREventPerson
  | CRTypedIdReferenceValue<'PerformingGroup'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org duration.
 */
export type CREventDuration =
  | SchemaOrgDuration
  | CRQuantitativeValueSnapshot
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org eventAttendanceMode.
 */
export type CREventAttendanceMode =
  | CREventAttendanceModeEnumerationSnapshot
  | CRTypedIdReferenceValue<'EventAttendanceModeEnumeration'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org eventSchedule.
 */
export type CREventSchedule =
  | CRScheduleSnapshot
  | CRTypedIdReferenceValue<'Schedule'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org eventStatus.
 */
export type CREventStatus =
  | CREventStatusTypeSnapshot
  | CRTypedIdReferenceValue<'EventStatusType'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org inLanguage.
 */
export type CREventLanguage =
  | CRTypedIdReferenceValue<'Language'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org keywords.
 */
export type CREventKeywords =
  | CRDefinedTermSnapshot
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org location.
 */
export type CREventLocation =
  | CRPlaceSnapshot
  | CRPostalAddressSnapshot
  | CRVirtualLocationSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org offer-valued Event properties.
 */
export type CREventOffer =
  | CRTypedIdReferenceValue<'Demand'>
  | CRTypedIdReferenceValue<'Offer'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org Offer-only Event properties.
 */
export type CREventOfferOnly =
  | CRTypedIdReferenceValue<'Offer'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org Event reference properties.
 */
export type CREventReference =
  | CRTypedIdReferenceValue<'Event'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org review.
 */
export type CREventReview =
  | CRReviewSnapshot
  | CRTypedIdReferenceValue<'Review'>
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org Event.
 *
 * Schema.org: An event happening at a certain time and location.
 */
export type CREventDefaultShape<Type = 'Event'> = {
  /**
   * Schema.org about: The subject matter of the event.
   */
  about: CRSetSnapshot<CREventThing>
  /**
   * Schema.org actor: An actor in the event.
   */
  actor: CRSetSnapshot<CREventActor>
  /**
   * Schema.org aggregateRating: Overall rating based on reviews or ratings.
   */
  aggregateRating: CRSetSnapshot<CRAggregateRatingSnapshot | CRIdReferenceValue>
  /**
   * Schema.org attendee: A person or organization attending the event.
   */
  attendee: CRSetSnapshot<CREventPersonOrOrganization>
  /**
   * Schema.org audience: Intended audience for the event.
   */
  audience: CRSetSnapshot<CRAudienceSnapshot | CRIdReferenceValue>
  /**
   * Schema.org composer: Composer of a work performed at the event.
   */
  composer: CRSetSnapshot<CREventPersonOrOrganization>
  /**
   * Schema.org contributor: Secondary contributor to the event.
   */
  contributor: CRSetSnapshot<CREventPersonOrOrganization>
  /**
   * Schema.org director: Director of the event.
   */
  director: CRSetSnapshot<CREventPerson>
  /**
   * Schema.org doorTime: The time admission will commence.
   */
  doorTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org duration: Duration of the event.
   */
  duration: CREventDuration
  /**
   * Schema.org endDate: End date and time of the event.
   */
  endDate: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org eventAttendanceMode: Whether the event is online, offline or mixed.
   */
  eventAttendanceMode: CREventAttendanceMode
  /**
   * Schema.org eventSchedule: Schedule for a repeated event.
   */
  eventSchedule: CRSetSnapshot<CREventSchedule>
  /**
   * Schema.org eventStatus: Status of the event.
   */
  eventStatus: CREventStatus
  /**
   * Schema.org funder: Person or organization financially supporting the event.
   */
  funder: CRSetSnapshot<CREventPersonOrOrganization>
  /**
   * Schema.org funding: Grant providing funding or sponsorship.
   */
  funding: CRSetSnapshot<CRTypedIdReferenceValue<'Grant'> | CRIdReferenceValue>
  /**
   * Schema.org hasParticipationOffer: Offer to participate in the event.
   */
  hasParticipationOffer: CRSetSnapshot<CREventOfferOnly>
  /**
   * Schema.org hasSponsorshipOffer: Offer to sponsor the event.
   */
  hasSponsorshipOffer: CRSetSnapshot<CREventOfferOnly>
  /**
   * Schema.org inLanguage: Language used in the event.
   */
  inLanguage: CRSetSnapshot<CREventLanguage>
  /**
   * Schema.org isAccessibleForFree: Whether the event is accessible for free.
   */
  isAccessibleForFree: SchemaOrgBoolean
  /**
   * Schema.org keywords: Keywords or tags for the event.
   */
  keywords: CRSetSnapshot<CREventKeywords>
  /**
   * Schema.org location: The location of the event.
   */
  location: CRSetSnapshot<CREventLocation>
  /**
   * Schema.org maximumAttendeeCapacity: Total attendee capacity.
   */
  maximumAttendeeCapacity: SchemaOrgInteger
  /**
   * Schema.org maximumPhysicalAttendeeCapacity: Physical attendee capacity.
   */
  maximumPhysicalAttendeeCapacity: SchemaOrgInteger
  /**
   * Schema.org maximumVirtualAttendeeCapacity: Virtual attendee capacity.
   */
  maximumVirtualAttendeeCapacity: SchemaOrgInteger
  /**
   * Schema.org offers: Offer or demand for event participation.
   */
  offers: CRSetSnapshot<CREventOffer>
  /**
   * Schema.org organizer: Organizer of the event.
   */
  organizer: CRSetSnapshot<CREventPersonOrOrganization>
  /**
   * Schema.org performer: Performer at the event.
   */
  performer: CRSetSnapshot<CREventPersonOrOrganization>
  /**
   * Schema.org previousStartDate: Previous start date for rescheduled events.
   */
  previousStartDate: CRSetSnapshot<SchemaOrgDate | SchemaOrgDateTime>
  /**
   * Schema.org recordedIn: CreativeWork that captured the event.
   */
  recordedIn: CRSetSnapshot<CRCreativeWorkSnapshot | CRIdReferenceValue>
  /**
   * Schema.org remainingAttendeeCapacity: Remaining unallocated capacity.
   */
  remainingAttendeeCapacity: SchemaOrgInteger
  /**
   * Schema.org review: A review of the event.
   */
  review: CRSetSnapshot<CREventReview>
  /**
   * Schema.org sponsor: Sponsor of the event.
   */
  sponsor: CRSetSnapshot<CREventPersonOrOrganization>
  /**
   * Schema.org startDate: Start date and time of the event.
   */
  startDate: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org subEvent: Event that is part of this event.
   */
  subEvent: CRSetSnapshot<CREventReference>
  /**
   * Schema.org superEvent: Event that this event is part of.
   */
  superEvent: CRSetSnapshot<CREventReference>
  /**
   * Schema.org translator: Translator during the event.
   */
  translator: CRSetSnapshot<CREventPersonOrOrganization>
  /**
   * Schema.org typicalAgeRange: Typical expected age range.
   */
  typicalAgeRange: CRTextSnapshot
  /**
   * Schema.org workFeatured: CreativeWork featured in the event.
   */
  workFeatured: CRSetSnapshot<CRCreativeWorkSnapshot | CRIdReferenceValue>
  /**
   * Schema.org workPerformed: CreativeWork performed in the event.
   */
  workPerformed: CRSetSnapshot<CRCreativeWorkSnapshot | CRIdReferenceValue>
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Event.
 */
export type CREventSnapshot<Type = 'Event'> = CRStructPartialSnapshot<
  CREventDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org Event properties:
 * attendees, performers, subEvents.
 */
type MissingKeys = Exclude<keyof SchemaOrgEvent, keyof CREventSnapshot>

type ExtraKeys = Exclude<keyof CREventSnapshot, keyof SchemaOrgEvent>

/**
 * Runtime CRDT state surface for Schema.org Event.
 */
export type CREventState<Type = 'Event'> = {
  about: Readonly<CRSet<CREventThing>>
  actor: Readonly<CRSet<CREventActor>>
  aggregateRating: Readonly<
    CRSet<CRAggregateRatingSnapshot | CRIdReferenceValue>
  >
  attendee: Readonly<CRSet<CREventPersonOrOrganization>>
  audience: Readonly<CRSet<CRAudienceSnapshot | CRIdReferenceValue>>
  composer: Readonly<CRSet<CREventPersonOrOrganization>>
  contributor: Readonly<CRSet<CREventPersonOrOrganization>>
  director: Readonly<CRSet<CREventPerson>>
  doorTime: SchemaOrgDateTime | SchemaOrgTime
  duration: CREventDuration
  endDate: SchemaOrgDate | SchemaOrgDateTime
  eventAttendanceMode: CREventAttendanceMode
  eventSchedule: Readonly<CRSet<CREventSchedule>>
  eventStatus: CREventStatus
  funder: Readonly<CRSet<CREventPersonOrOrganization>>
  funding: Readonly<
    CRSet<CRTypedIdReferenceValue<'Grant'> | CRIdReferenceValue>
  >
  hasParticipationOffer: Readonly<CRSet<CREventOfferOnly>>
  hasSponsorshipOffer: Readonly<CRSet<CREventOfferOnly>>
  inLanguage: Readonly<CRSet<CREventLanguage>>
  isAccessibleForFree: SchemaOrgBoolean
  keywords: Readonly<CRSet<CREventKeywords>>
  location: Readonly<CRSet<CREventLocation>>
  maximumAttendeeCapacity: SchemaOrgInteger
  maximumPhysicalAttendeeCapacity: SchemaOrgInteger
  maximumVirtualAttendeeCapacity: SchemaOrgInteger
  offers: Readonly<CRSet<CREventOffer>>
  organizer: Readonly<CRSet<CREventPersonOrOrganization>>
  performer: Readonly<CRSet<CREventPersonOrOrganization>>
  previousStartDate: Readonly<CRSet<SchemaOrgDate | SchemaOrgDateTime>>
  recordedIn: Readonly<CRSet<CRCreativeWorkSnapshot | CRIdReferenceValue>>
  remainingAttendeeCapacity: SchemaOrgInteger
  review: Readonly<CRSet<CREventReview>>
  sponsor: Readonly<CRSet<CREventPersonOrOrganization>>
  startDate: SchemaOrgDate | SchemaOrgDateTime
  subEvent: Readonly<CRSet<CREventReference>>
  superEvent: Readonly<CRSet<CREventReference>>
  translator: Readonly<CRSet<CREventPersonOrOrganization>>
  typicalAgeRange: Readonly<CRText>
  workFeatured: Readonly<CRSet<CRCreativeWorkSnapshot | CRIdReferenceValue>>
  workPerformed: Readonly<CRSet<CRCreativeWorkSnapshot | CRIdReferenceValue>>
} & CRThingState<Type>
