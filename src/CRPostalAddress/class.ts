import type { CRText } from '@sovereignbase/convergent-replicated-text'

import { CRContactPoint } from '../CRContactPoint/class.js'
import { description } from '../.shared/index.js'

import type {
  CRPostalAddressDefaultShape,
  CRPostalAddressSnapshot,
  CRPostalAddressState,
} from './types/types.js'

export class CRPostalAddress
  extends CRContactPoint<
    'PostalAddress',
    CRPostalAddressDefaultShape,
    CRPostalAddressSnapshot
  >
  implements CRPostalAddressState
{
  declare public readonly '@type': 'PostalAddress'
  declare public addressCountry: Readonly<CRText>
  declare public addressLocality: Readonly<CRText>
  declare public addressRegion: Readonly<CRText>
  declare public extendedAddress: Readonly<CRText>
  declare public postalCode: Readonly<CRText>
  declare public postOfficeBoxNumber: Readonly<CRText>
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
