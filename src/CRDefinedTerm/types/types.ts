import type { DefinedTerm, DefinedTermSet } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type {
  CRThingDefaultShape,
  CRThingSnapshot,
  CRThingState,
} from '../../CRThing/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgURL,
} from '../../.types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'

type SchemaOrgDefinedTermRaw = Extract<DefinedTerm, { '@type': 'DefinedTerm' }>

type SchemaOrgDefinedTerm = Partial<SchemaOrgDefinedTermRaw>

/**
 * Values accepted by Schema.org about.
 */
export type CRDefinedTermAbout = CRThingSnapshot | CRIdReferenceValue

/**
 * Values accepted by Schema.org inDefinedTermSet.
 */
export type CRDefinedTermSetReference =
  | DefinedTermSet
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org DefinedTerm.
 *
 * Schema.org: A word, name, acronym, phrase, etc. with a formal definition.
 */
export type CRDefinedTermDefaultShape<Type = 'DefinedTerm'> = {
  /**
   * Schema.org about: The subject matter of an object.
   */
  about: CRSetSnapshot<CRDefinedTermAbout>
  /**
   * Schema.org inDefinedTermSet: A DefinedTermSet that contains this term.
   */
  inDefinedTermSet: CRSetSnapshot<CRDefinedTermSetReference>
  /**
   * Schema.org termCode: A code that identifies this DefinedTerm within a
   * DefinedTermSet.
   */
  termCode: CRTextSnapshot
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org DefinedTerm.
 */
export type CRDefinedTermSnapshot<Type = 'DefinedTerm'> =
  CRStructPartialSnapshot<
    CRDefinedTermDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgDefinedTerm,
  keyof CRDefinedTermSnapshot
>

type ExtraKeys = Exclude<
  keyof CRDefinedTermSnapshot,
  keyof SchemaOrgDefinedTerm
>

/**
 * Runtime CRDT state surface for Schema.org DefinedTerm.
 */
export type CRDefinedTermState<Type = 'DefinedTerm'> = {
  /**
   * Schema.org about: The subject matter of an object.
   */
  about: Readonly<CRSet<CRDefinedTermAbout>>
  /**
   * Schema.org inDefinedTermSet: A DefinedTermSet that contains this term.
   */
  inDefinedTermSet: Readonly<CRSet<CRDefinedTermSetReference>>
  /**
   * Schema.org termCode: A code that identifies this DefinedTerm within a
   * DefinedTermSet.
   */
  termCode: Readonly<CRText>
} & CRThingState<Type>
