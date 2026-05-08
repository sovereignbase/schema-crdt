import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'

import type {
  CRContactPointDefaultShape,
  CRContactPointState,
} from './types/types.js'

export class CRContactPoint<
  Type = 'ContactPoint',
  Shape extends CRContactPointDefaultShape<Type> =
    CRContactPointDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStructuredValue<Type, Shape, Snapshot>
  implements CRContactPointState<Type>
{
  declare public readonly '@type': Type
  declare public areaServed: string
  declare public availableLanguage: string
  declare public contactOption: string
  declare public contactType: string
  declare public email: string
  declare public faxNumber: string
  declare public hoursAvailable: string
  declare public productSupported: string
  declare public serviceArea: string
  declare public telephone: string

  constructor(snapshot?: Snapshot, defaultShape?: Partial<Shape>) {
    super(snapshot, {
      '@type': 'ContactPoint' as Type,
      areaServed: '',
      availableLanguage: '',
      contactOption: '',
      contactType: '',
      email: '',
      faxNumber: '',
      hoursAvailable: '',
      productSupported: '',
      serviceArea: '',
      telephone: '',
      ...defaultShape,
    } as Partial<Shape>)
  }
}

export * from './types/types.js'
