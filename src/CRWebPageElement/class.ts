import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRWebPageElementDefaultShape,
  CRWebPageElementState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org WebPageElement.
 *
 * Schema.org: A web page element, like a table or an image.
 */
export class CRWebPageElement<
  Type = 'WebPageElement',
  Shape extends CRWebPageElementDefaultShape<Type> =
    CRWebPageElementDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRWebPageElementState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org cssSelector: A CSS selector for a WebPageElement.
   */
  declare public cssSelector: CRWebPageElementState<Type>['cssSelector']
  /**
   * Schema.org xpath: An XPath for a WebPageElement.
   */
  declare public xpath: CRWebPageElementState<Type>['xpath']

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
        '@type': 'WebPageElement' as Type,
        cssSelector: crSetSnapshot,
        xpath: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
        cssSelector: 'set',
        xpath: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
