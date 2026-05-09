import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CROpeningHoursSpecificationDefaultShape,
  CROpeningHoursSpecificationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org OpeningHoursSpecification.
 *
 * Schema.org: Structured information about the opening hours of a place or a
 * service inside a place.
 */
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
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org closes: The closing hour of the place or service on the given
   * day(s) of the week.
   */
  declare public closes: CROpeningHoursSpecificationState['closes']
  /**
   * Schema.org dayOfWeek: The day of the week for which these opening hours
   * are valid.
   */
  declare public dayOfWeek: CROpeningHoursSpecificationState['dayOfWeek']
  /**
   * Schema.org opens: The opening hour of the place or service on the given
   * day(s) of the week.
   */
  declare public opens: CROpeningHoursSpecificationState['opens']
  /**
   * Schema.org validFrom: The date when the item becomes valid.
   */
  declare public validFrom: CROpeningHoursSpecificationState['validFrom']
  /**
   * Schema.org validThrough: The date after when the item is not valid.
   */
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
