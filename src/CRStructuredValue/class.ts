import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import type { SchemaCRDTFormatValidators } from '../.types/types.js'

import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org StructuredValue.
 *
 * Schema.org: A value with a more complex structure than a textual value or a
 * reference to another thing.
 */
export class CRStructuredValue<
  Type = 'StructuredValue',
  Shape extends CRStructuredValueDefaultShape<Type> =
    CRStructuredValueDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRStructuredValueState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type

  constructor(
    snapshot?: Snapshot,
    defaultShape?: Partial<Shape>,
    crdtProperties?: Partial<
      Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
    >,
    formatValidators?: SchemaCRDTFormatValidators<Shape>
  ) {
    super(
      snapshot,
      {
        '@type': 'StructuredValue' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties,
      formatValidators
    )
  }
}

export * from './types/types.js'
