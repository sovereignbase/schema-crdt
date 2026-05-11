import type { Action } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type { CRActionStatusTypeSnapshot } from '../../CRActionStatusType/types/types.js'
import type { CREntryPointSnapshot } from '../../CREntryPoint/types/types.js'
import type { CRHowToSnapshot } from '../../CRHowTo/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CROrganizationSnapshot } from '../../CROrganization/types/types.js'
import type { CRPersonSnapshot } from '../../CRPerson/types/types.js'
import type { CRPlaceSnapshot } from '../../CRPlace/types/types.js'
import type { CRPostalAddressSnapshot } from '../../CRPostalAddress/types/types.js'
import type {
  CRThingDefaultShape,
  CRThingSnapshot,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRVirtualLocationSnapshot } from '../../CRVirtualLocation/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgDateTime,
  SchemaOrgText,
  SchemaOrgTime,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgActionRaw = Extract<Action, { '@type': 'Action' }>

type SchemaOrgAction = Partial<SchemaOrgActionRaw>

/**
 * Values accepted by Schema.org actionProcess.
 */
export type CRActionProcess =
  | CRHowToSnapshot
  | CRTypedIdReferenceValue<'HowTo'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org actionStatus.
 */
export type CRActionStatus =
  | CRActionStatusTypeSnapshot
  | CRTypedIdReferenceValue<'ActionStatusType'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org agent, participant and provider.
 */
export type CRActionPersonOrOrganization =
  | CROrganizationSnapshot
  | CRPersonSnapshot
  | CRTypedIdReferenceValue<'Organization'>
  | CRTypedIdReferenceValue<'Person'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org error, instrument, object and result.
 */
export type CRActionThing = CRThingSnapshot | CRIdReferenceValue

/**
 * Values accepted by Schema.org location.
 */
export type CRActionLocation =
  | CRPlaceSnapshot
  | CRPostalAddressSnapshot
  | CRVirtualLocationSnapshot
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org target.
 */
export type CRActionTarget =
  | CREntryPointSnapshot
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org Action.
 *
 * Schema.org: An action performed by a direct agent and indirect participants
 * upon a direct object.
 */
export type CRActionDefaultShape<Type = 'Action'> = {
  /**
   * Schema.org actionProcess: Description of the process by which the action
   * was performed.
   */
  actionProcess: CRSetSnapshot<CRActionProcess>
  /**
   * Schema.org actionStatus: Indicates the current disposition of the Action.
   */
  actionStatus: CRActionStatus
  /**
   * Schema.org agent: The direct performer or driver of the action.
   */
  agent: CRSetSnapshot<CRActionPersonOrOrganization>
  /**
   * Schema.org endTime: When the action ended.
   */
  endTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org error: For failed actions, more information on the cause.
   */
  error: CRSetSnapshot<CRActionThing>
  /**
   * Schema.org instrument: The object that helped the agent perform the action.
   */
  instrument: CRSetSnapshot<CRActionThing>
  /**
   * Schema.org location: Where the action takes place.
   */
  location: CRSetSnapshot<CRActionLocation>
  /**
   * Schema.org object: The object upon which the action is carried out.
   */
  object: CRSetSnapshot<CRActionThing>
  /**
   * Schema.org participant: Other co-agents that participated indirectly.
   */
  participant: CRSetSnapshot<CRActionPersonOrOrganization>
  /**
   * Schema.org provider: The service provider, operator or performer.
   */
  provider: CRSetSnapshot<CRActionPersonOrOrganization>
  /**
   * Schema.org result: The result produced in the action.
   */
  result: CRSetSnapshot<CRActionThing>
  /**
   * Schema.org startTime: When the action started.
   */
  startTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org target: An EntryPoint or URL target for the Action.
   */
  target: CRSetSnapshot<CRActionTarget>
} & CRThingDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org Action.
 */
export type CRActionSnapshot<Type = 'Action'> = CRStructPartialSnapshot<
  CRActionDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

type MissingKeys = Exclude<keyof SchemaOrgAction, keyof CRActionSnapshot>

type ExtraKeys = Exclude<keyof CRActionSnapshot, keyof SchemaOrgAction>

/**
 * Runtime CRDT state surface for Schema.org Action.
 */
export type CRActionState<Type = 'Action'> = {
  /**
   * Schema.org actionProcess: Description of the process by which the action
   * was performed.
   */
  actionProcess: Readonly<CRSet<CRActionProcess>>
  /**
   * Schema.org actionStatus: Indicates the current disposition of the Action.
   */
  actionStatus: CRActionStatus
  /**
   * Schema.org agent: The direct performer or driver of the action.
   */
  agent: Readonly<CRSet<CRActionPersonOrOrganization>>
  /**
   * Schema.org endTime: When the action ended.
   */
  endTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org error: For failed actions, more information on the cause.
   */
  error: Readonly<CRSet<CRActionThing>>
  /**
   * Schema.org instrument: The object that helped the agent perform the action.
   */
  instrument: Readonly<CRSet<CRActionThing>>
  /**
   * Schema.org location: Where the action takes place.
   */
  location: Readonly<CRSet<CRActionLocation>>
  /**
   * Schema.org object: The object upon which the action is carried out.
   */
  object: Readonly<CRSet<CRActionThing>>
  /**
   * Schema.org participant: Other co-agents that participated indirectly.
   */
  participant: Readonly<CRSet<CRActionPersonOrOrganization>>
  /**
   * Schema.org provider: The service provider, operator or performer.
   */
  provider: Readonly<CRSet<CRActionPersonOrOrganization>>
  /**
   * Schema.org result: The result produced in the action.
   */
  result: Readonly<CRSet<CRActionThing>>
  /**
   * Schema.org startTime: When the action started.
   */
  startTime: SchemaOrgDateTime | SchemaOrgTime
  /**
   * Schema.org target: An EntryPoint or URL target for the Action.
   */
  target: Readonly<CRSet<CRActionTarget>>
} & CRThingState<Type>
