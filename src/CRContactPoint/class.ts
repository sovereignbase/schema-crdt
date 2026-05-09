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

/**
 * CRDT-backed Schema.org ContactPoint.
 *
 * Schema.org: A contact point, for example a customer complaints department.
 */
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
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org areaServed: The geographic area where a service or offered item
   * is provided.
   */
  declare public areaServed: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org availableLanguage: A language someone may use with or at the
   * item, service or place.
   */
  declare public availableLanguage: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org contactOption: An option available on this contact point.
   */
  declare public contactOption: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org contactType: The kind of contact point.
   */
  declare public contactType: Readonly<CRText>
  /**
   * Schema.org email: Email address.
   */
  declare public email: Readonly<CRText>
  /**
   * Schema.org faxNumber: The fax number.
   */
  declare public faxNumber: Readonly<CRText>
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  declare public hoursAvailable: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org productSupported: The product or service this support contact
   * point is related to.
   */
  declare public productSupported: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org serviceArea: Superseded by areaServed.
   */
  declare public serviceArea: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org telephone: The telephone number.
   */
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
