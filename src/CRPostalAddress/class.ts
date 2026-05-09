import type { CRText } from '@sovereignbase/convergent-replicated-text'

import { CRContactPoint } from '../CRContactPoint/class.js'
import { description } from '../.shared/index.js'

import type {
  CRPostalAddressDefaultShape,
  CRPostalAddressSnapshot,
  CRPostalAddressState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org PostalAddress.
 *
 * Schema.org: The mailing address.
 */
export class CRPostalAddress
  extends CRContactPoint<
    'PostalAddress',
    CRPostalAddressDefaultShape,
    CRPostalAddressSnapshot
  >
  implements CRPostalAddressState
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': 'PostalAddress'
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  declare public addressCountry: Readonly<CRText>
  /**
   * Schema.org addressLocality: The locality in which the street address is.
   */
  declare public addressLocality: Readonly<CRText>
  /**
   * Schema.org addressRegion: The region in which the locality is.
   */
  declare public addressRegion: Readonly<CRText>
  /**
   * Schema.org extendedAddress: An address extension such as an apartment
   * number, C/O or alternative name.
   */
  declare public extendedAddress: Readonly<CRText>
  /**
   * Schema.org postalCode: The postal code.
   */
  declare public postalCode: Readonly<CRText>
  /**
   * Schema.org postOfficeBoxNumber: The post office box number for PO box
   * addresses.
   */
  declare public postOfficeBoxNumber: Readonly<CRText>
  /**
   * Schema.org streetAddress: The street address.
   */
  declare public streetAddress: Readonly<CRText>

  constructor(snapshot?: CRPostalAddressSnapshot) {
    super(
      snapshot,
      {
        '@type': 'PostalAddress',
        addressCountry: description,
        addressLocality: description,
        addressRegion: description,
        extendedAddress: description,
        postalCode: description,
        postOfficeBoxNumber: description,
        streetAddress: description,
      },
      {
        addressCountry: 'text',
        addressLocality: 'text',
        addressRegion: 'text',
        extendedAddress: 'text',
        postalCode: 'text',
        postOfficeBoxNumber: 'text',
        streetAddress: 'text',
      }
    )
  }
}

export * from './types/types.js'
