import type { WebPageElement } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgCssSelectorType,
  SchemaOrgXPathType,
} from '../../.types/types.js'

type SchemaOrgWebPageElementRaw = Extract<
  WebPageElement,
  { '@type': 'WebPageElement' }
>

type SchemaOrgWebPageElement = Partial<SchemaOrgWebPageElementRaw>

/**
 * Serializable CRDT shape for Schema.org WebPageElement.
 *
 * Schema.org: A web page element, like a table or an image.
 */
export type CRWebPageElementDefaultShape<Type = 'WebPageElement'> = {
  /**
   * Schema.org cssSelector: A CSS selector for a WebPageElement.
   */
  cssSelector: CRSetSnapshot<SchemaOrgCssSelectorType>
  /**
   * Schema.org xpath: An XPath for a WebPageElement.
   */
  xpath: CRSetSnapshot<SchemaOrgXPathType>
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org WebPageElement.
 */
export type CRWebPageElementSnapshot<Type = 'WebPageElement'> =
  CRStructPartialSnapshot<
    CRWebPageElementDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

/**
 * Intentionally omitted deprecated Schema.org WebPageElement properties:
 * awards, encodings, fileFormat, isBasedOnUrl, reviews.
 */
type MissingKeys = Exclude<
  keyof SchemaOrgWebPageElement,
  keyof CRWebPageElementSnapshot
>

type ExtraKeys = Exclude<
  keyof CRWebPageElementSnapshot,
  keyof SchemaOrgWebPageElement
>

/**
 * Runtime CRDT state surface for Schema.org WebPageElement.
 */
export type CRWebPageElementState<Type = 'WebPageElement'> = {
  /**
   * Schema.org cssSelector: A CSS selector for a WebPageElement.
   */
  cssSelector: Readonly<CRSet<SchemaOrgCssSelectorType>>
  /**
   * Schema.org xpath: An XPath for a WebPageElement.
   */
  xpath: Readonly<CRSet<SchemaOrgXPathType>>
} & CRCreativeWorkState<Type>
