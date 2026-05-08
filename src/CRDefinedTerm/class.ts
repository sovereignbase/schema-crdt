import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'
import { CRSet } from '@sovereignbase/convergent-replicated-set'
import { CRText } from '@sovereignbase/convergent-replicated-text'

import { CRThing } from '../CRThing/class.js'

import type {
  CRDefinedTermAbout,
  CRDefinedTermDefaultShape,
  CRDefinedTermSetReference,
  CRDefinedTermState,
} from './types/types.js'

export class CRDefinedTerm<
  Type = 'DefinedTerm',
  Shape extends CRDefinedTermDefaultShape<Type> =
    CRDefinedTermDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRDefinedTermState<Type>
{
  declare public readonly '@type': Type
  declare public about: CRDefinedTermState['about']
  declare public inDefinedTermSet: CRDefinedTermState['inDefinedTermSet']
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
        about: new CRSet<CRDefinedTermAbout>().toJSON(),
        inDefinedTermSet: new CRSet<CRDefinedTermSetReference>().toJSON(),
        termCode: new CRText().toJSON(),
        ...defaultShape,
      } as Partial<Shape>,
      {
        about: 'set',
        inDefinedTermSet: 'set',
        termCode: 'text',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
