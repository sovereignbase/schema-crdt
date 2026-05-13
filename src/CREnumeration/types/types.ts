import type { Enumeration } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgEnumerationRaw = Extract<Enumeration, { '@type': 'Enumeration' }>

type SchemaOrgEnumeration = Partial<SchemaOrgEnumerationRaw>

/**
 * Values accepted by Schema.org supersededBy.
 */
export type CREnumerationSupersededBy =
  | CRTypedIdReferenceValue<'Enumeration'>
  | CRTypedIdReferenceValue<'Class'>
  | CRTypedIdReferenceValue<'Property'>
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
} & CRIntangibleDefaultShape<Type>

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
} & CRIntangibleState<Type>
