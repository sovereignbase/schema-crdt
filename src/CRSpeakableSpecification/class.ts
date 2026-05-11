import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRSpeakableSpecificationDefaultShape,
  CRSpeakableSpecificationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org SpeakableSpecification.
 *
 * Schema.org: Sections of a document highlighted as particularly speakable.
 */
export class CRSpeakableSpecification<
  Type = 'SpeakableSpecification',
  Shape extends CRSpeakableSpecificationDefaultShape<Type> =
    CRSpeakableSpecificationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRSpeakableSpecificationState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org cssSelector: A CSS selector for speakable content.
   */
  declare public cssSelector: CRSpeakableSpecificationState<Type>['cssSelector']
  /**
   * Schema.org xpath: An XPath for speakable content.
   */
  declare public xpath: CRSpeakableSpecificationState<Type>['xpath']

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
        '@type': 'SpeakableSpecification' as Type,
        cssSelector: crSetSnapshot,
        xpath: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
        cssSelector: 'set',
        xpath: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
