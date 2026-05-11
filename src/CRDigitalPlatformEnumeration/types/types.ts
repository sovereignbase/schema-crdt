import type { DigitalPlatformEnumeration } from 'schema-dts'

import type {
  CREnumerationDefaultShape,
  CREnumerationState,
} from '../../CREnumeration/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgDigitalPlatformEnumerationRaw = Extract<
  DigitalPlatformEnumeration,
  { '@type': 'DigitalPlatformEnumeration' }
>

type SchemaOrgDigitalPlatformEnumeration =
  Partial<SchemaOrgDigitalPlatformEnumerationRaw>

/**
 * Serializable CRDT shape for Schema.org DigitalPlatformEnumeration.
 *
 * Schema.org: Enumerates common technology platforms for properties such as
 * actionPlatform.
 */
export type CRDigitalPlatformEnumerationDefaultShape<
  Type = 'DigitalPlatformEnumeration',
> = CREnumerationDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org DigitalPlatformEnumeration.
 */
export type CRDigitalPlatformEnumerationSnapshot<
  Type = 'DigitalPlatformEnumeration',
> = CRStructPartialSnapshot<
  CRDigitalPlatformEnumerationDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<
  keyof SchemaOrgDigitalPlatformEnumeration,
  keyof CRDigitalPlatformEnumerationSnapshot
>

type ExtraKeys = Exclude<
  keyof CRDigitalPlatformEnumerationSnapshot,
  keyof SchemaOrgDigitalPlatformEnumeration
>

/**
 * Runtime CRDT state surface for Schema.org DigitalPlatformEnumeration.
 */
export type CRDigitalPlatformEnumerationState<
  Type = 'DigitalPlatformEnumeration',
> = CREnumerationState<Type>
