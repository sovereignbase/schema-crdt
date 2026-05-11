import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'

import type {
  CRProductReturnPolicyDefaultShape,
  CRProductReturnPolicyState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org ProductReturnPolicy.
 *
 * Schema.org: A product return policy.
 */
export class CRProductReturnPolicy<
  Type = 'ProductReturnPolicy',
  Shape extends CRProductReturnPolicyDefaultShape<Type> =
    CRProductReturnPolicyDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRProductReturnPolicyState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org productReturnDays: The productReturnDays property indicates the
   * number of days from delivery that a product can be returned.
   */
  declare public productReturnDays: CRProductReturnPolicyState<Type>['productReturnDays']
  /**
   * Schema.org productReturnLink: Link to product return policy information.
   */
  declare public productReturnLink: CRProductReturnPolicyState<Type>['productReturnLink']

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
        '@type': 'ProductReturnPolicy' as Type,
        productReturnDays: 0,
        productReturnLink: '',
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
