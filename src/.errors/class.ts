export type SchemaCRDTErrorCode = 'EXAMPLE_ERROR_CODE'

export class SchemaCRDTError extends Error {
  readonly code: SchemaCRDTErrorCode

  constructor(code: SchemaCRDTErrorCode, message?: string) {
    const detail = message ?? code
    super(`{@sovereignbase/schema-crdt} ${detail}`)
    this.code = code
    this.name = 'SchemaCRDTError'
  }
}
