import type { LocationFeatureSpecification } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type { CROpeningHoursSpecificationSnapshot } from '../../CROpeningHoursSpecification/types/types.js'
import type {
  CRPropertyValueDefaultShape,
  CRPropertyValueState,
} from '../../CRPropertyValue/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgDate,
  SchemaOrgDateTime,
} from '../../.types/types.js'

type SchemaOrgLocationFeatureSpecificationRaw = Extract<
  LocationFeatureSpecification,
  { '@type': 'LocationFeatureSpecification' }
>

type SchemaOrgLocationFeatureSpecification =
  Partial<SchemaOrgLocationFeatureSpecificationRaw>

export type CRLocationFeatureSpecificationHoursAvailable =
  | CROpeningHoursSpecificationSnapshot
  | CRIdReferenceValue

export type CRLocationFeatureSpecificationDefaultShape<
  Type = 'LocationFeatureSpecification',
> = {
  hoursAvailable: CRSetSnapshot<CRLocationFeatureSpecificationHoursAvailable>
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  validThrough: SchemaOrgDate | SchemaOrgDateTime
} & CRPropertyValueDefaultShape<Type>

export type CRLocationFeatureSpecificationSnapshot<
  Type = 'LocationFeatureSpecification',
> = CRStructPartialSnapshot<
  CRLocationFeatureSpecificationDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<
  keyof SchemaOrgLocationFeatureSpecification,
  keyof CRLocationFeatureSpecificationSnapshot
>

type ExtraKeys = Exclude<
  keyof CRLocationFeatureSpecificationSnapshot,
  keyof SchemaOrgLocationFeatureSpecification
>

export type CRLocationFeatureSpecificationState<
  Type = 'LocationFeatureSpecification',
> = {
  hoursAvailable: Readonly<CRSet<CRLocationFeatureSpecificationHoursAvailable>>
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  validThrough: SchemaOrgDate | SchemaOrgDateTime
} & CRPropertyValueState<Type>
