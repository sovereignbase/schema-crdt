import type { SpeakableSpecification } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgCssSelectorType,
  SchemaOrgXPathType,
} from '../../.types/types.js'

type SchemaOrgSpeakableSpecificationRaw = Extract<
  SpeakableSpecification,
  { '@type': 'SpeakableSpecification' }
>

type SchemaOrgSpeakableSpecification =
  Partial<SchemaOrgSpeakableSpecificationRaw>

/**
 * Serializable CRDT shape for Schema.org SpeakableSpecification.
 *
 * Schema.org: Sections of a document highlighted as particularly speakable.
 */
export type CRSpeakableSpecificationDefaultShape<
  Type = 'SpeakableSpecification',
> = {
  /**
   * Schema.org cssSelector: A CSS selector for speakable content.
   */
  cssSelector: CRSetSnapshot<SchemaOrgCssSelectorType>
  /**
   * Schema.org xpath: An XPath for speakable content.
   */
  xpath: CRSetSnapshot<SchemaOrgXPathType>
} & CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org SpeakableSpecification.
 */
export type CRSpeakableSpecificationSnapshot<Type = 'SpeakableSpecification'> =
  CRStructPartialSnapshot<
    CRSpeakableSpecificationDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgSpeakableSpecification,
  keyof CRSpeakableSpecificationSnapshot
>

type ExtraKeys = Exclude<
  keyof CRSpeakableSpecificationSnapshot,
  keyof SchemaOrgSpeakableSpecification
>

/**
 * Runtime CRDT state surface for Schema.org SpeakableSpecification.
 */
export type CRSpeakableSpecificationState<Type = 'SpeakableSpecification'> = {
  /**
   * Schema.org cssSelector: A CSS selector for speakable content.
   */
  cssSelector: Readonly<CRSet<SchemaOrgCssSelectorType>>
  /**
   * Schema.org xpath: An XPath for speakable content.
   */
  xpath: Readonly<CRSet<SchemaOrgXPathType>>
} & CRIntangibleState<Type>
