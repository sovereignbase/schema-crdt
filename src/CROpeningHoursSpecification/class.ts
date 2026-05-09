import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CROpeningHoursSpecificationDefaultShape,
  CROpeningHoursSpecificationState,
} from './types/types.js'

export class CROpeningHoursSpecification<
  Type = 'OpeningHoursSpecification',
  Shape extends CROpeningHoursSpecificationDefaultShape<Type> =
    CROpeningHoursSpecificationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStructuredValue<Type, Shape, Snapshot>
  implements CROpeningHoursSpecificationState<Type>
{
  declare public readonly '@type': Type
  declare public closes: CROpeningHoursSpecificationState['closes']
  declare public dayOfWeek: CROpeningHoursSpecificationState['dayOfWeek']
  declare public opens: CROpeningHoursSpecificationState['opens']
  declare public validFrom: CROpeningHoursSpecificationState['validFrom']
  declare public validThrough: CROpeningHoursSpecificationState['validThrough']

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
        '@type': 'OpeningHoursSpecification' as Type,
        closes: '',
        dayOfWeek: crSetSnapshot,
        opens: '',
        validFrom: '',
        validThrough: '',
        ...defaultShape,
      } as Partial<Shape>,
      {
        dayOfWeek: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
