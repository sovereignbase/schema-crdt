import { CRStruct } from '@sovereignbase/convergent-replicated-struct'
import { CRText } from '@sovereignbase/convergent-replicated-text'
import { CRSet } from '@sovereignbase/convergent-replicated-set'
import { Cryptographic, OpaqueIdentifier } from '@sovereignbase/cryptosuite'

import type {
  CRThingDefaultShape,
  CRThingSnapshot,
  CRThingState,
} from './types/types.js'
import {
  additionalType,
  alternateName,
  description,
  disambiguatingDescription,
  name,
  sameAs,
  subjectOf,
} from '../.shared/index.js'

import type {
  SchemaCRDTEventListenerFor,
  SchemaCRDTEventMap,
} from '../.types/index.js'

export class CRThing<
  T = 'Thing',
  S = CRThingDefaultShape,
> implements CRThingState<T> {
  declare private readonly state: CRStruct<CRThingDefaultShape, true>
  declare private readonly eventTarget: EventTarget

  declare public readonly '@id': OpaqueIdentifier
  declare public readonly '@type': T
  declare public readonly 'additionalType': Readonly<CRSet<string>>
  declare public readonly 'alternateName': Readonly<CRSet<string>>
  declare public readonly 'description': Readonly<CRText>
  declare public readonly 'disambiguatingDescription': Readonly<CRText>
  declare public readonly 'identifier': string
  declare public 'image': string
  declare public 'mainEntityOfPage': string
  declare public readonly 'name': Readonly<CRText>
  declare public 'owner': string
  declare public 'potentialAction': string
  declare public readonly 'sameAs': Readonly<CRSet<string>>
  declare public readonly 'subjectOf': Readonly<CRSet<string>>
  declare public 'url': string

  constructor(snapshot?: CRThingSnapshot) {
    const defaults: CRThingDefaultShape = {
      '@id': '',
      '@type': 'Thing',
      additionalType,
      alternateName,
      description,
      disambiguatingDescription,
      identifier: '',
      image: '',
      mainEntityOfPage: '',
      name,
      owner: '',
      potentialAction: '',
      sameAs,
      subjectOf,
      url: '',
    }

    const id = this.state['@id'] ?? Cryptographic.identifier.generate()

    Object.defineProperties(this, {
      state: {
        value: new CRStruct(defaults, snapshot, true),
        enumerable: false,
        configurable: false,
        writable: false,
      },
      eventTarget: {
        value: new EventTarget(),
        enumerable: false,
        configurable: false,
        writable: false,
      },
      '@id': {
        value: id,
        enumerable: true,
        configurable: false,
        writable: false,
      },
      '@type': {
        value: 'Thing',
        enumerable: true,
        configurable: false,
        writable: false,
      },
      additionalType: {
        value: new CRSet(
          this.state['additionalType'] ?? defaults['additionalType']
        ),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      alternateName: {
        value: new CRSet(
          this.state['alternateName'] ?? defaults['alternateName']
        ),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      description: {
        value: new CRText(this.state['description'] ?? defaults['description']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      disambiguatingDescription: {
        value: new CRText(
          this.state['disambiguatingDescription'] ??
            defaults['disambiguatingDescription']
        ),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      identifier: {
        value: id,
        enumerable: false,
        configurable: false,
        writable: false,
      },
      image: {
        value: this.state['image'] ?? defaults['image'],
        enumerable: true,
        configurable: true,
        writable: true,
      },
      mainEntityOfPage: {
        value: this.state['mainEntityOfPage'] ?? defaults['mainEntityOfPage'],
        enumerable: true,
        configurable: true,
        writable: true,
      },
      name: {
        value: new CRText(this.state['name'] ?? defaults['name']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      owner: {
        value: this.state['owner'] ?? defaults['owner'],
        enumerable: true,
        configurable: true,
        writable: true,
      },
      potentialAction: {
        value: this.state['potentialAction'] ?? defaults['potentialAction'],
        enumerable: true,
        configurable: true,
        writable: true,
        get() {
          return this.state['potentialAction']
        },
        set(value) {
          this.state['potentialAction'] = value
        },
      },
      sameAs: {
        value: new CRSet(this.state['sameAs'] ?? defaults['sameAs']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      subjectOf: {
        value: new CRSet(this.state['subjectOf'] ?? defaults['subjectOf']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      url: {
        value: this.state['url'] ?? defaults['url'],
        enumerable: true,
        configurable: true,
        writable: true,
        get(): string {
          return this.state['url']
        },
        set(value: string): void {
          this.state['url'] = value
        },
      },
    })

    let stateTimeout: ReturnType<typeof setTimeout> | undefined
    this.state.addEventListener('change', () => {
      clearTimeout(stateTimeout)

      stateTimeout = setTimeout(() => {}, 500)
    })

    this.additionalType.addEventListener('snapshot', ({}) => {})

    let descriptionTimeout: ReturnType<typeof setTimeout> | undefined
    this.description.addEventListener('change', () => {
      clearTimeout(descriptionTimeout)

      descriptionTimeout = setTimeout(() => {
        this.state.description = this.description.toJSON()
      }, 500)
    })
  }

  /**
   * Applies a remote or local delta to the replica state.
   *
   * @param crStructDelta - The partial serializable field delta to merge.
   */
  merge(crStructDelta: CRStructDelta<T>): void {
    const result = __merge<T>(crStructDelta, this.__state)
  }

  /**
   * Emits the current acknowledgement frontier for each field.
   */
  acknowledge(): void {
    const ack = __acknowledge<T>(this.__state)
    if (ack) {
      void this.__eventTarget.dispatchEvent(
        new CustomEvent('ack', { detail: ack })
      )
    }
  }

  /**
   * Removes overwritten identifiers that every provided frontier has acknowledged.
   *
   * @param frontiers - A collection of acknowledgement frontiers to compact against.
   */
  garbageCollect(frontiers: Array<CRStructAck<T>>): void {
    void __garbageCollect<T>(frontiers, this.__state)
  }

  /**
   * Emits the current serializable snapshot of the replica state.
   */
  snapshot(): void {
    const snapshot = __snapshot<T>(this.__state)
    if (snapshot) {
      void this.__eventTarget.dispatchEvent(
        new CustomEvent('snapshot', { detail: snapshot })
      )
    }
  }

  /**
   * Returns the struct field keys.
   *
   * @returns The field keys in the current replica.
   */
  keys<K extends keyof T>(): Array<K> {
    return Object.keys(this.__state.entries) as Array<K>
  }

  /**
   * Resets every field in the replica back to its default value.
   */
  clear(): void {
    const result = __delete(this.__state)
    if (result) {
      const { delta, change } = result
      if (delta) {
        void this.__eventTarget.dispatchEvent(
          new CustomEvent('delta', { detail: delta })
        )
      }
      if (change) {
        void this.__eventTarget.dispatchEvent(
          new CustomEvent('change', { detail: change })
        )
      }
    }
  }

  /**
   * Returns a cloned plain object view of the current replica fields.
   *
   * @returns The current field values keyed by field name.
   */
  clone(): T {
    const out = {} as T
    for (const [key, entry] of Object.entries(this.__state.entries)) {
      out[key as keyof T] = structuredClone(entry.value as T[keyof T])
    }
    return out
  }

  /**
   * Returns cloned copies of the current field values.
   *
   * @returns The current field values.
   */
  values<K extends keyof T>(): Array<T[K]> {
    return Object.values(this.__state.entries).map((entry) =>
      structuredClone(entry.value)
    ) as Array<T[K]>
  }

  /**
   * Returns cloned key-value pairs for the current replica state.
   *
   * @returns The current field entries.
   */
  entries<K extends keyof T>(): Array<[K, T[K]]> {
    return Object.entries(this.__state.entries).map(([key, entry]) => [
      key as K,
      structuredClone(entry.value as T[K]),
    ])
  }

  /**
   * Returns the current serializable snapshot projection of this replica.
   *
   * Called automatically by `JSON.stringify`.
   */
  toJSON(): CRStructSnapshot<T> {
    return __snapshot<T>(this.__state)
  }
  /**
   * Attempts to return the current snapshot as a serialized JSON string.
   */
  toString(): string {
    return JSON.stringify(this)
  }
  /**
   * Returns the Node.js console inspection representation.
   */
  [Symbol.for('nodejs.util.inspect.custom')](): CRStructSnapshot<T> {
    return this.toJSON()
  }
  /**
   * Returns the Deno console inspection representation.
   */
  [Symbol.for('Deno.customInspect')](): CRStructSnapshot<T> {
    return this.toJSON()
  }
  /**
   * Iterates over the current live field entries.
   */
  *[Symbol.iterator](): IterableIterator<[keyof T, T[keyof T]]> {
    for (const [key, entry] of Object.entries(this.__state.entries)) {
      yield [key, structuredClone(entry.value)]
    }
  }

  /**
   * Registers an event listener.
   *
   * @param type - The event type to listen for.
   * @param listener - The listener to register.
   * @param options - Listener registration options.
   */
  addEventListener<K extends keyof SchemaCRDTEventMap<S>>(
    type: K,
    listener: SchemaCRDTEventListenerFor<S, K> | null,
    options?: boolean | AddEventListenerOptions
  ): void {
    this.eventTarget.addEventListener(
      type,
      listener as EventListenerOrEventListenerObject | null,
      options
    )
  }

  /**
   * Removes an event listener.
   *
   * @param type - The event type to stop listening for.
   * @param listener - The listener to remove.
   * @param options - Listener removal options.
   */
  removeEventListener<K extends keyof SchemaCRDTEventMap<S>>(
    type: K,
    listener: SchemaCRDTEventListenerFor<S, K> | null,
    options?: boolean | EventListenerOptions
  ): void {
    this.eventTarget.removeEventListener(
      type,
      listener as EventListenerOrEventListenerObject | null,
      options
    )
  }
}

export * from './types/types.js'
