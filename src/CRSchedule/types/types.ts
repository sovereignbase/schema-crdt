import type { Schedule } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type { CRQuantitativeValueSnapshot } from '../../CRQuantitativeValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgDate,
  SchemaOrgDateTime,
  SchemaOrgDuration,
  SchemaOrgInteger,
  SchemaOrgText,
  SchemaOrgTime,
} from '../../.types/types.js'

type SchemaOrgScheduleRaw = Extract<Schedule, { '@type': 'Schedule' }>

type SchemaOrgSchedule = Partial<SchemaOrgScheduleRaw>

/**
 * Values accepted by Schema.org byDay.
 */
export type CRScheduleByDay =
  | CRTypedIdReferenceValue<'DayOfWeek'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org duration.
 */
export type CRScheduleDuration =
  | SchemaOrgDuration
  | CRQuantitativeValueSnapshot
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org repeatFrequency.
 */
export type CRScheduleRepeatFrequency = SchemaOrgDuration | SchemaOrgText

/**
 * Serializable CRDT shape for Schema.org Schedule.
 *
 * Schema.org: A repeating time period used to describe a regularly occurring
 * Event.
 */
export type CRScheduleDefaultShape<Type = 'Schedule'> = {
  /**
   * Schema.org byDay: Day or iCal byDay recurrence rule fragment.
   */
  byDay: CRSetSnapshot<CRScheduleByDay>
  /**
   * Schema.org byMonth: Month numbers on which a recurring event takes place.
   */
  byMonth: CRSetSnapshot<SchemaOrgInteger>
  /**
   * Schema.org byMonthDay: Month-day numbers for recurring events.
   */
  byMonthDay: CRSetSnapshot<SchemaOrgInteger>
  /**
   * Schema.org byMonthWeek: Week numbers in the month for recurring events.
   */
  byMonthWeek: CRSetSnapshot<SchemaOrgInteger>
  /**
   * Schema.org duration: Duration of each scheduled occurrence.
   */
  duration: CRScheduleDuration
  /**
   * Schema.org endDate: Date or date-time when the schedule stops applying.
   */
  endDate: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org endTime: Time or date-time when each occurrence ends.
   */
  endTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org exceptDate: Date or date-time excluded from the schedule.
   */
  exceptDate: CRSetSnapshot<SchemaOrgDate | SchemaOrgDateTime>
  /**
   * Schema.org repeatCount: Number of times a recurring event takes place.
   */
  repeatCount: SchemaOrgInteger
  /**
   * Schema.org repeatFrequency: Frequency at which events occur.
   */
  repeatFrequency: CRScheduleRepeatFrequency
  /**
   * Schema.org scheduleTimezone: IANA timezone for schedule times.
   */
  scheduleTimezone: SchemaOrgText
  /**
   * Schema.org startDate: Date or date-time when the schedule starts applying.
   */
  startDate: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org startTime: Time or date-time when each occurrence starts.
   */
  startTime: SchemaOrgDateTime | SchemaOrgTime
} & CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Schedule.
 */
export type CRScheduleSnapshot<Type = 'Schedule'> = CRStructPartialSnapshot<
  CRScheduleDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgSchedule, keyof CRScheduleSnapshot>

type ExtraKeys = Exclude<keyof CRScheduleSnapshot, keyof SchemaOrgSchedule>

/**
 * Runtime CRDT state surface for Schema.org Schedule.
 */
export type CRScheduleState<Type = 'Schedule'> = {
  /**
   * Schema.org byDay: Day or iCal byDay recurrence rule fragment.
   */
  byDay: Readonly<CRSet<CRScheduleByDay>>
  /**
   * Schema.org byMonth: Month numbers on which a recurring event takes place.
   */
  byMonth: Readonly<CRSet<SchemaOrgInteger>>
  /**
   * Schema.org byMonthDay: Month-day numbers for recurring events.
   */
  byMonthDay: Readonly<CRSet<SchemaOrgInteger>>
  /**
   * Schema.org byMonthWeek: Week numbers in the month for recurring events.
   */
  byMonthWeek: Readonly<CRSet<SchemaOrgInteger>>
  /**
   * Schema.org duration: Duration of each scheduled occurrence.
   */
  duration: CRScheduleDuration
  /**
   * Schema.org endDate: Date or date-time when the schedule stops applying.
   */
  endDate: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org endTime: Time or date-time when each occurrence ends.
   */
  endTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org exceptDate: Date or date-time excluded from the schedule.
   */
  exceptDate: Readonly<CRSet<SchemaOrgDate | SchemaOrgDateTime>>
  /**
   * Schema.org repeatCount: Number of times a recurring event takes place.
   */
  repeatCount: SchemaOrgInteger
  /**
   * Schema.org repeatFrequency: Frequency at which events occur.
   */
  repeatFrequency: CRScheduleRepeatFrequency
  /**
   * Schema.org scheduleTimezone: IANA timezone for schedule times.
   */
  scheduleTimezone: SchemaOrgText
  /**
   * Schema.org startDate: Date or date-time when the schedule starts applying.
   */
  startDate: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org startTime: Time or date-time when each occurrence starts.
   */
  startTime: SchemaOrgDateTime | SchemaOrgTime
} & CRIntangibleState<Type>
