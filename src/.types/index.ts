import type {
  CRStructSnapshot,
  CRStructDelta,
  CRStructChange,
  CRStructAck,
} from '@sovereignbase/convergent-replicated-struct'

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

/**
 * Maps Schema CRDT event names to their event payload shapes.
 */
export type SchemaCRDTEventMap<T extends Record<string, unknown>> = {
  /** STATE / PROJECTION */
  snapshot: CRStructSnapshot<T>
  change: CRStructChange<T>

  /** GOSSIP / PROTOCOL */
  delta: CRStructDelta<T>
  ack: CRStructAck<T>
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
