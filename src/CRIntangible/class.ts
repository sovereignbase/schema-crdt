import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import type { SchemaCRDTFormatValidators } from '../.types/types.js'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org Intangible.
 *
 * Schema.org: A utility class for intangible things such as quantities,
 * structured values, etc.
 */
export class CRIntangible<
  Type = 'Intangible',
  Shape extends CRIntangibleDefaultShape<Type> = CRIntangibleDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRIntangibleState<Type>
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
        '@type': 'Intangible' as Type,
        ...defaultShape,
      } as Partial<Shape>,
      crdtProperties,
      formatValidators
    )
  }
}

export * from './types/types.js'
