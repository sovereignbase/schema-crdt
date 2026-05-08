import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'
import { CRSet } from '@sovereignbase/convergent-replicated-set'

import { CRThing } from '../CRThing/class.js'

import type {
  CRCreativeWorkAbout,
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from './types/types.js'

export class CRCreativeWork<
  Type = 'CreativeWork',
  Shape extends CRCreativeWorkDefaultShape<Type> =
    CRCreativeWorkDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRCreativeWorkState<Type>
{
  declare public readonly '@type': Type
  declare public about: CRCreativeWorkState['about']

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
        '@type': 'CreativeWork' as Type,
        about: new CRSet<CRCreativeWorkAbout>().toJSON(),
        ...defaultShape,
      } as Partial<Shape>,
      {
        about: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
