import {
  CRStruct,
  type CRStructAck,
  type CRStructDelta,
  type CRStructSnapshot,
} from '@sovereignbase/convergent-replicated-struct'
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
  SchemaCRDTPropertyEventMap,
} from '../.types/index.js'

export class CRThing<
  T = 'Thing',
  S extends Record<string, unknown> = CRThingDefaultShape,
> implements CRThingState<T> {
  declare private readonly state: CRStruct<CRThingDefaultShape>
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
    const id = snapshot?.['@id']?.value || Cryptographic.identifier.generate()

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

    const state = new CRStruct(
      defaults,
      snapshot as CRStructSnapshot<CRThingDefaultShape> | undefined
    )

    Object.defineProperties(this, {
      state: {
        value: state,
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
        value: state['@type'] ?? defaults['@type'],
        enumerable: true,
        configurable: false,
        writable: false,
      },
      additionalType: {
        value: new CRSet(state['additionalType'] ?? defaults['additionalType']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      alternateName: {
        value: new CRSet(state['alternateName'] ?? defaults['alternateName']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      description: {
        value: new CRText(state['description'] ?? defaults['description']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      disambiguatingDescription: {
        value: new CRText(
          state['disambiguatingDescription'] ??
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
        enumerable: true,
        configurable: true,
        get(): string {
          return state['image'] ?? defaults['image']
        },
        set(value: string): void {
          state['image'] = value
        },
      },
      mainEntityOfPage: {
        enumerable: true,
        configurable: true,
        get(): string {
          return state['mainEntityOfPage'] ?? defaults['mainEntityOfPage']
        },
        set(value: string): void {
          state['mainEntityOfPage'] = value
        },
      },
      name: {
        value: new CRText(state['name'] ?? defaults['name']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      owner: {
        enumerable: true,
        configurable: true,
        get(): string {
          return state['owner'] ?? defaults['owner']
        },
        set(value: string): void {
          state['owner'] = value
        },
      },
      potentialAction: {
        enumerable: true,
        configurable: true,
        get(): string {
          return state['potentialAction'] ?? defaults['potentialAction'] ?? ''
        },
        set(value: string): void {
          state['potentialAction'] = value
        },
      },
      sameAs: {
        value: new CRSet(state['sameAs'] ?? defaults['sameAs']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      subjectOf: {
        value: new CRSet(state['subjectOf'] ?? defaults['subjectOf']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      url: {
        enumerable: true,
        configurable: true,
        get(): string {
          return state['url'] ?? defaults['url']
        },
        set(value: string): void {
          state['url'] = value
        },
      },
    })

    const eventTypes = ['delta', 'change', 'snapshot', 'ack'] as const
    const isRouted = (key: string): boolean => {
      const value = this[key as keyof this] as unknown
      return (
        typeof value === 'object' &&
        value !== null &&
        'addEventListener' in value
      )
    }

    for (const type of eventTypes) {
      this.state.addEventListener(type, (event: Event) => {
        const detail = (
          event as CustomEvent<
            SchemaCRDTEventMap<CRThingDefaultShape>[typeof type]
          >
        ).detail
        if (typeof detail === 'object' && detail !== null) {
          const filtered =
            {} as SchemaCRDTEventMap<CRThingDefaultShape>[typeof type]

          for (const [key, value] of Object.entries(
            detail as Record<
              string,
              SchemaCRDTEventMap<CRThingDefaultShape>[typeof type]
            >
          )) {
            if (!isRouted(key)) {
              ;(
                filtered as Record<
                  string,
                  SchemaCRDTEventMap<CRThingDefaultShape>[typeof type]
                >
              )[key] = value
            }
          }

          if (Object.keys(filtered as Record<string, never>).length === 0) {
            return
          }

          void this.eventTarget.dispatchEvent(
            new CustomEvent<SchemaCRDTEventMap<S>[typeof type]>(type, {
              detail: filtered as SchemaCRDTEventMap<S>[typeof type],
            })
          )
          return
        }

        void this.eventTarget.dispatchEvent(
          new CustomEvent<SchemaCRDTEventMap<S>[typeof type]>(type, {
            detail: detail as SchemaCRDTEventMap<S>[typeof type],
          })
        )
      })
    }

    for (const key of this.state.keys<keyof CRThingDefaultShape>()) {
      const value = this[key as keyof this] as unknown

      if (
        typeof value !== 'object' ||
        value === null ||
        !('addEventListener' in value)
      ) {
        continue
      }

      const eventSource = value as {
        addEventListener(type: string, listener: EventListener): void
      }

      for (const type of eventTypes) {
        eventSource.addEventListener(type, (event) => {
          void this.eventTarget.dispatchEvent(
            new CustomEvent<SchemaCRDTEventMap<S>[typeof type]>(type, {
              detail: {
                [key]: (
                  event as CustomEvent<SchemaCRDTPropertyEventMap[typeof type]>
                ).detail,
              } as SchemaCRDTEventMap<S>[typeof type],
            })
          )
        })
      }
    }
  }

  /**
   * Applies a remote or local delta to the replica state.
   *
   * @param crStructDelta - The partial serializable field delta to merge.
   */
  merge(
    crStructDelta: CRStructDelta<S> | Partial<Record<keyof S, unknown>>
  ): void {
    for (const [key, value] of Object.entries(crStructDelta)) {
      const target = this[key as keyof this] as unknown

      if (typeof target === 'object' && target !== null && 'merge' in target) {
        const delta =
          typeof value === 'object' &&
          value !== null &&
          'uuidv7' in value &&
          'value' in value
            ? (value as { value: unknown }).value
            : value

        void (target as { merge(delta: unknown): void }).merge(delta)
        continue
      }

      void this.state.merge({
        [key]: value,
      } as CRStructDelta<CRThingDefaultShape>)
    }
  }

  /**
   * Emits the current acknowledgement frontier for each field.
   */
  acknowledge(): void {
    void this.state.acknowledge()

    for (const key of this.state.keys<keyof CRThingDefaultShape>()) {
      const value = this[key as keyof this] as unknown

      if (
        typeof value === 'object' &&
        value !== null &&
        'acknowledge' in value
      ) {
        void (value as { acknowledge(): void }).acknowledge()
      }
    }
  }

  /**
   * Removes overwritten identifiers that every provided frontier has acknowledged.
   *
   * @param frontiers - A collection of acknowledgement frontiers to compact against.
   */
  garbageCollect(frontiers: Array<CRStructAck<S>>): void {
    void this.state.garbageCollect(
      frontiers as unknown as Array<CRStructAck<CRThingDefaultShape>>
    )

    for (const key of this.state.keys<keyof CRThingDefaultShape>()) {
      const value = this[key as keyof this] as unknown

      if (
        typeof value !== 'object' ||
        value === null ||
        !('garbageCollect' in value)
      ) {
        continue
      }

      const routedFrontiers = frontiers
        .map((frontier) => frontier[key as keyof typeof frontier])
        .filter((frontier) => frontier !== undefined)

      void (
        value as { garbageCollect(frontiers: Array<unknown>): void }
      ).garbageCollect(routedFrontiers)
    }
  }

  /**
   * Emits the current serializable snapshot of the replica state.
   */
  snapshot(): void {
    void this.eventTarget.dispatchEvent(
      new CustomEvent<SchemaCRDTEventMap<S>['snapshot']>('snapshot', {
        detail: this.toJSON(),
      })
    )
  }

  /**
   * Returns the struct field keys.
   *
   * @returns The field keys in the current replica.
   */
  keys<K extends keyof S>(): Array<K> {
    return this.state.keys() as Array<K>
  }

  /**
   * Resets every field in the replica back to its default value.
   */
  clear(): void {
    void this.state.clear()

    for (const key of this.state.keys<keyof CRThingDefaultShape>()) {
      const value = this[key as keyof this] as unknown

      if (typeof value !== 'object' || value === null) {
        continue
      }

      if ('clear' in value) {
        void (value as { clear(): void }).clear()
        continue
      }

      if ('removeAfter' in value && 'size' in value) {
        const text = value as {
          removeAfter(index: number, count: number): void
          size: number
        }
        if (text.size > 0) {
          void text.removeAfter(0, text.size)
        }
      }
    }
  }

  /**
   * Returns a cloned plain object view of the current replica fields.
   *
   * @returns The current field values keyed by field name.
   */
  clone(): S {
    const out = {} as S

    for (const key of this.keys<keyof S>()) {
      const value = this[key as keyof this] as unknown

      if (typeof value === 'object' && value !== null && 'toJSON' in value) {
        out[key] = structuredClone(
          (value as { toJSON(): unknown }).toJSON()
        ) as S[keyof S]
        continue
      }

      out[key] = structuredClone(
        this.state[key as keyof CRThingDefaultShape]
      ) as S[keyof S]
    }

    return out
  }

  /**
   * Returns cloned copies of the current field values.
   *
   * @returns The current field values.
   */
  values<K extends keyof S>(): Array<S[K]> {
    return Object.values(this.clone()) as Array<S[K]>
  }

  /**
   * Returns cloned key-value pairs for the current replica state.
   *
   * @returns The current field entries.
   */
  entries<K extends keyof S>(): Array<[K, S[K]]> {
    return Object.entries(this.clone()) as Array<[K, S[K]]>
  }

  /**
   * Returns the current serializable snapshot projection of this replica.
   *
   * Called automatically by `JSON.stringify`.
   */
  toJSON(): CRStructSnapshot<S> {
    const snapshot = this.state.toJSON()

    for (const key of this.state.keys<keyof CRThingDefaultShape>()) {
      const value = this[key as keyof this] as unknown

      if (typeof value === 'object' && value !== null && 'toJSON' in value) {
        const entry = snapshot[key]

        if (!entry) {
          continue
        }

        ;(snapshot as Record<string, unknown>)[key] = {
          ...entry,
          value: (value as { toJSON(): unknown }).toJSON(),
        }
      }
    }

    return snapshot as unknown as CRStructSnapshot<S>
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
  [Symbol.for('nodejs.util.inspect.custom')](): CRStructSnapshot<S> {
    return this.toJSON()
  }
  /**
   * Returns the Deno console inspection representation.
   */
  [Symbol.for('Deno.customInspect')](): CRStructSnapshot<S> {
    return this.toJSON()
  }
  /**
   * Iterates over the current live field entries.
   */
  *[Symbol.iterator](): IterableIterator<[keyof S, S[keyof S]]> {
    for (const entry of this.entries()) {
      yield entry
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
