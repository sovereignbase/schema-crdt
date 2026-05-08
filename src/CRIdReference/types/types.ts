import type {
  CRStructAck,
  CRStructDelta,
  CRStructSnapshot,
} from '@sovereignbase/convergent-replicated-struct'
import type { OpaqueIdentifier } from '@sovereignbase/cryptosuite'

export type CRIdReferenceValue = {
  '@id': OpaqueIdentifier
}

export type CRIdReferenceDefaultShape = CRIdReferenceValue

export type CRIdReferenceSnapshot = CRStructSnapshot<CRIdReferenceDefaultShape>

export type CRIdReferenceDelta = CRStructDelta<CRIdReferenceDefaultShape>

export type CRIdReferenceAck = CRStructAck<CRIdReferenceDefaultShape>

export type CRIdReferenceState = {
  '@id': OpaqueIdentifier
}
