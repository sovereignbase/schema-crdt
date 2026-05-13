import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type { CRScheduleDefaultShape, CRScheduleState } from './types/types.js'

/**
 * CRDT-backed Schema.org Schedule.
 *
 * Schema.org: A repeating time period used to describe a regularly occurring
 * Event.
 */
export class CRSchedule<
  Type = 'Schedule',
  Shape extends CRScheduleDefaultShape<Type> = CRScheduleDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRScheduleState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public byDay: CRScheduleState<Type>['byDay']
  declare public byMonth: CRScheduleState<Type>['byMonth']
  declare public byMonthDay: CRScheduleState<Type>['byMonthDay']
  declare public byMonthWeek: CRScheduleState<Type>['byMonthWeek']
  declare public duration: CRScheduleState<Type>['duration']
  declare public endDate: CRScheduleState<Type>['endDate']
  declare public endTime: CRScheduleState<Type>['endTime']
  declare public exceptDate: CRScheduleState<Type>['exceptDate']
  declare public repeatCount: CRScheduleState<Type>['repeatCount']
  declare public repeatFrequency: CRScheduleState<Type>['repeatFrequency']
  declare public scheduleTimezone: CRScheduleState<Type>['scheduleTimezone']
  declare public startDate: CRScheduleState<Type>['startDate']
  declare public startTime: CRScheduleState<Type>['startTime']

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
        '@type': 'Schedule' as Type,
        byDay: crSetSnapshot,
        byMonth: crSetSnapshot,
        byMonthDay: crSetSnapshot,
        byMonthWeek: crSetSnapshot,
        duration: '',
        endDate: '',
        endTime: '',
        exceptDate: crSetSnapshot,
        repeatCount: 0,
        repeatFrequency: '',
        scheduleTimezone: '',
        startDate: '',
        startTime: '',
        ...defaultShape,
      } as Partial<Shape>,
      {
        byDay: 'set',
        byMonth: 'set',
        byMonthDay: 'set',
        byMonthWeek: 'set',
        exceptDate: 'set',
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
