import type { Audience } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type { CRAdministrativeAreaSnapshot } from '../../CRAdministrativeArea/types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgAudienceRaw = Extract<Audience, { '@type': 'Audience' }>

type SchemaOrgAudience = Partial<SchemaOrgAudienceRaw>

/**
 * Values accepted by Schema.org geographicArea.
 */
export type CRAudienceGeographicArea =
  | CRAdministrativeAreaSnapshot
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org Audience.
 *
 * Schema.org: Intended audience for an item, such as a group for whom
 * something was created.
 */
export type CRAudienceDefaultShape<Type = 'Audience'> = {
  /**
   * Schema.org audienceType: The target group associated with a given audience.
   */
  audienceType: SchemaOrgText
  /**
   * Schema.org geographicArea: The geographic area associated with the audience.
   */
  geographicArea: CRSetSnapshot<CRAudienceGeographicArea>
} & CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Audience.
 */
export type CRAudienceSnapshot<Type = 'Audience'> = CRStructPartialSnapshot<
  CRAudienceDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgAudience, keyof CRAudienceSnapshot>

type ExtraKeys = Exclude<keyof CRAudienceSnapshot, keyof SchemaOrgAudience>

/**
 * Runtime CRDT state surface for Schema.org Audience.
 */
export type CRAudienceState<Type = 'Audience'> = {
  /**
   * Schema.org audienceType: The target group associated with a given audience.
   */
  audienceType: SchemaOrgText
  /**
   * Schema.org geographicArea: The geographic area associated with the audience.
   */
  geographicArea: Readonly<CRSet<CRAudienceGeographicArea>>
} & CRIntangibleState<Type>
