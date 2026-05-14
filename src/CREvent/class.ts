import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { crIdReferenceValue, crSetSnapshot } from '../.shared/index.js'

import type { CREventDefaultShape, CREventState } from './types/types.js'

/**
 * CRDT-backed Schema.org Event.
 *
 * Schema.org: An event happening at a certain time and location.
 */
export class CREvent<
  Type = 'Event',
  Shape extends CREventDefaultShape<Type> = CREventDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CREventState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public about: CREventState<Type>['about']
  declare public actor: CREventState<Type>['actor']
  declare public aggregateRating: CREventState<Type>['aggregateRating']
  declare public attendee: CREventState<Type>['attendee']
  declare public audience: CREventState<Type>['audience']
  declare public composer: CREventState<Type>['composer']
  declare public contributor: CREventState<Type>['contributor']
  declare public director: CREventState<Type>['director']
  declare public doorTime: CREventState<Type>['doorTime']
  declare public duration: CREventState<Type>['duration']
  declare public endDate: CREventState<Type>['endDate']
  declare public eventAttendanceMode: CREventState<Type>['eventAttendanceMode']
  declare public eventSchedule: CREventState<Type>['eventSchedule']
  declare public eventStatus: CREventState<Type>['eventStatus']
  declare public funder: CREventState<Type>['funder']
  declare public funding: CREventState<Type>['funding']
  declare public hasParticipationOffer: CREventState<Type>['hasParticipationOffer']
  declare public hasSponsorshipOffer: CREventState<Type>['hasSponsorshipOffer']
  declare public inLanguage: CREventState<Type>['inLanguage']
  declare public isAccessibleForFree: CREventState<Type>['isAccessibleForFree']
  declare public keywords: CREventState<Type>['keywords']
  declare public location: CREventState<Type>['location']
  declare public maximumAttendeeCapacity: CREventState<Type>['maximumAttendeeCapacity']
  declare public maximumPhysicalAttendeeCapacity: CREventState<Type>['maximumPhysicalAttendeeCapacity']
  declare public maximumVirtualAttendeeCapacity: CREventState<Type>['maximumVirtualAttendeeCapacity']
  declare public offers: CREventState<Type>['offers']
  declare public organizer: CREventState<Type>['organizer']
  declare public performer: CREventState<Type>['performer']
  declare public previousStartDate: CREventState<Type>['previousStartDate']
  declare public recordedIn: CREventState<Type>['recordedIn']
  declare public remainingAttendeeCapacity: CREventState<Type>['remainingAttendeeCapacity']
  declare public review: CREventState<Type>['review']
  declare public sponsor: CREventState<Type>['sponsor']
  declare public startDate: CREventState<Type>['startDate']
  declare public subEvent: CREventState<Type>['subEvent']
  declare public superEvent: CREventState<Type>['superEvent']
  declare public translator: CREventState<Type>['translator']
  declare public typicalAgeRange: CREventState<Type>['typicalAgeRange']
  declare public workFeatured: CREventState<Type>['workFeatured']
  declare public workPerformed: CREventState<Type>['workPerformed']

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
        '@type': 'Event' as Type,
        about: crSetSnapshot,
        actor: crSetSnapshot,
        aggregateRating: crSetSnapshot,
        attendee: crSetSnapshot,
        audience: crSetSnapshot,
        composer: crSetSnapshot,
        contributor: crSetSnapshot,
        director: crSetSnapshot,
        doorTime: '',
        duration: '',
        endDate: '',
        eventAttendanceMode: crIdReferenceValue,
        eventSchedule: crSetSnapshot,
        eventStatus: crIdReferenceValue,
        funder: crSetSnapshot,
        funding: crSetSnapshot,
        hasParticipationOffer: crSetSnapshot,
        hasSponsorshipOffer: crSetSnapshot,
        inLanguage: crSetSnapshot,
        isAccessibleForFree: false,
        keywords: crSetSnapshot,
        location: crSetSnapshot,
        maximumAttendeeCapacity: 0,
        maximumPhysicalAttendeeCapacity: 0,
        maximumVirtualAttendeeCapacity: 0,
        offers: crSetSnapshot,
        organizer: crSetSnapshot,
        performer: crSetSnapshot,
        previousStartDate: crSetSnapshot,
        recordedIn: crSetSnapshot,
        remainingAttendeeCapacity: 0,
        review: crSetSnapshot,
        sponsor: crSetSnapshot,
        startDate: '',
        subEvent: crSetSnapshot,
        superEvent: crSetSnapshot,
        translator: crSetSnapshot,
        typicalAgeRange: '',
        workFeatured: crSetSnapshot,
        workPerformed: crSetSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        about: 'set',
        actor: 'set',
        aggregateRating: 'set',
        attendee: 'set',
        audience: 'set',
        composer: 'set',
        contributor: 'set',
        director: 'set',
        eventSchedule: 'set',
        funder: 'set',
        funding: 'set',
        hasParticipationOffer: 'set',
        hasSponsorshipOffer: 'set',
        inLanguage: 'set',
        keywords: 'set',
        location: 'set',
        offers: 'set',
        organizer: 'set',
        performer: 'set',
        previousStartDate: 'set',
        recordedIn: 'set',
        review: 'set',
        sponsor: 'set',
        subEvent: 'set',
        superEvent: 'set',
        translator: 'set',
        workFeatured: 'set',
        workPerformed: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >,
      {
        duration:
          /^P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$/,
      } as Partial<Record<Extract<keyof Shape, string>, RegExp>>
    )
  }
}

export * from './types/types.js'
