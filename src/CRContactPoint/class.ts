import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'
import type { CRSet } from '@sovereignbase/convergent-replicated-set'
import type { CRText } from '@sovereignbase/convergent-replicated-text'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { additionalType, description } from '../.shared/index.js'

import type {
  CRContactPointDefaultShape,
  CRContactPointState,
} from './types/types.js'
import type { SchemaOrgText } from '../.types/types.js'

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
  declare public areaServed: Readonly<CRSet<SchemaOrgText>>
  declare public availableLanguage: Readonly<CRSet<SchemaOrgText>>
  declare public contactOption: Readonly<CRSet<SchemaOrgText>>
  declare public contactType: Readonly<CRText>
  declare public email: Readonly<CRText>
  declare public faxNumber: Readonly<CRText>
  declare public hoursAvailable: Readonly<CRSet<SchemaOrgText>>
  declare public productSupported: Readonly<CRSet<SchemaOrgText>>
  declare public serviceArea: Readonly<CRSet<SchemaOrgText>>
  declare public telephone: Readonly<CRText>

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
        '@type': 'ContactPoint' as Type,
        areaServed: additionalType,
        availableLanguage: additionalType,
        contactOption: additionalType,
        contactType: description,
        email: description,
        faxNumber: description,
        hoursAvailable: additionalType,
        productSupported: additionalType,
        serviceArea: additionalType,
        telephone: description,
        ...defaultShape,
      } as Partial<Shape>,
      {
        areaServed: 'set',
        availableLanguage: 'set',
        contactOption: 'set',
        contactType: 'text',
        email: 'text',
        faxNumber: 'text',
        hoursAvailable: 'set',
        productSupported: 'set',
        serviceArea: 'set',
        telephone: 'text',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
