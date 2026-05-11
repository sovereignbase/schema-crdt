import type { HowToTool } from 'schema-dts'

import type {
  CRHowToItemDefaultShape,
  CRHowToItemState,
} from '../../CRHowToItem/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgHowToToolRaw = Extract<HowToTool, { '@type': 'HowToTool' }>

type SchemaOrgHowToTool = Partial<SchemaOrgHowToToolRaw>

/**
 * Serializable CRDT shape for Schema.org HowToTool.
 *
 * Schema.org: A tool used when performing instructions.
 */
export type CRHowToToolDefaultShape<Type = 'HowToTool'> =
  CRHowToItemDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org HowToTool.
 */
export type CRHowToToolSnapshot<Type = 'HowToTool'> = CRStructPartialSnapshot<
  CRHowToToolDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgHowToTool, keyof CRHowToToolSnapshot>

type ExtraKeys = Exclude<keyof CRHowToToolSnapshot, keyof SchemaOrgHowToTool>

/**
 * Runtime CRDT state surface for Schema.org HowToTool.
 */
export type CRHowToToolState<Type = 'HowToTool'> = CRHowToItemState<Type>
