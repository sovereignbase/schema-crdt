import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CREntryPointDefaultShape,
  CREntryPointState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org EntryPoint.
 *
 * Schema.org: An entry point, within some Web-based protocol.
 */
export class CREntryPoint<
  Type = 'EntryPoint',
  Shape extends CREntryPointDefaultShape<Type> = CREntryPointDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CREntryPointState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public actionApplication: CREntryPointState<Type>['actionApplication']
  declare public actionPlatform: CREntryPointState<Type>['actionPlatform']
  declare public contentType: CREntryPointState<Type>['contentType']
  declare public encodingType: CREntryPointState<Type>['encodingType']
  declare public httpMethod: CREntryPointState<Type>['httpMethod']
  declare public urlTemplate: CREntryPointState<Type>['urlTemplate']

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
        '@type': 'EntryPoint' as Type,
        actionApplication: crSetSnapshot,
        actionPlatform: crSetSnapshot,
        contentType: crSetSnapshot,
        encodingType: crSetSnapshot,
        httpMethod: '',
        urlTemplate: '',
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        actionApplication: 'set',
        actionPlatform: 'set',
        contentType: 'set',
        encodingType: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >,
      {
        httpMethod: /^[A-Z]+$/,
      } as Partial<Record<Extract<keyof Shape, string>, RegExp>>
    )
  }
}

export * from './types/types.js'
