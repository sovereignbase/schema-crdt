/**
 * JSON-LD context used by Schema.org documents.
 */
export type SchemaCRDTJSONLDContext =
  | 'https://schema.org'
  | Record<string, unknown>
  | Array<'https://schema.org' | Record<string, unknown>>

/**
 * Scalar JSON-LD value.
 */
export type SchemaCRDTJSONLDScalar = string | number | boolean | null

/**
 * Recursive JSON-LD value accepted by the Schema CRDT presentation helpers.
 */
export type SchemaCRDTJSONLDValue =
  | SchemaCRDTJSONLDScalar
  | SchemaCRDTJSONLDDocument
  | Array<SchemaCRDTJSONLDValue>

/**
 * Compact JSON-LD document produced from a live Schema CRDT projection.
 */
export type SchemaCRDTJSONLDDocument = {
  '@context'?: SchemaCRDTJSONLDContext
  '@id'?: string
  '@type'?: string | Array<string>
  [key: string]: SchemaCRDTJSONLDContext | SchemaCRDTJSONLDValue | undefined
}

/**
 * Expanded JSON-LD document produced by jsonld.js.
 */
export type SchemaCRDTExpandedJSONLDDocument = Array<Record<string, unknown>>

/**
 * Compact or expanded JSON-LD input accepted by Schema CRDT constructors.
 */
export type SchemaCRDTJSONLDInput =
  | SchemaCRDTJSONLDDocument
  | SchemaCRDTExpandedJSONLDDocument

/**
 * Options for compact JSON-LD presentation export.
 */
export type SchemaCRDTJSONLDOptions = {
  /**
   * JSON-LD context to attach. Set to `false` to omit `@context`.
   */
  readonly context?: SchemaCRDTJSONLDContext | false
  /**
   * JSON-LD presentation form. Compacted output is synchronous; expanded output
   * uses jsonld.js and returns a promise from `toJSONLD()`.
   */
  readonly format?: 'compacted' | 'expanded'
}

/**
 * Options for canonical JSON-LD presentation export.
 */
export type SchemaCRDTCanonicalPresentationOptions = SchemaCRDTJSONLDOptions & {
  /**
   * Optional Schema.org JSON-LD schema passed to
   * `@adobe/structured-data-validator`.
   */
  readonly schemaOrgJson?: unknown
  /**
   * Set to `false` to skip structured-data-validator before canonization.
   */
  readonly validate?: boolean
  /**
   * Optional jsonld.js document loader for externally hosted contexts.
   */
  readonly documentLoader?: unknown
  /**
   * Set to `false` to disable jsonld.js safe mode.
   */
  readonly safe?: boolean
}
