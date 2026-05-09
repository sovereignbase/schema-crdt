import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRPropertyValue } from '../CRPropertyValue/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRLocationFeatureSpecificationDefaultShape,
  CRLocationFeatureSpecificationState,
} from './types/types.js'

export class CRLocationFeatureSpecification<
  Type = 'LocationFeatureSpecification',
  Shape extends CRLocationFeatureSpecificationDefaultShape<Type> =
    CRLocationFeatureSpecificationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRPropertyValue<Type, Shape, Snapshot>
  implements CRLocationFeatureSpecificationState<Type>
{
  declare public readonly '@type': Type
  declare public hoursAvailable: CRLocationFeatureSpecificationState['hoursAvailable']
  declare public validFrom: CRLocationFeatureSpecificationState['validFrom']
  declare public validThrough: CRLocationFeatureSpecificationState['validThrough']

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
        '@type': 'LocationFeatureSpecification' as Type,
        hoursAvailable: crSetSnapshot,
        validFrom: '',
        validThrough: '',
        ...defaultShape,
      } as Partial<Shape>,
      {
        hoursAvailable: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
