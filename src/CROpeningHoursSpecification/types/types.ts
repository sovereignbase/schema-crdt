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

export type CROpeningHoursSpecificationDayOfWeek =
  | CREnumerationSnapshot<'DayOfWeek'>
  | CRIdReferenceValue
  | SchemaOrgText

export type CROpeningHoursSpecificationDefaultShape<
  Type = 'OpeningHoursSpecification',
> = {
  closes: SchemaOrgTime
  dayOfWeek: CRSetSnapshot<CROpeningHoursSpecificationDayOfWeek>
  opens: SchemaOrgTime
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  validThrough: SchemaOrgDate | SchemaOrgDateTime
} & CRStructuredValueDefaultShape<Type>

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

export type CROpeningHoursSpecificationState<
  Type = 'OpeningHoursSpecification',
> = {
  closes: SchemaOrgTime
  dayOfWeek: Readonly<CRSet<CROpeningHoursSpecificationDayOfWeek>>
  opens: SchemaOrgTime
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  validThrough: SchemaOrgDate | SchemaOrgDateTime
} & CRStructuredValueState<Type>
