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
import { v7 as uuidv7 } from 'uuid'

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
  SchemaCRDTCanonicalPresentationOptions,
  SchemaCRDTJSONLDDocument,
  SchemaCRDTJSONLDInput,
  SchemaCRDTJSONLDOptions,
  SchemaCRDTJSONLDValue,
  SchemaCRDTPropertyEventMap,
} from '../.types/types.js'
import { SchemaCRDTError } from '../.errors/class.js'

const schemaOrgJSONLDContext = { '@vocab': 'https://schema.org/' } as const

type JSONLDProcessor = {
  canonize(input: unknown, options: Record<string, unknown>): Promise<string>
  compact(input: unknown, context: unknown): Promise<unknown>
}

type StructuredDataValidator = {
  validate(data: unknown): Promise<
    Array<{
      issueMessage?: string
      severity?: string
    }>
  >
}

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
   * Constructs a fresh replica from a JSON-LD live presentation.
   *
   * This is intentionally a constructor-style import, not a CRDT merge path.
   * Use `merge()` for CRDT snapshots and deltas.
   *
   * @param document - Compacted or expanded Schema.org JSON-LD document to import.
   */
  static async fromJSONLD<Instance extends CRThing>(
    this: new (snapshot?: never) => Instance,
    document: SchemaCRDTJSONLDInput
  ): Promise<Instance> {
    if (!Array.isArray(document) && !CRThing.isRecord(document)) {
      throw new SchemaCRDTError(
        'VALIDATION_FAILED',
        'JSON-LD document must be an object or expanded document array.'
      )
    }

    const empty = new this()
    const compacted = await CRThing.compactJSONLDDocument(
      document,
      String(empty['@type'])
    )
    const documentType = CRThing.documentType(compacted)

    if (
      documentType &&
      empty['@type'] !== 'Thing' &&
      documentType !== empty['@type']
    ) {
      throw new SchemaCRDTError(
        'VALIDATION_FAILED',
        `JSON-LD @type ${documentType} does not match ${String(empty['@type'])}.`
      )
    }

    const replica = new this(
      CRThing.identitySnapshot(compacted, String(empty['@type'])) as never
    )
    replica.applyJSONLDDocument(compacted)

    return replica
  }

  /**
   * Exports the current live projection as Schema.org JSON-LD.
   *
   * This does not return CRDT state. `toJSON()` remains the CRStruct snapshot
   * projection used for replication and persistence.
   */
  toJSONLD(options: SchemaCRDTJSONLDOptions = {}): SchemaCRDTJSONLDDocument {
    const document: SchemaCRDTJSONLDDocument = {}
    const keys = new Set([...Object.keys(this), 'identifier'])

    if (options.context !== false) {
      document['@context'] = options.context ?? schemaOrgJSONLDContext
    }

    for (const key of keys) {
      if (key === '@type') {
        document['@type'] = String(this['@type'])
        continue
      }

      const value = CRThing.toJSONLDValue(this[key as keyof this])

      if (value !== undefined) {
        document[key] = value
      }
    }

    return document
  }

  /**
   * Returns canonical N-Quads for signing or hashing the live JSON-LD view.
   *
   * This canonicalizes the live Schema.org presentation from `toJSONLD()`.
   * If an application needs to sign the entire CRDT state, canonicalize
   * `toJSON()` separately at the application protocol layer.
   */
  async getCanonicalPresentation(
    options: SchemaCRDTCanonicalPresentationOptions = {}
  ): Promise<string> {
    const document = this.toJSONLD({ context: options.context })

    try {
      if (options.validate !== false) {
        await CRThing.validateJSONLD(document, options.schemaOrgJson)
      }

      const jsonld = await CRThing.loadJSONLD()

      return await jsonld.canonize(document, {
        algorithm: 'URDNA2015',
        format: 'application/n-quads',
        safe: options.safe ?? true,
        ...(options.documentLoader
          ? { documentLoader: options.documentLoader }
          : {}),
      })
    } catch (error) {
      if (error instanceof SchemaCRDTError) {
        throw error
      }

      throw new SchemaCRDTError(
        'CANONICALIZATION_FAILED',
        error instanceof Error ? error.message : String(error)
      )
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

  private static async validateJSONLD(
    document: SchemaCRDTJSONLDDocument,
    schemaOrgJson: unknown
  ): Promise<void> {
    const packageName: string = '@adobe/structured-data-validator'
    const Validator = (
      (await import(packageName)) as unknown as {
        default: new (schemaOrgJson?: unknown) => StructuredDataValidator
      }
    ).default
    const validator = new Validator(schemaOrgJson)
    const rootType = CRThing.documentType(document) ?? 'Thing'
    const issues = await validator.validate({
      jsonld: {
        [rootType]: [structuredClone(document)],
      },
      microdata: {},
      rdfa: {},
      errors: [],
    })
    const error = issues.find((issue) => issue.severity === 'ERROR')

    if (error) {
      throw new SchemaCRDTError(
        'VALIDATION_FAILED',
        error.issueMessage ?? 'Invalid JSON-LD presentation.'
      )
    }
  }

  private static async compactJSONLDDocument(
    document: SchemaCRDTJSONLDInput,
    expectedType: string
  ): Promise<SchemaCRDTJSONLDDocument> {
    const needsCompaction =
      Array.isArray(document) ||
      Object.keys(document).some(
        (key) =>
          key === '@graph' ||
          key.startsWith('https://schema.org/') ||
          key.startsWith('http://schema.org/')
      )

    try {
      const compacted = needsCompaction
        ? await (
            await CRThing.loadJSONLD()
          ).compact(document, schemaOrgJSONLDContext)
        : document

      return CRThing.selectJSONLDNode(compacted, expectedType)
    } catch (error) {
      if (error instanceof SchemaCRDTError) {
        throw error
      }

      throw new SchemaCRDTError(
        'VALIDATION_FAILED',
        error instanceof Error ? error.message : String(error)
      )
    }
  }

  private static async loadJSONLD(): Promise<JSONLDProcessor> {
    return (await import('jsonld')).default as unknown as JSONLDProcessor
  }

  private static selectJSONLDNode(
    document: unknown,
    expectedType: string
  ): SchemaCRDTJSONLDDocument {
    const nodes = Array.isArray(document)
      ? document.filter(CRThing.isRecord)
      : CRThing.isRecord(document) && Array.isArray(document['@graph'])
        ? document['@graph'].filter(CRThing.isRecord)
        : CRThing.isRecord(document)
          ? [document]
          : []
    const node =
      nodes.find((item) => CRThing.documentType(item) === expectedType) ??
      nodes[0]

    if (!node) {
      throw new SchemaCRDTError('VALIDATION_FAILED', 'JSON-LD node missing.')
    }

    return node as SchemaCRDTJSONLDDocument
  }

  private static identitySnapshot(
    document: SchemaCRDTJSONLDDocument,
    defaultType: string
  ): Partial<CRStructSnapshot<Record<string, unknown>>> {
    const snapshot: Partial<CRStructSnapshot<Record<string, unknown>>> = {}
    const id = document['@id']
    const type = CRThing.documentType(document)

    if (typeof id === 'string' && id.length > 0) {
      snapshot['@id'] = CRThing.snapshotEntry(id)
    }

    if (type && defaultType === 'Thing') {
      snapshot['@type'] = CRThing.snapshotEntry(type)
    }

    if (document.identifier !== undefined) {
      snapshot.identifier = CRThing.snapshotEntry(
        CRThing.cleanJSONLDInput(document.identifier)
      )
    }

    return snapshot
  }

  private static snapshotEntry(value: unknown): {
    uuidv7: string
    value: unknown
    predecessor: string
    tombstones: Array<string>
  } {
    const predecessor = uuidv7()

    return {
      uuidv7: uuidv7(),
      value,
      predecessor,
      tombstones: [predecessor],
    }
  }

  private static toJSONLDValue(
    value: unknown
  ): SchemaCRDTJSONLDValue | undefined {
    if (typeof value === 'string') {
      return value.length > 0 ? value : undefined
    }

    if (
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      value === null
    ) {
      return value
    }

    if (Array.isArray(value)) {
      return CRThing.cleanJSONLDArray(value)
    }

    if (!CRThing.isRecord(value)) {
      return undefined
    }

    if (
      typeof value.valueOf === 'function' &&
      typeof value.insertAfter === 'function'
    ) {
      const text = value.valueOf()
      return typeof text === 'string' && text.length > 0 ? text : undefined
    }

    if (typeof value.add === 'function' && typeof value.values === 'function') {
      return CRThing.cleanJSONLDArray(
        (value as { values(): Array<unknown> }).values()
      )
    }

    if (typeof value.append === 'function' && Symbol.iterator in value) {
      return CRThing.cleanJSONLDArray([...(value as Iterable<unknown>)])
    }

    if (
      typeof value.set === 'function' &&
      typeof value.entries === 'function'
    ) {
      const object: Record<string, SchemaCRDTJSONLDValue> = {}

      for (const [entryKey, entryValue] of (
        value as { entries(): Array<[string, unknown]> }
      ).entries()) {
        const next = CRThing.toJSONLDValue(entryValue)

        if (next !== undefined) {
          object[entryKey] = next
        }
      }

      return Object.keys(object).length > 0 ? object : undefined
    }

    if (CRThing.isStructSnapshotEntry(value)) {
      return CRThing.toJSONLDValue(value.value)
    }

    if (CRThing.isSequenceSnapshot(value)) {
      return CRThing.sequenceSnapshotToJSONLDValue(value)
    }

    const document: Record<string, SchemaCRDTJSONLDValue> = {}

    for (const [entryKey, entryValue] of Object.entries(value)) {
      if (entryKey === '@context') {
        continue
      }

      const next = CRThing.toJSONLDValue(entryValue)

      if (next !== undefined) {
        document[entryKey] = next
      }
    }

    return Object.keys(document).length > 0 ? document : undefined
  }

  private static cleanJSONLDArray(
    values: Array<unknown>
  ): Array<SchemaCRDTJSONLDValue> | undefined {
    const cleaned = values.flatMap((value) => {
      const next = CRThing.toJSONLDValue(value)
      return next === undefined ? [] : [next]
    })

    return cleaned.length > 0 ? cleaned : undefined
  }

  private static cleanJSONLDInput(value: unknown): unknown {
    if (Array.isArray(value)) {
      return value.map((item) => CRThing.cleanJSONLDInput(item))
    }

    if (!CRThing.isRecord(value)) {
      return value
    }

    const cleaned: Record<string, unknown> = {}

    for (const [key, item] of Object.entries(value)) {
      if (key !== '@context') {
        cleaned[key] = CRThing.cleanJSONLDInput(item)
      }
    }

    return cleaned
  }

  private static textFromJSONLDValue(value: unknown): string {
    if (typeof value === 'string') {
      return value
    }

    if (Array.isArray(value) && value.length === 1) {
      return CRThing.textFromJSONLDValue(value[0])
    }

    if (CRThing.isRecord(value) && typeof value['@value'] === 'string') {
      return value['@value']
    }

    throw new SchemaCRDTError(
      'VALIDATION_FAILED',
      'JSON-LD text value must be a string.'
    )
  }

  private static sequenceSnapshotToJSONLDValue(value: {
    values: Array<unknown>
  }): SchemaCRDTJSONLDValue | undefined {
    const entries = value.values.filter(CRThing.isRecord)
    const mapLike = entries.some(
      (entry) =>
        CRThing.isRecord(entry.value) &&
        Object.hasOwn(entry.value, 'key') &&
        Object.hasOwn(entry.value, 'value')
    )
    const rawValues = entries.map((entry) => {
      if (
        CRThing.isRecord(entry.value) &&
        Object.hasOwn(entry.value, 'key') &&
        Object.hasOwn(entry.value, 'value')
      ) {
        return entry.value.value
      }

      return entry.value
    })

    if (
      !mapLike &&
      rawValues.length > 0 &&
      rawValues.every((item) => typeof item === 'string')
    ) {
      return rawValues.join('')
    }

    return CRThing.cleanJSONLDArray(rawValues)
  }

  private static documentType(
    document: SchemaCRDTJSONLDDocument
  ): string | undefined {
    const type = document['@type']
    const normalize = (value: string): string =>
      value
        .replace(/^https:\/\/schema\.org\//, '')
        .replace(/^http:\/\/schema\.org\//, '')

    if (typeof type === 'string') {
      return normalize(type)
    }

    if (Array.isArray(type)) {
      const first = type.find(
        (item): item is string => typeof item === 'string'
      )
      return first ? normalize(first) : undefined
    }

    return undefined
  }

  private static isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
  }

  private static isStructSnapshotEntry(
    value: Record<string, unknown>
  ): value is { value: unknown } {
    return (
      'uuidv7' in value &&
      'value' in value &&
      'predecessor' in value &&
      'tombstones' in value
    )
  }

  private static isSequenceSnapshot(
    value: Record<string, unknown>
  ): value is { values: Array<unknown> } {
    return Array.isArray(value.values) && Array.isArray(value.tombstones)
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

  private applyJSONLDDocument(document: SchemaCRDTJSONLDDocument): void {
    for (const [key, value] of Object.entries(document)) {
      if (key.startsWith('@') || key === 'identifier' || value === undefined) {
        continue
      }

      const target = this[key as keyof this] as unknown

      if (
        CRThing.isRecord(target) &&
        typeof target.insertAfter === 'function' &&
        typeof target.valueOf === 'function' &&
        'size' in target
      ) {
        const text = CRThing.textFromJSONLDValue(value)

        if (text) {
          ;(
            target as { insertAfter(index: number, text: string): void }
          ).insertAfter(Number(target.size) - 1, text)
        }

        continue
      }

      if (
        CRThing.isRecord(target) &&
        typeof target.add === 'function' &&
        typeof target.values === 'function'
      ) {
        for (const item of Array.isArray(value) ? value : [value]) {
          ;(target as { add(value: unknown): void }).add(
            CRThing.cleanJSONLDInput(item)
          )
        }

        continue
      }

      if (CRThing.isRecord(target) && typeof target.append === 'function') {
        for (const item of Array.isArray(value) ? value : [value]) {
          ;(target as { append(value: unknown): void }).append(
            CRThing.cleanJSONLDInput(item)
          )
        }

        continue
      }

      if (
        CRThing.isRecord(target) &&
        typeof target.set === 'function' &&
        typeof target.entries === 'function'
      ) {
        if (!CRThing.isRecord(value)) {
          throw new SchemaCRDTError(
            'VALIDATION_FAILED',
            `JSON-LD ${key} must be an object.`
          )
        }

        for (const [entryKey, entryValue] of Object.entries(value)) {
          if (entryValue !== undefined) {
            ;(target as { set(key: string, value: unknown): void }).set(
              entryKey,
              CRThing.cleanJSONLDInput(entryValue)
            )
          }
        }

        continue
      }

      if (Object.hasOwn(this, key)) {
        ;(this as Record<string, unknown>)[key] =
          CRThing.cleanJSONLDInput(value)
      }
    }
  }
}

export * from './types/types.js'
