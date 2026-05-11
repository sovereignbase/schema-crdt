import type { VirtualLocation } from 'schema-dts'

import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgVirtualLocationRaw = Extract<
  VirtualLocation,
  { '@type': 'VirtualLocation' }
>

type SchemaOrgVirtualLocation = Partial<SchemaOrgVirtualLocationRaw>

/**
 * Serializable CRDT shape for Schema.org VirtualLocation.
 *
 * Schema.org: An online or virtual location for attending events or actions.
 */
export type CRVirtualLocationDefaultShape<Type = 'VirtualLocation'> =
  CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org VirtualLocation.
 */
export type CRVirtualLocationSnapshot<Type = 'VirtualLocation'> =
  CRStructPartialSnapshot<
    CRVirtualLocationDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgVirtualLocation,
  keyof CRVirtualLocationSnapshot
>

type ExtraKeys = Exclude<
  keyof CRVirtualLocationSnapshot,
  keyof SchemaOrgVirtualLocation
>

/**
 * Runtime CRDT state surface for Schema.org VirtualLocation.
 */
export type CRVirtualLocationState<Type = 'VirtualLocation'> =
  CRThingState<Type>
