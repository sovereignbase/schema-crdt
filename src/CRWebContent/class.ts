import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'

import type {
  CRWebContentDefaultShape,
  CRWebContentState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org WebContent.
 *
 * Schema.org: Web-addressable content where the distinction between WebPage,
 * WebSite and WebPageElement is not important or obvious.
 */
export class CRWebContent<
  Type = 'WebContent',
  Shape extends CRWebContentDefaultShape<Type> = CRWebContentDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRWebContentState<Type>
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
        '@type': 'WebContent' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties
    )
  }
}

export * from './types/types.js'
