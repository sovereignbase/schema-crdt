import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRDefinedTermSetDefaultShape,
  CRDefinedTermSetState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org DefinedTermSet.
 *
 * Schema.org: A set of defined terms, such as categories, a classification
 * scheme, a glossary, dictionary or enumeration.
 */
export class CRDefinedTermSet<
  Type = 'DefinedTermSet',
  Shape extends CRDefinedTermSetDefaultShape<Type> =
    CRDefinedTermSetDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRDefinedTermSetState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org hasDefinedTerm: A DefinedTerm contained in this term set.
   */
  declare public hasDefinedTerm: CRDefinedTermSetState['hasDefinedTerm']

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
        '@type': 'DefinedTermSet' as Type,
        hasDefinedTerm: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
        hasDefinedTerm: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
