import {
  CRStruct,
  type CRStructEventListenerFor,
  type CRStructEventMap,
} from '@sovereignbase/convergent-replicated-struct'

import type {
  CRIdReferenceAck,
  CRIdReferenceDefaultShape,
  CRIdReferenceDelta,
  CRIdReferenceSnapshot,
  CRIdReferenceState,
  CRIdReferenceValue,
} from './types/types.js'

/**
 * CRDT-backed opaque JSON-LD node reference.
 */
export class CRIdReference implements CRIdReferenceState {
  declare private readonly state: CRStruct<CRIdReferenceDefaultShape, true>

  /**
   * JSON-LD identifier for the referenced node.
   */
  declare public '@id': CRIdReferenceState['@id']

  constructor(reference?: CRIdReferenceSnapshot | CRIdReferenceValue | string) {
    const defaults: CRIdReferenceDefaultShape = {
      '@id':
        typeof reference === 'string'
          ? reference
          : reference && typeof reference['@id'] === 'string'
            ? reference['@id']
            : '',
    }

    const entry = typeof reference === 'object' ? reference?.['@id'] : undefined
    const snapshot =
      reference &&
      typeof reference === 'object' &&
      typeof entry === 'object' &&
      entry !== null &&
      'uuidv7' in entry &&
      'value' in entry &&
      'predecessor' in entry &&
      'tombstones' in entry
        ? (reference as CRIdReferenceSnapshot)
        : undefined

    const state = new CRStruct(defaults, snapshot, true)

    Object.defineProperties(this, {
      state: {
        value: state,
        enumerable: false,
        configurable: false,
        writable: false,
      },
      '@id': {
        enumerable: true,
        configurable: true,
        get(): CRIdReferenceState['@id'] {
          return state['@id'] ?? defaults['@id']
        },
        set(value: CRIdReferenceState['@id']): void {
          state['@id'] = value
        },
      },
    })
  }

  merge(delta: CRIdReferenceDelta): void {
    void this.state.merge(delta)
  }

  acknowledge(): void {
    void this.state.acknowledge()
  }

  garbageCollect(frontiers: Array<CRIdReferenceAck>): void {
    void this.state.garbageCollect(frontiers)
  }

  snapshot(): void {
    void this.state.snapshot()
  }

  clone(): CRIdReferenceValue {
    return this.state.clone()
  }

  toJSON(): CRIdReferenceValue {
    return this.clone()
  }

  addEventListener<K extends keyof CRStructEventMap<CRIdReferenceDefaultShape>>(
    type: K,
    listener: CRStructEventListenerFor<CRIdReferenceDefaultShape, K> | null,
    options?: boolean | AddEventListenerOptions
  ): void {
    this.state.addEventListener(type, listener, options)
  }

  removeEventListener<
    K extends keyof CRStructEventMap<CRIdReferenceDefaultShape>,
  >(
    type: K,
    listener: CRStructEventListenerFor<CRIdReferenceDefaultShape, K> | null,
    options?: boolean | EventListenerOptions
  ): void {
    this.state.removeEventListener(type, listener, options)
  }
}

export * from './types/types.js'
