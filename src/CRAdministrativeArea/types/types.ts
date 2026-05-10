import type { AdministrativeArea } from 'schema-dts'

import type {
  CRPlaceDefaultShape,
  CRPlaceState,
} from '../../CRPlace/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgAdministrativeAreaRaw = Extract<
  AdministrativeArea,
  { '@type': 'AdministrativeArea' }
>

type SchemaOrgAdministrativeArea = Partial<SchemaOrgAdministrativeAreaRaw>

/**
 * Serializable CRDT shape for Schema.org AdministrativeArea.
 *
 * Schema.org: A geographical region, typically under the jurisdiction of a
 * particular government.
 */
export type CRAdministrativeAreaDefaultShape<Type = 'AdministrativeArea'> =
  CRPlaceDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org AdministrativeArea.
 */
export type CRAdministrativeAreaSnapshot<Type = 'AdministrativeArea'> =
  CRStructPartialSnapshot<
    CRAdministrativeAreaDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgAdministrativeArea,
  keyof CRAdministrativeAreaSnapshot
>

type ExtraKeys = Exclude<
  keyof CRAdministrativeAreaSnapshot,
  keyof SchemaOrgAdministrativeArea
>

/**
 * Runtime CRDT state surface for Schema.org AdministrativeArea.
 */
export type CRAdministrativeAreaState<Type = 'AdministrativeArea'> =
  CRPlaceState<Type>
