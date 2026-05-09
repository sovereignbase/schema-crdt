import type { Class, Enumeration, Property } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgEnumerationRaw = Extract<Enumeration, { '@type': 'Enumeration' }>

type SchemaOrgEnumeration = Partial<SchemaOrgEnumerationRaw>

/**
 * Values accepted by Schema.org supersededBy.
 */
export type CREnumerationSupersededBy =
  | Class
  | Enumeration
  | Property
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org Enumeration.
 *
 * Schema.org: Lists or enumerations.
 */
export type CREnumerationDefaultShape<Type = 'Enumeration'> = {
  /**
   * Schema.org supersededBy: Relates a term to one that supersedes it.
   */
  supersededBy: CRSetSnapshot<CREnumerationSupersededBy>
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Enumeration.
 */
export type CREnumerationSnapshot<Type = 'Enumeration'> =
  CRStructPartialSnapshot<
    CREnumerationDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgEnumeration,
  keyof CREnumerationSnapshot
>

type ExtraKeys = Exclude<
  keyof CREnumerationSnapshot,
  keyof SchemaOrgEnumeration
>

/**
 * Runtime CRDT state surface for Schema.org Enumeration.
 */
export type CREnumerationState<Type = 'Enumeration'> = {
  /**
   * Schema.org supersededBy: Relates a term to one that supersedes it.
   */
  supersededBy: Readonly<CRSet<CREnumerationSupersededBy>>
} & CRThingState<Type>
