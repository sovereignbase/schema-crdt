import type { Country } from 'schema-dts'

import type {
  CRAdministrativeAreaDefaultShape,
  CRAdministrativeAreaState,
} from '../../CRAdministrativeArea/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgCountryRaw = Extract<Country, { '@type': 'Country' }>

type SchemaOrgCountry = Partial<SchemaOrgCountryRaw>

/**
 * Serializable CRDT shape for Schema.org Country.
 *
 * Schema.org: A country.
 */
export type CRCountryDefaultShape<Type = 'Country'> =
  CRAdministrativeAreaDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Country.
 */
export type CRCountrySnapshot<Type = 'Country'> = CRStructPartialSnapshot<
  CRCountryDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgCountry, keyof CRCountrySnapshot>

type ExtraKeys = Exclude<keyof CRCountrySnapshot, keyof SchemaOrgCountry>

/**
 * Runtime CRDT state surface for Schema.org Country.
 */
export type CRCountryState<Type = 'Country'> = CRAdministrativeAreaState<Type>
