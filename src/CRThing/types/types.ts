import type { Thing } from 'schema-dts'
import type { OpaqueIdentifier } from '@sovereignbase/cryptosuite'
import type {
  CRTextSnapshot,
  CRText,
} from '@sovereignbase/convergent-replicated-text'
import type {
  CRSetSnapshot,
  CRSet,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'
import type { CRTypedIdReferenceValue } from '../../CRIdReference/types/types.js'

type SchemaOrgThingRaw = Extract<Thing, { '@type': 'Thing' }>

type SchemaOrgThing = Partial<SchemaOrgThingRaw>

/**
 * Values accepted by Schema.org owner.
 */
export type CRThingOwner =
  | CRTypedIdReferenceValue<'Organization'>
  | CRTypedIdReferenceValue<'Person'>

/**
 * Serializable CRDT shape for Schema.org Thing.
 *
 * Schema.org: The most generic type of item.
 */
export type CRThingDefaultShape<T = 'Thing'> = {
  /**
   * JSON-LD identifier for this node.
   */
  '@id': OpaqueIdentifier
  /**
   * Schema.org type name for this node.
   */
  '@type': T
  /**
   * Schema.org additionalType: An additional type for the item, typically used
   * for adding more specific types from external vocabularies.
   */
  additionalType: CRSetSnapshot<SchemaOrgURL | SchemaOrgText>
  /**
   * Schema.org alternateName: An alias for the item.
   */
  alternateName: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org description: A description of the item.
   */
  description: CRTextSnapshot
  /**
   * Schema.org disambiguatingDescription: A short description used to
   * disambiguate the item from other, similar items.
   */
  disambiguatingDescription: CRTextSnapshot
  /**
   * Schema.org identifier represented by this package as an opaque identifier.
   */
  identifier: OpaqueIdentifier
  /**
   * Schema.org image: An image of the item.
   */
  image: string
  /**
   * Schema.org mainEntityOfPage: A page or other CreativeWork for which this
   * thing is the main entity being described.
   */
  mainEntityOfPage: SchemaOrgURL
  /**
   * Schema.org name: The name of the item.
   */
  name: CRTextSnapshot
  /**
   * Schema.org owner: A person or organization who owns this Thing.
   */
  owner: CRThingOwner
  /**
   * Schema.org potentialAction: A potential Action describing an idealized
   * action in which this thing would play an object role.
   */
  potentialAction?: string
  /**
   * Schema.org sameAs: URL of a reference Web page that unambiguously indicates
   * the item's identity.
   */
  sameAs: CRSetSnapshot<SchemaOrgURL>
  /**
   * Schema.org subjectOf: A CreativeWork or Event about this Thing.
   */
  subjectOf: CRSetSnapshot<string>
  /**
   * Schema.org url: URL of the item.
   */
  url: SchemaOrgURL
}

/**
 * Serializable CRDT snapshot for Schema.org Thing.
 */
export type CRThingSnapshot = CRStructPartialSnapshot<
  CRThingDefaultShape,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgThing, keyof CRThingSnapshot>

type ExtraKeys = Exclude<keyof CRThingSnapshot, keyof SchemaOrgThing>

/**
 * Runtime CRDT state surface for Schema.org Thing.
 */
export type CRThingState<T = 'Thing'> = {
  /**
   * JSON-LD identifier for this node.
   */
  '@id': Readonly<OpaqueIdentifier>
  /**
   * Schema.org type name for this node.
   */
  '@type': Readonly<T>
  /**
   * Schema.org additionalType: An additional type for the item.
   */
  additionalType: Readonly<CRSet<string>>
  /**
   * Schema.org alternateName: An alias for the item.
   */
  alternateName: Readonly<CRSet<string>>
  /**
   * Schema.org description: A description of the item.
   */
  description: Readonly<CRText>
  /**
   * Schema.org disambiguatingDescription: A short description used to
   * disambiguate the item from other, similar items.
   */
  disambiguatingDescription: Readonly<CRText>
  /**
   * Schema.org identifier represented by this package as an opaque identifier.
   */
  identifier: Readonly<OpaqueIdentifier>
  /**
   * Schema.org image: An image of the item.
   */
  image: string
  /**
   * Schema.org mainEntityOfPage: A page or other CreativeWork for which this
   * thing is the main entity being described.
   */
  mainEntityOfPage: string
  /**
   * Schema.org name: The name of the item.
   */
  name: Readonly<CRText>
  /**
   * Schema.org owner: A person or organization who owns this Thing.
   */
  owner: CRThingOwner
  /**
   * Schema.org potentialAction: A potential Action for this Thing.
   */
  potentialAction: string
  /**
   * Schema.org sameAs: URL of a reference Web page that unambiguously indicates
   * the item's identity.
   */
  sameAs: Readonly<CRSet<string>>
  /**
   * Schema.org subjectOf: A CreativeWork or Event about this Thing.
   */
  subjectOf: Readonly<CRSet<string>>
  /**
   * Schema.org url: URL of the item.
   */
  url: string
}
