import {
  CRStruct,
  type CRStructAck,
  type CRStructDelta,
  type CRStructSnapshot,
} from '@sovereignbase/convergent-replicated-struct'
import {
  CRText,
  type CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'
import {
  CRSet,
  type CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import {
  CRList,
  type CRListSnapshot,
} from '@sovereignbase/convergent-replicated-list'
import {
  CRMap,
  type CRMapSnapshot,
} from '@sovereignbase/convergent-replicated-map'

import type { CRThingDefaultShape, CRThingState } from './types/types.js'
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
  SchemaCRDTFormatValidators,
  SchemaCRDTPropertyEventMap,
} from '../.types/types.js'
import { SchemaCRDTError } from '../.errors/class.js'

/**
 * CRDT-backed Schema.org Thing.
 *
 * Schema.org: The most generic type of item.
 */
export class CRThing<
  Type = 'Thing',
  Shape extends CRThingDefaultShape<Type> = CRThingDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
> implements CRThingState<Type> {
  declare private readonly state: CRStruct<Shape, true>
  declare private readonly eventTarget: EventTarget
  declare protected readonly formatValidators: SchemaCRDTFormatValidators<Shape>

  /**
   * JSON-LD identifier for this node.
   */
  declare public readonly '@id': CRThingState['@id']
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org additionalType: An additional type for the item.
   */
  declare public readonly 'additionalType': CRThingState['additionalType']
  /**
   * Schema.org alternateName: An alias for the item.
   */
  declare public readonly 'alternateName': CRThingState['alternateName']
  /**
   * Schema.org description: A description of the item.
   */
  declare public readonly 'description': CRThingState['description']
  /**
   * Schema.org disambiguatingDescription: A short description used to
   * disambiguate the item from other, similar items.
   */
  declare public readonly 'disambiguatingDescription': CRThingState['disambiguatingDescription']
  /**
   * Schema.org identifier.
   */
  declare public readonly 'identifier': CRThingState['identifier']
  /**
   * Schema.org image: An image of the item.
   */
  declare public 'image': CRThingState['image']
  /**
   * Schema.org mainEntityOfPage: A page or other CreativeWork for which this
   * thing is the main entity being described.
   */
  declare public 'mainEntityOfPage': CRThingState['mainEntityOfPage']
  /**
   * Schema.org name: The name of the item.
   */
  declare public readonly 'name': CRThingState['name']
  /**
   * Schema.org owner: A person or organization who owns this Thing.
   */
  declare public 'owner': CRThingState['owner']
  /**
   * Schema.org potentialAction: A potential Action for this Thing.
   */
  declare public 'potentialAction': CRThingState['potentialAction']
  /**
   * Schema.org sameAs: URL of a reference Web page that unambiguously indicates
   * the item's identity.
   */
  declare public readonly 'sameAs': CRThingState['sameAs']
  /**
   * Schema.org subjectOf: A CreativeWork or Event about this Thing.
   */
  declare public readonly 'subjectOf': CRThingState['subjectOf']
  /**
   * Schema.org url: URL of the item.
   */
  declare public 'url': CRThingState['url']

  constructor(
    snapshot?: Snapshot,
    defaultShape?: Partial<Shape>,
    crdtProperties?: Partial<
      Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
    >,
    formatValidators?: SchemaCRDTFormatValidators<Shape>
  ) {
    const defaults = {
      '@id': '',
      '@type': 'Thing' as Type,
      additionalType,
      alternateName,
      description,
      disambiguatingDescription,
      identifier: '',
      image: '',
      mainEntityOfPage: '',
      name,
      owner: { '@id': '' },
      potentialAction: additionalType,
      sameAs,
      subjectOf,
      url: '',
      ...defaultShape,
    } as Shape

    const state = new CRStruct(defaults, snapshot, true)

    const id = state['@id'] ?? defaults['@id']
    const identifier = state['identifier'] ?? defaults['identifier']

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
      formatValidators: {
        value: formatValidators ?? {},
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
        value: identifier,
        enumerable: false,
        configurable: false,
        writable: false,
      },
      image: {
        enumerable: true,
        configurable: true,
        get(): CRThingState<Type>['image'] {
          return state['image'] ?? defaults['image']
        },
        set(value: CRThingState<Type>['image']): void {
          this.validateFormat('image' as Extract<keyof Shape, string>, value)
          this.ensureStateEntry('image' as Extract<keyof Shape, string>)
          state['image'] = value
        },
      },
      mainEntityOfPage: {
        enumerable: true,
        configurable: true,
        get(): CRThingState<Type>['mainEntityOfPage'] {
          return state['mainEntityOfPage'] ?? defaults['mainEntityOfPage']
        },
        set(value: CRThingState<Type>['mainEntityOfPage']): void {
          this.validateFormat(
            'mainEntityOfPage' as Extract<keyof Shape, string>,
            value
          )
          this.ensureStateEntry(
            'mainEntityOfPage' as Extract<keyof Shape, string>
          )
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
        get(): CRThingState<Type>['owner'] {
          return state['owner'] ?? defaults['owner']
        },
        set(value: CRThingState<Type>['owner']): void {
          this.validateFormat('owner' as Extract<keyof Shape, string>, value)
          this.ensureStateEntry('owner' as Extract<keyof Shape, string>)
          state['owner'] = value
        },
      },
      potentialAction: {
        value: new CRSet(
          state['potentialAction'] ?? defaults['potentialAction']
        ),
        enumerable: true,
        configurable: true,
        writable: false,
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
          this.validateFormat('url' as Extract<keyof Shape, string>, value)
          this.ensureStateEntry('url' as Extract<keyof Shape, string>)
          state['url'] = value
        },
      },
    })

    for (const key of Object.keys(defaults) as Array<
      Extract<keyof Shape, string>
    >) {
      if (Object.hasOwn(this, key)) {
        continue
      }

      const crdtProperty = crdtProperties?.[key]

      if (crdtProperty) {
        const value = state[key] ?? defaults[key]
        const nested =
          crdtProperty === 'text'
            ? new CRText(value as CRTextSnapshot)
            : crdtProperty === 'set'
              ? new CRSet(value as CRSetSnapshot<unknown>)
              : crdtProperty === 'list'
                ? new CRList(value as CRListSnapshot<unknown>)
                : new CRMap(value as CRMapSnapshot<string, unknown>)

        Object.defineProperty(this, key, {
          value: nested,
          enumerable: true,
          configurable: true,
          writable: false,
        })
        continue
      }

      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get(): Shape[typeof key] {
          return (state[key] ?? defaults[key]) as Shape[typeof key]
        },
        set(value: Shape[typeof key]): void {
          this.validateFormat(key, value)
          this.ensureStateEntry(key)
          ;(state as Record<string, unknown>)[key] = value
        },
      })
    }

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
            SchemaCRDTEventMap<CRThingDefaultShape<Type>>[typeof type]
          >
        ).detail
        if (typeof detail === 'object' && detail !== null) {
          const filtered = {} as SchemaCRDTEventMap<
            CRThingDefaultShape<Type>
          >[typeof type]

          for (const [key, value] of Object.entries(
            detail as Record<
              string,
              SchemaCRDTEventMap<CRThingDefaultShape<Type>>[typeof type]
            >
          )) {
            if (!isRouted(key)) {
              ;(
                filtered as Record<
                  string,
                  SchemaCRDTEventMap<CRThingDefaultShape<Type>>[typeof type]
                >
              )[key] = value
            }
          }

          if (Object.keys(filtered as Record<string, never>).length === 0) {
            return
          }

          void this.eventTarget.dispatchEvent(
            new CustomEvent<SchemaCRDTEventMap<Shape>[typeof type]>(type, {
              detail: filtered as SchemaCRDTEventMap<Shape>[typeof type],
            })
          )
          return
        }

        void this.eventTarget.dispatchEvent(
          new CustomEvent<SchemaCRDTEventMap<Shape>[typeof type]>(type, {
            detail: detail as SchemaCRDTEventMap<Shape>[typeof type],
          })
        )
      })
    }

    for (const key of Object.keys(this) as Array<
      Extract<keyof Shape, string>
    >) {
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
            new CustomEvent<SchemaCRDTEventMap<Shape>[typeof type]>(type, {
              detail: {
                [key]: (
                  event as CustomEvent<SchemaCRDTPropertyEventMap[typeof type]>
                ).detail,
              } as SchemaCRDTEventMap<Shape>[typeof type],
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
    crStructDelta: CRStructDelta<Shape> | Partial<Record<keyof Shape, unknown>>
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

      const deltaValue =
        typeof value === 'object' &&
        value !== null &&
        'uuidv7' in value &&
        'value' in value
          ? (value as { value: unknown }).value
          : value
      this.validateFormat(key as Extract<keyof Shape, string>, deltaValue)
      const installed = this.ensureStateEntry(
        key as Extract<keyof Shape, string>,
        value
      )

      if (installed) {
        void this.eventTarget.dispatchEvent(
          new CustomEvent<SchemaCRDTEventMap<Shape>['change']>('change', {
            detail: {
              [key]: deltaValue,
            } as SchemaCRDTEventMap<Shape>['change'],
          })
        )
        continue
      }

      void this.state.merge({
        [key]: value,
      } as CRStructDelta<Shape>)
    }
  }

  protected validateFormat(
    key: Extract<keyof Shape, string>,
    value: unknown
  ): void {
    const validator = this.formatValidators[key]

    if (!validator || typeof value !== 'string') {
      return
    }

    validator.lastIndex = 0

    if (!validator.test(value)) {
      throw new SchemaCRDTError('VALIDATION_FAILED', `Invalid value for ${key}`)
    }
  }

  private ensureStateEntry(
    key: Extract<keyof Shape, string>,
    snapshotEntry?: unknown
  ): boolean {
    const internalState = this.state as unknown as {
      __state?: {
        defaults: Record<string, unknown>
        entries: Record<string, unknown>
      }
    }

    if (
      !internalState.__state ||
      Object.hasOwn(internalState.__state.entries, key)
    ) {
      return false
    }

    if (
      snapshotEntry &&
      typeof snapshotEntry === 'object' &&
      'uuidv7' in snapshotEntry &&
      'value' in snapshotEntry &&
      'predecessor' in snapshotEntry &&
      'tombstones' in snapshotEntry
    ) {
      const snapshotSeed = new CRStruct(
        {
          [key]: internalState.__state.defaults[key],
        } as Record<string, unknown>,
        {
          [key]: snapshotEntry,
        } as Partial<CRStructSnapshot<Record<string, unknown>>>,
        true
      ) as unknown as {
        __state?: {
          entries: Record<string, unknown>
        }
      }
      const snapshotSeedEntry = snapshotSeed.__state?.entries[key]

      if (snapshotSeedEntry) {
        internalState.__state.entries[key] = snapshotSeedEntry
        return true
      }
    }

    const seed = new CRStruct({
      [key]: internalState.__state.defaults[key],
    }) as unknown as {
      __state?: {
        entries: Record<string, unknown>
      }
    }
    const entry = seed.__state?.entries[key]

    if (entry) {
      internalState.__state.entries[key] = entry
    }

    return false
  }

  /**
   * Emits the current acknowledgement frontier for each field.
   */
  acknowledge(): void {
    void this.state.acknowledge()

    for (const key of Object.keys(this) as Array<
      Extract<keyof Shape, string>
    >) {
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
  garbageCollect(frontiers: Array<SchemaCRDTEventMap<Shape>['ack']>): void {
    for (const frontier of frontiers) {
      if (typeof frontier !== 'object' || frontier === null) {
        continue
      }

      for (const [key, ack] of Object.entries(
        frontier as Partial<Record<Extract<keyof Shape, string>, unknown>>
      )) {
        const target = this[key as keyof this] as unknown

        if (
          typeof target === 'object' &&
          target !== null &&
          'garbageCollect' in target
        ) {
          void (
            target as { garbageCollect(frontiers: Array<unknown>): void }
          ).garbageCollect([ack])
          continue
        }

        if (typeof ack === 'string') {
          void this.state.garbageCollect([{ [key]: ack } as CRStructAck<Shape>])
        }
      }
    }
  }

  /**
   * Emits the current serializable snapshot of the replica state.
   */
  snapshot(): void {
    void this.eventTarget.dispatchEvent(
      new CustomEvent<SchemaCRDTEventMap<Shape>['snapshot']>('snapshot', {
        detail: this.toJSON(),
      })
    )
  }

  /**
   * Returns the struct field keys.
   *
   * @returns The field keys in the current replica.
   */
  keys<K extends keyof Shape>(): Array<K> {
    return this.state.keys() as Array<K>
  }

  /**
   * Resets every field in the replica back to its default value.
   */
  clear(): void {
    for (const key of this.state.keys<Extract<keyof Shape, string>>()) {
      delete (this.state as Record<string, unknown>)[key]
    }
  }

  /**
   * Returns a cloned plain object view of the current replica fields.
   *
   * @returns The current field values keyed by field name.
   */
  clone(): Shape {
    return this.state.clone()
  }

  /**
   * Returns cloned copies of the current field values.
   *
   * @returns The current field values.
   */
  values<K extends keyof Shape>(): Array<Shape[K]> {
    return this.state.values<K>()
  }

  /**
   * Returns cloned key-value pairs for the current replica state.
   *
   * @returns The current field entries.
   */
  entries<K extends keyof Shape>(): Array<[K, Shape[K]]> {
    return this.state.entries<K>()
  }

  /**
   * Returns the current serializable snapshot projection of this replica.
   *
   * Called automatically by `JSON.stringify`.
   */
  toJSON(): CRStructSnapshot<Shape> {
    return this.state.toJSON()
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
  [Symbol.for('nodejs.util.inspect.custom')](): CRStructSnapshot<Shape> {
    return this.toJSON()
  }
  /**
   * Returns the Deno console inspection representation.
   */
  [Symbol.for('Deno.customInspect')](): CRStructSnapshot<Shape> {
    return this.toJSON()
  }
  /**
   * Iterates over the current live field entries.
   */
  *[Symbol.iterator](): IterableIterator<[keyof Shape, Shape[keyof Shape]]> {
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
  addEventListener<K extends keyof SchemaCRDTEventMap<Shape>>(
    type: K,
    listener: SchemaCRDTEventListenerFor<Shape, K> | null,
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
  removeEventListener<K extends keyof SchemaCRDTEventMap<Shape>>(
    type: K,
    listener: SchemaCRDTEventListenerFor<Shape, K> | null,
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
