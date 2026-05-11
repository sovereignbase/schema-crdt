import type { Specialty } from 'schema-dts'

import type {
  CREnumerationDefaultShape,
  CREnumerationState,
} from '../../CREnumeration/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgSpecialtyRaw = Extract<Specialty, { '@type': 'Specialty' }>

type SchemaOrgSpecialty = Partial<SchemaOrgSpecialtyRaw>

/**
 * Serializable CRDT shape for Schema.org Specialty.
 *
 * Schema.org: A branch of a field in which people develop specific expertise.
 */
export type CRSpecialtyDefaultShape<Type = 'Specialty'> =
  CREnumerationDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Specialty.
 */
export type CRSpecialtySnapshot<Type = 'Specialty'> = CRStructPartialSnapshot<
  CRSpecialtyDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgSpecialty, keyof CRSpecialtySnapshot>

type ExtraKeys = Exclude<keyof CRSpecialtySnapshot, keyof SchemaOrgSpecialty>

/**
 * Runtime CRDT state surface for Schema.org Specialty.
 */
export type CRSpecialtyState<Type = 'Specialty'> = CREnumerationState<Type>
