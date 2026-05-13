import type { DefinedTermSet } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRDefinedTermSnapshot } from '../../CRDefinedTerm/types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgDefinedTermSetRaw = Extract<
  DefinedTermSet,
  { '@type': 'DefinedTermSet' }
>

type SchemaOrgDefinedTermSet = Partial<SchemaOrgDefinedTermSetRaw>

/**
 * Values accepted by Schema.org hasDefinedTerm.
 */
export type CRDefinedTermSetDefinedTerm =
  | CRDefinedTermSnapshot
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org DefinedTermSet.
 *
 * Schema.org: A set of defined terms, such as categories, a classification
 * scheme, a glossary, dictionary or enumeration.
 */
export type CRDefinedTermSetDefaultShape<Type = 'DefinedTermSet'> = {
  /**
   * Schema.org hasDefinedTerm: A DefinedTerm contained in this term set.
   */
  hasDefinedTerm: CRSetSnapshot<CRDefinedTermSetDefinedTerm>
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org DefinedTermSet.
 */
export type CRDefinedTermSetSnapshot<Type = 'DefinedTermSet'> =
  CRStructPartialSnapshot<
    CRDefinedTermSetDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

/**
 * Intentionally omitted deprecated Schema.org DefinedTermSet properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews.
 */
type MissingKeys = Exclude<
  keyof SchemaOrgDefinedTermSet,
  keyof CRDefinedTermSetSnapshot
>

type ExtraKeys = Exclude<
  keyof CRDefinedTermSetSnapshot,
  keyof SchemaOrgDefinedTermSet
>

/**
 * Runtime CRDT state surface for Schema.org DefinedTermSet.
 */
export type CRDefinedTermSetState<Type = 'DefinedTermSet'> = {
  /**
   * Schema.org hasDefinedTerm: A DefinedTerm contained in this term set.
   */
  hasDefinedTerm: Readonly<CRSet<CRDefinedTermSetDefinedTerm>>
} & CRCreativeWorkState<Type>
