export type SchemaCRDTErrorCode = 'VALIDATION_FAILED'

export class SchemaCRDTError extends Error {
  readonly code: SchemaCRDTErrorCode

  constructor(code: SchemaCRDTErrorCode, message?: string) {
    const detail = message ?? code
    super(`{@sovereignbase/schema-crdt} ${detail}`)
    this.code = code
    this.name = 'SchemaCRDTError'
  }
}
