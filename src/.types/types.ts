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

export type CRStructPartialSnapshot<
  T extends Record<string, unknown>,
  Required extends keyof T = never,
> = Pick<CRStructSnapshot<T>, Required> &
  Partial<Omit<CRStructSnapshot<T>, Required>>

export type SchemaOrgBoolean = boolean

export type SchemaOrgDate = string
export type SchemaOrgDateTime = string
export type SchemaOrgTime = string

export type SchemaOrgNumber = number
export type SchemaOrgFloat = number
export type SchemaOrgInteger = number

export type SchemaOrgText = string
export type SchemaOrgURL = string
export type SchemaOrgCssSelectorType = string
export type SchemaOrgXPathType = string

/***/

export type SchemaCRDTFormatValidators<T extends Record<string, unknown>> =
  Partial<Record<Extract<keyof T, string>, RegExp>>

export type SchemaCRDTPropertyEventMap = {
  snapshot:
    | CRTextSnapshot
    | CRSetSnapshot<unknown>
    | CRListSnapshot<unknown>
    | CRMapSnapshot<string, unknown>
  change:
    | CRTextChange
    | CRSetChange<unknown>
    | CRListChange<unknown>
    | CRMapChange<string, unknown>
  delta:
    | CRTextDelta
    | CRSetDelta<unknown>
    | CRListDelta<unknown>
    | CRMapDelta<string, unknown>
  ack: CRTextAck | CRSetAck | CRListAck | CRMapAck
}

export type SchemaCRDTRoutedEventMap<T extends Record<string, unknown>> = {
  snapshot: Partial<{
    [K in keyof T]:
      | CRStructSnapshot<T>[K]
      | SchemaCRDTPropertyEventMap['snapshot']
  }>
  change: Partial<{
    [K in keyof T]: T[K] | SchemaCRDTPropertyEventMap['change']
  }>
  delta: Partial<{
    [K in keyof T]: CRStructSnapshot<T>[K] | SchemaCRDTPropertyEventMap['delta']
  }>
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
