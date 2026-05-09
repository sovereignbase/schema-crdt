/**
 * Public error codes emitted by schema-crdt.
 */
export type SchemaCRDTErrorCode = 'VALIDATION_FAILED'

/**
 * Typed package error for schema-crdt runtime failures.
 */
export class SchemaCRDTError extends Error {
  /**
   * Semantic package error code.
   */
  readonly code: SchemaCRDTErrorCode

  constructor(code: SchemaCRDTErrorCode, message?: string) {
    const detail = message ?? code
    super(`{@sovereignbase/schema-crdt} ${detail}`)
    this.code = code
    this.name = 'SchemaCRDTError'
  }
}
