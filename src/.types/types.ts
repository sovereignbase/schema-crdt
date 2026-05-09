import type {
  CRStructSnapshot,
  CRStructDelta,
  CRStructChange,
  CRStructAck,
} from '@sovereignbase/convergent-replicated-struct'
import type {
  CRTextSnapshot,
  CRTextDelta,
  CRTextChange,
  CRTextAck,
} from '@sovereignbase/convergent-replicated-text'
import type {
  CRSetSnapshot,
  CRSetDelta,
  CRSetChange,
  CRSetAck,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRListSnapshot,
  CRListDelta,
  CRListChange,
  CRListAck,
} from '@sovereignbase/convergent-replicated-list'
import type {
  CRMapSnapshot,
  CRMapDelta,
  CRMapChange,
  CRMapAck,
} from '@sovereignbase/convergent-replicated-map'

/**
 * Partial CRStruct snapshot where selected keys stay required.
 */
export type CRStructPartialSnapshot<
  T extends Record<string, unknown>,
  Required extends keyof T = never,
> = Pick<CRStructSnapshot<T>, Required> &
  Partial<Omit<CRStructSnapshot<T>, Required>>

/**
 * Schema.org Boolean primitive.
 */
export type SchemaOrgBoolean = boolean

/**
 * Schema.org Date primitive.
 */
export type SchemaOrgDate = string

/**
 * Schema.org DateTime primitive.
 */
export type SchemaOrgDateTime = string

/**
 * Schema.org Time primitive.
 */
export type SchemaOrgTime = string

/**
 * Schema.org Number primitive.
 */
export type SchemaOrgNumber = number

/**
 * Schema.org Float primitive.
 */
export type SchemaOrgFloat = number

/**
 * Schema.org Integer primitive.
 */
export type SchemaOrgInteger = number

/**
 * Schema.org Text primitive.
 */
export type SchemaOrgText = string

/**
 * Schema.org postalCode primitive.
 *
 * Postal code formats are jurisdiction-specific, so this type names the
 * schema.org property domain without pretending there is one global regex.
 */
export type SchemaOrgPostalCode = string

/**
 * Schema.org URL primitive.
 */
export type SchemaOrgURL = string

/**
 * Schema.org CssSelectorType primitive.
 */
export type SchemaOrgCssSelectorType = string

/**
 * Schema.org XPathType primitive.
 */
export type SchemaOrgXPathType = string

/***/

/**
 * Property-specific regular expressions for Schema.org values that define a
 * clear lexical format in addition to the CRDT type shape.
 */
export type SchemaCRDTFormatValidators<T extends Record<string, unknown>> =
  Partial<Record<Extract<keyof T, string>, RegExp>>

/**
 * Event payload union for nested CRDT property instances.
 */
export type SchemaCRDTPropertyEventMap = {
  /**
   * Nested CRDT snapshot event payload.
   */
  snapshot:
    | CRTextSnapshot
    | CRSetSnapshot<unknown>
    | CRListSnapshot<unknown>
    | CRMapSnapshot<string, unknown>
  /**
   * Nested CRDT change event payload.
   */
  change:
    | CRTextChange
    | CRSetChange<unknown>
    | CRListChange<unknown>
    | CRMapChange<string, unknown>
  /**
   * Nested CRDT delta event payload.
   */
  delta:
    | CRTextDelta
    | CRSetDelta<unknown>
    | CRListDelta<unknown>
    | CRMapDelta<string, unknown>
  /**
   * Nested CRDT acknowledgement frontier payload.
   */
  ack: CRTextAck | CRSetAck | CRListAck | CRMapAck
}

/**
 * Event payload map after routing nested CRDT events through their owning
 * Schema.org property key.
 */
export type SchemaCRDTRoutedEventMap<T extends Record<string, unknown>> = {
  /**
   * Routed snapshot payload keyed by Schema.org property.
   */
  snapshot: Partial<{
    [K in keyof T]:
      | CRStructSnapshot<T>[K]
      | SchemaCRDTPropertyEventMap['snapshot']
  }>
  /**
   * Routed change payload keyed by Schema.org property.
   */
  change: Partial<{
    [K in keyof T]: T[K] | SchemaCRDTPropertyEventMap['change']
  }>
  /**
   * Routed delta payload keyed by Schema.org property.
   */
  delta: Partial<{
    [K in keyof T]: CRStructSnapshot<T>[K] | SchemaCRDTPropertyEventMap['delta']
  }>
  /**
   * Routed acknowledgement frontier keyed by Schema.org property.
   */
  ack: Partial<Record<keyof T, string | SchemaCRDTPropertyEventMap['ack']>>
}

/**
 * Maps Schema CRDT event names to their event payload shapes.
 */
export type SchemaCRDTEventMap<T extends Record<string, unknown>> = {
  /** STATE / PROJECTION */
  snapshot: CRStructSnapshot<T> | SchemaCRDTRoutedEventMap<T>['snapshot']
  change: CRStructChange<T> | SchemaCRDTRoutedEventMap<T>['change']

  /** GOSSIP / PROTOCOL */
  delta: CRStructDelta<T> | SchemaCRDTRoutedEventMap<T>['delta']
  ack: CRStructAck<T> | SchemaCRDTRoutedEventMap<T>['ack']
}

/**
 * Represents a strongly typed Schema CRDT event listener.
 */
export type SchemaCRDTEventListener<
  T extends Record<string, unknown>,
  K extends keyof SchemaCRDTEventMap<T>,
> =
  | ((event: CustomEvent<SchemaCRDTEventMap<T>[K]>) => void)
  | { handleEvent(event: CustomEvent<SchemaCRDTEventMap<T>[K]>): void }

/**
 * Resolves an event name to its corresponding listener type.
 */
export type SchemaCRDTEventListenerFor<
  T extends Record<string, unknown>,
  K extends string,
> = K extends keyof SchemaCRDTEventMap<T>
  ? SchemaCRDTEventListener<T, K>
  : EventListenerOrEventListenerObject
