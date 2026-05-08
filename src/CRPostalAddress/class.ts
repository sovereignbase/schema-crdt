import { CRContactPoint } from '../CRContactPoint/class.js'

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
  declare public addressCountry: string
  declare public addressLocality: string
  declare public addressRegion: string
  declare public extendedAddress: string
  declare public postalCode: string
  declare public postOfficeBoxNumber: string
  declare public streetAddress: string

  constructor(snapshot?: CRPostalAddressSnapshot) {
    super(snapshot, {
      '@type': 'PostalAddress',
      addressCountry: '',
      addressLocality: '',
      addressRegion: '',
      extendedAddress: '',
      postalCode: '',
      postOfficeBoxNumber: '',
      streetAddress: '',
    })
  }
}

export * from './types/types.js'
