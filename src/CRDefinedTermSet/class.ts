import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRDefinedTermSetDefaultShape,
  CRDefinedTermSetState,
} from './types/types.js'

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
  declare public readonly '@type': Type
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
