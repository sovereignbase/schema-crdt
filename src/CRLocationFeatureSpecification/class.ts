import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRPropertyValue } from '../CRPropertyValue/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRLocationFeatureSpecificationDefaultShape,
  CRLocationFeatureSpecificationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org LocationFeatureSpecification.
 *
 * Schema.org: A structured property-value pair describing a location feature
 * of an accommodation.
 */
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
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  declare public hoursAvailable: CRLocationFeatureSpecificationState['hoursAvailable']
  /**
   * Schema.org validFrom: The date when the item becomes valid.
   */
  declare public validFrom: CRLocationFeatureSpecificationState['validFrom']
  /**
   * Schema.org validThrough: The date after when the item is not valid.
   */
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
