import type { OpeningHoursSpecification } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type { CREnumerationSnapshot } from '../../CREnumeration/types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgDate,
  SchemaOrgDateTime,
  SchemaOrgText,
  SchemaOrgTime,
} from '../../.types/types.js'

type SchemaOrgOpeningHoursSpecificationRaw = Extract<
  OpeningHoursSpecification,
  { '@type': 'OpeningHoursSpecification' }
>

type SchemaOrgOpeningHoursSpecification =
  Partial<SchemaOrgOpeningHoursSpecificationRaw>

/**
 * Values accepted by Schema.org dayOfWeek.
 */
export type CROpeningHoursSpecificationDayOfWeek =
  | CREnumerationSnapshot<'DayOfWeek'>
  | CRIdReferenceValue
  | SchemaOrgText

/**
 * Serializable CRDT shape for Schema.org OpeningHoursSpecification.
 *
 * Schema.org: Structured information about the opening hours of a place or a
 * service inside a place.
 */
export type CROpeningHoursSpecificationDefaultShape<
  Type = 'OpeningHoursSpecification',
> = {
  /**
   * Schema.org closes: The closing hour of the place or service on the given
   * day(s) of the week.
   */
  closes: SchemaOrgTime
  /**
   * Schema.org dayOfWeek: The day of the week for which these opening hours
   * are valid.
   */
  dayOfWeek: CRSetSnapshot<CROpeningHoursSpecificationDayOfWeek>
  /**
   * Schema.org opens: The opening hour of the place or service on the given
   * day(s) of the week.
   */
  opens: SchemaOrgTime
  /**
   * Schema.org validFrom: The date when the item becomes valid.
   */
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org validThrough: The date after when the item is not valid.
   */
  validThrough: SchemaOrgDate | SchemaOrgDateTime
} & CRStructuredValueDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org OpeningHoursSpecification.
 */
export type CROpeningHoursSpecificationSnapshot<
  Type = 'OpeningHoursSpecification',
> = CRStructPartialSnapshot<
  CROpeningHoursSpecificationDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<
  keyof SchemaOrgOpeningHoursSpecification,
  keyof CROpeningHoursSpecificationSnapshot
>

type ExtraKeys = Exclude<
  keyof CROpeningHoursSpecificationSnapshot,
  keyof SchemaOrgOpeningHoursSpecification
>

/**
 * Runtime CRDT state surface for Schema.org OpeningHoursSpecification.
 */
export type CROpeningHoursSpecificationState<
  Type = 'OpeningHoursSpecification',
> = {
  /**
   * Schema.org closes: The closing hour of the place or service on the given
   * day(s) of the week.
   */
  closes: SchemaOrgTime
  /**
   * Schema.org dayOfWeek: The day of the week for which these opening hours
   * are valid.
   */
  dayOfWeek: Readonly<CRSet<CROpeningHoursSpecificationDayOfWeek>>
  /**
   * Schema.org opens: The opening hour of the place or service on the given
   * day(s) of the week.
   */
  opens: SchemaOrgTime
  /**
   * Schema.org validFrom: The date when the item becomes valid.
   */
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org validThrough: The date after when the item is not valid.
   */
  validThrough: SchemaOrgDate | SchemaOrgDateTime
} & CRStructuredValueState<Type>
