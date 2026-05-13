import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRDefinedTermDefaultShape,
  CRDefinedTermState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org DefinedTerm.
 *
 * Schema.org: A word, name, acronym, phrase, etc. with a formal definition.
 */
export class CRDefinedTerm<
  Type = 'DefinedTerm',
  Shape extends CRDefinedTermDefaultShape<Type> =
    CRDefinedTermDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRDefinedTermState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org about: The subject matter of an object.
   */
  declare public about: CRDefinedTermState['about']
  /**
   * Schema.org inDefinedTermSet: A DefinedTermSet that contains this term.
   */
  declare public inDefinedTermSet: CRDefinedTermState['inDefinedTermSet']
  /**
   * Schema.org termCode: A code that identifies this DefinedTerm within a
   * DefinedTermSet.
   */
  declare public termCode: CRDefinedTermState['termCode']

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
        '@type': 'DefinedTerm' as Type,
        about: crSetSnapshot,
        inDefinedTermSet: crSetSnapshot,
        termCode: '',
        ...defaultShape,
      } as Partial<Shape>,
      {
        about: 'set',
        inDefinedTermSet: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
