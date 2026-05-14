import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRContactPointDefaultShape,
  CRContactPointState,
} from './types/types.js'
import type { SchemaCRDTFormatValidators } from '../.types/types.js'

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
  declare public areaServed: CRContactPointState<Type>['areaServed']
  /**
   * Schema.org availableLanguage: A language someone may use with or at the
   * item, service or place.
   */
  declare public availableLanguage: CRContactPointState<Type>['availableLanguage']
  /**
   * Schema.org contactOption: An option available on this contact point.
   */
  declare public contactOption: CRContactPointState<Type>['contactOption']
  /**
   * Schema.org contactType: The kind of contact point.
   */
  declare public contactType: CRContactPointState<Type>['contactType']
  /**
   * Schema.org email: Email address.
   */
  declare public email: CRContactPointState<Type>['email']
  /**
   * Schema.org faxNumber: The fax number.
   */
  declare public faxNumber: CRContactPointState<Type>['faxNumber']
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  declare public hoursAvailable: CRContactPointState<Type>['hoursAvailable']
  /**
   * Schema.org productSupported: The product or service this support contact
   * point is related to.
   */
  declare public productSupported: CRContactPointState<Type>['productSupported']
  /**
   * Schema.org telephone: The telephone number.
   */
  declare public telephone: CRContactPointState<Type>['telephone']

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
        '@type': 'ContactPoint' as Type,
        areaServed: crSetSnapshot,
        availableLanguage: crSetSnapshot,
        contactOption: crSetSnapshot,
        contactType: '',
        email: '',
        faxNumber: '',
        hoursAvailable: crSetSnapshot,
        productSupported: crSetSnapshot,
        telephone: '',
        ...defaultShape,
      } as Partial<Shape>,
      {
        areaServed: 'set',
        availableLanguage: 'set',
        contactOption: 'set',
        hoursAvailable: 'set',
        productSupported: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >,
      formatValidators
    )
  }
}

export * from './types/types.js'
