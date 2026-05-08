import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type {
  CRDefinedTermDefaultShape,
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
        about: crSetSnapshot,
        inDefinedTermSet: crSetSnapshot,
        termCode: crTextSnapshot,
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
