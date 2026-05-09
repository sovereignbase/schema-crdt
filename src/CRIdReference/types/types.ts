import type {
  CRStructAck,
  CRStructDelta,
  CRStructSnapshot,
} from '@sovereignbase/convergent-replicated-struct'
import type { OpaqueIdentifier } from '@sovereignbase/cryptosuite'

/**
 * Opaque JSON-LD node reference used when a full CRDT-backed object is not
 * embedded.
 */
export type CRIdReferenceValue = {
  /**
   * JSON-LD identifier for the referenced node.
   */
  '@id': OpaqueIdentifier
}

/**
 * Serializable CRDT shape for an opaque JSON-LD node reference.
 */
export type CRIdReferenceDefaultShape = CRIdReferenceValue

/**
 * Serializable CRDT snapshot for an opaque JSON-LD node reference.
 */
export type CRIdReferenceSnapshot = CRStructSnapshot<CRIdReferenceDefaultShape>

/**
 * Serializable CRDT delta for an opaque JSON-LD node reference.
 */
export type CRIdReferenceDelta = CRStructDelta<CRIdReferenceDefaultShape>

/**
 * Serializable CRDT acknowledgement frontier for an opaque JSON-LD node
 * reference.
 */
export type CRIdReferenceAck = CRStructAck<CRIdReferenceDefaultShape>

/**
 * Runtime CRDT state surface for an opaque JSON-LD node reference.
 */
export type CRIdReferenceState = {
  /**
   * JSON-LD identifier for the referenced node.
   */
  '@id': OpaqueIdentifier
}
