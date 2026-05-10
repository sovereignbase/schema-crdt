import type { CRText } from '@sovereignbase/convergent-replicated-text'

import { CRContactPoint } from '../CRContactPoint/class.js'
import { addressCountry, description } from '../.shared/index.js'

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
  declare public addressCountry: CRPostalAddressState['addressCountry']
  /**
   * Schema.org addressLocality: The locality in which the street address is.
   */
  declare public addressLocality: Readonly<CRText>
  /**
   * Schema.org addressRegion: The region in which the locality is.
   */
  declare public addressRegion: CRPostalAddressState['addressRegion']
  /**
   * Schema.org extendedAddress: An address extension such as an apartment
   * number, C/O or alternative name.
   */
  declare public extendedAddress: CRPostalAddressState['extendedAddress']
  /**
   * Schema.org postalCode: The postal code.
   */
  declare public postalCode: CRPostalAddressState['postalCode']
  /**
   * Schema.org postOfficeBoxNumber: The post office box number for PO box
   * addresses.
   */
  declare public postOfficeBoxNumber: CRPostalAddressState['postOfficeBoxNumber']
  /**
   * Schema.org streetAddress: The street address.
   */
  declare public streetAddress: CRPostalAddressState['streetAddress']

  constructor(snapshot?: CRPostalAddressSnapshot) {
    super(
      snapshot,
      {
        '@type': 'PostalAddress',
        addressCountry,
        addressLocality: description,
        addressRegion: '',
        extendedAddress: description,
        postalCode: '',
        postOfficeBoxNumber: description,
        streetAddress: description,
      },
      {
        addressLocality: 'text',
        extendedAddress: 'text',
        postOfficeBoxNumber: 'text',
        streetAddress: 'text',
      },
      {
        addressCountry: /^[A-Z]{2}$/,
      }
    )
  }
}

export * from './types/types.js'
