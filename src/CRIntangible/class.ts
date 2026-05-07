import { CRThing } from '../CRThing/class.js'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleSnapshot,
  CRIntangibleState,
} from './types/types.js'

export class CRIntangible
  extends CRThing<
    'Intangible',
    CRIntangibleDefaultShape,
    CRIntangibleSnapshot
  >
  implements CRIntangibleState
{
  declare public readonly '@type': 'Intangible'

  constructor(snapshot?: CRIntangibleSnapshot) {
    super(snapshot)
  }
}

export * from './types/types.js'
