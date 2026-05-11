import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type { CRActionDefaultShape, CRActionState } from './types/types.js'

/**
 * CRDT-backed Schema.org Action.
 *
 * Schema.org: An action performed by a direct agent and indirect participants
 * upon a direct object.
 */
export class CRAction<
  Type = 'Action',
  Shape extends CRActionDefaultShape<Type> = CRActionDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRActionState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org actionProcess: Description of the process by which the action
   * was performed.
   */
  declare public actionProcess: CRActionState<Type>['actionProcess']
  /**
   * Schema.org actionStatus: Indicates the current disposition of the Action.
   */
  declare public actionStatus: CRActionState<Type>['actionStatus']
  /**
   * Schema.org agent: The direct performer or driver of the action.
   */
  declare public agent: CRActionState<Type>['agent']
  /**
   * Schema.org endTime: When the action ended.
   */
  declare public endTime: CRActionState<Type>['endTime']
  /**
   * Schema.org error: For failed actions, more information on the cause.
   */
  declare public error: CRActionState<Type>['error']
  /**
   * Schema.org instrument: The object that helped the agent perform the action.
   */
  declare public instrument: CRActionState<Type>['instrument']
  /**
   * Schema.org location: Where the action takes place.
   */
  declare public location: CRActionState<Type>['location']
  /**
   * Schema.org object: The object upon which the action is carried out.
   */
  declare public object: CRActionState<Type>['object']
  /**
   * Schema.org participant: Other co-agents that participated indirectly.
   */
  declare public participant: CRActionState<Type>['participant']
  /**
   * Schema.org provider: The service provider, operator or performer.
   */
  declare public provider: CRActionState<Type>['provider']
  /**
   * Schema.org result: The result produced in the action.
   */
  declare public result: CRActionState<Type>['result']
  /**
   * Schema.org startTime: When the action started.
   */
  declare public startTime: CRActionState<Type>['startTime']
  /**
   * Schema.org target: An EntryPoint or URL target for the Action.
   */
  declare public target: CRActionState<Type>['target']

  constructor(
    snapshot?: Snapshot,
    defaultShape?: Partial<Shape>,
    crdtProperties?: Partial<
      Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
    >
  ) {
    super(
      snapshot,
      {
        '@type': 'Action' as Type,
        actionProcess: crSetSnapshot,
        actionStatus: '',
        agent: crSetSnapshot,
        endTime: '',
        error: crSetSnapshot,
        instrument: crSetSnapshot,
        location: crSetSnapshot,
        object: crSetSnapshot,
        participant: crSetSnapshot,
        provider: crSetSnapshot,
        result: crSetSnapshot,
        startTime: '',
        target: crSetSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        actionProcess: 'set',
        agent: 'set',
        error: 'set',
        instrument: 'set',
        location: 'set',
        object: 'set',
        participant: 'set',
        provider: 'set',
        result: 'set',
        target: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
