import type { WebContent } from 'schema-dts'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgWebContentRaw = Extract<WebContent, { '@type': 'WebContent' }>

type SchemaOrgWebContent = Partial<SchemaOrgWebContentRaw>

/**
 * Serializable CRDT shape for Schema.org WebContent.
 *
 * Schema.org: Web-addressable content where the distinction between WebPage,
 * WebSite and WebPageElement is not important or obvious.
 */
export type CRWebContentDefaultShape<Type = 'WebContent'> =
  CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org WebContent.
 */
export type CRWebContentSnapshot<Type = 'WebContent'> = CRStructPartialSnapshot<
  CRWebContentDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<
  keyof SchemaOrgWebContent,
  keyof CRWebContentSnapshot
>

type ExtraKeys = Exclude<keyof CRWebContentSnapshot, keyof SchemaOrgWebContent>

/**
 * Runtime CRDT state surface for Schema.org WebContent.
 */
export type CRWebContentState<Type = 'WebContent'> = CRCreativeWorkState<Type>
