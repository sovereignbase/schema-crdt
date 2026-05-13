import type {
  CRStructAck,
  CRStructDelta,
  CRStructSnapshot,
} from '@sovereignbase/convergent-replicated-struct'
import type { SchemaOrgText, SchemaOrgURL } from '../../.types/types.js'

/**
 * JSON-LD node reference used when a full CRDT-backed object is not embedded.
 */
export type CRIdReferenceValue = {
  /**
   * JSON-LD identifier for the referenced node.
   */
  '@id': SchemaOrgURL | SchemaOrgText
}

/**
 * JSON-LD node reference constrained to a Schema.org type.
 */
export type CRTypedIdReferenceValue<Type extends string> =
  CRIdReferenceValue & {
    /**
     * Schema.org type name for the referenced node.
     */
    '@type'?: Type
  }

/**
 * Serializable CRDT shape for a JSON-LD node reference.
 */
export type CRIdReferenceDefaultShape = CRIdReferenceValue

/**
 * Serializable CRDT snapshot for a JSON-LD node reference.
 */
export type CRIdReferenceSnapshot = CRStructSnapshot<CRIdReferenceDefaultShape>

/**
 * Serializable CRDT delta for a JSON-LD node reference.
 */
export type CRIdReferenceDelta = CRStructDelta<CRIdReferenceDefaultShape>

/**
 * Serializable CRDT acknowledgement frontier for a JSON-LD node reference.
 */
export type CRIdReferenceAck = CRStructAck<CRIdReferenceDefaultShape>

/**
 * Runtime CRDT state surface for a JSON-LD node reference.
 */
export type CRIdReferenceState = {
  /**
   * JSON-LD identifier for the referenced node.
   */
  '@id': SchemaOrgURL | SchemaOrgText
}
