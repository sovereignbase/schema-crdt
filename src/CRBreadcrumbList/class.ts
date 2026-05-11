import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRItemList } from '../CRItemList/class.js'

import type {
  CRBreadcrumbListDefaultShape,
  CRBreadcrumbListState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org BreadcrumbList.
 *
 * Schema.org: A chain of linked Web pages in a website hierarchy.
 */
export class CRBreadcrumbList<
  Type = 'BreadcrumbList',
  Shape extends CRBreadcrumbListDefaultShape<Type> =
    CRBreadcrumbListDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRItemList<Type, Shape, Snapshot>
  implements CRBreadcrumbListState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type

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
        '@type': 'BreadcrumbList' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
