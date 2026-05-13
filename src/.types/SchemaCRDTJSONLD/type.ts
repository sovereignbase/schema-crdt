export type SchemaCRDTJSONLDContext =
  | 'https://schema.org'
  | Record<string, unknown>
  | Array<'https://schema.org' | Record<string, unknown>>

export type SchemaCRDTJSONLDValue =
  | string
  | number
  | boolean
  | null
  | SchemaCRDTJSONLDDocument
  | Array<SchemaCRDTJSONLDValue>

export type SchemaCRDTJSONLDDocument = {
  '@context'?: SchemaCRDTJSONLDContext
  '@id'?: string
  '@type'?: string | Array<string>
  [key: string]: unknown
}

export type SchemaCRDTJSONLDInput =
  | SchemaCRDTJSONLDDocument
  | Array<Record<string, unknown>>

export type SchemaCRDTJSONLDOptions = {
  readonly context?: SchemaCRDTJSONLDContext | false
}

export type SchemaCRDTCanonicalPresentationOptions = SchemaCRDTJSONLDOptions & {
  readonly schemaOrgJson?: unknown
  readonly validate?: boolean
  readonly documentLoader?: unknown
  readonly safe?: boolean
}
