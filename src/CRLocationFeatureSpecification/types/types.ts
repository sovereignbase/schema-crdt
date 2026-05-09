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

/**
 * Values accepted by Schema.org hoursAvailable.
 */
export type CRLocationFeatureSpecificationHoursAvailable =
  | CROpeningHoursSpecificationSnapshot
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org LocationFeatureSpecification.
 *
 * Schema.org: A structured property-value pair describing a location feature
 * of an accommodation.
 */
export type CRLocationFeatureSpecificationDefaultShape<
  Type = 'LocationFeatureSpecification',
> = {
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  hoursAvailable: CRSetSnapshot<CRLocationFeatureSpecificationHoursAvailable>
  /**
   * Schema.org validFrom: The date when the item becomes valid.
   */
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org validThrough: The date after when the item is not valid.
   */
  validThrough: SchemaOrgDate | SchemaOrgDateTime
} & CRPropertyValueDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org LocationFeatureSpecification.
 */
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

/**
 * Runtime CRDT state surface for Schema.org LocationFeatureSpecification.
 */
export type CRLocationFeatureSpecificationState<
  Type = 'LocationFeatureSpecification',
> = {
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  hoursAvailable: Readonly<CRSet<CRLocationFeatureSpecificationHoursAvailable>>
  /**
   * Schema.org validFrom: The date when the item becomes valid.
   */
  validFrom: SchemaOrgDate | SchemaOrgDateTime
  /**
   * Schema.org validThrough: The date after when the item is not valid.
   */
  validThrough: SchemaOrgDate | SchemaOrgDateTime
} & CRPropertyValueState<Type>
