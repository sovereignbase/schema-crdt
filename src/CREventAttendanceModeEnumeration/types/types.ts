import type { EventAttendanceModeEnumeration } from 'schema-dts'

import type {
  CREnumerationDefaultShape,
  CREnumerationState,
} from '../../CREnumeration/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgEventAttendanceModeEnumerationRaw = Extract<
  EventAttendanceModeEnumeration,
  { '@type': 'EventAttendanceModeEnumeration' }
>

type SchemaOrgEventAttendanceModeEnumeration =
  Partial<SchemaOrgEventAttendanceModeEnumerationRaw>

/**
 * Serializable CRDT shape for Schema.org EventAttendanceModeEnumeration.
 *
 * Schema.org: Values for whether an event is online, offline, or mixed.
 */
export type CREventAttendanceModeEnumerationDefaultShape<
  Type = 'EventAttendanceModeEnumeration',
> = CREnumerationDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org EventAttendanceModeEnumeration.
 */
export type CREventAttendanceModeEnumerationSnapshot<
  Type = 'EventAttendanceModeEnumeration',
> = CRStructPartialSnapshot<
  CREventAttendanceModeEnumerationDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<
  keyof SchemaOrgEventAttendanceModeEnumeration,
  keyof CREventAttendanceModeEnumerationSnapshot
>

type ExtraKeys = Exclude<
  keyof CREventAttendanceModeEnumerationSnapshot,
  keyof SchemaOrgEventAttendanceModeEnumeration
>

/**
 * Runtime CRDT state surface for Schema.org EventAttendanceModeEnumeration.
 */
export type CREventAttendanceModeEnumerationState<
  Type = 'EventAttendanceModeEnumeration',
> = CREnumerationState<Type>
