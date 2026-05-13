import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type { CRAudienceDefaultShape, CRAudienceState } from './types/types.js'

/**
 * CRDT-backed Schema.org Audience.
 *
 * Schema.org: Intended audience for an item, such as a group for whom
 * something was created.
 */
export class CRAudience<
  Type = 'Audience',
  Shape extends CRAudienceDefaultShape<Type> = CRAudienceDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRAudienceState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org audienceType: The target group associated with a given audience.
   */
  declare public audienceType: CRAudienceState<Type>['audienceType']
  /**
   * Schema.org geographicArea: The geographic area associated with the audience.
   */
  declare public geographicArea: CRAudienceState<Type>['geographicArea']

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
        '@type': 'Audience' as Type,
        audienceType: crTextSnapshot,
        geographicArea: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
        audienceType: 'text',
        geographicArea: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
