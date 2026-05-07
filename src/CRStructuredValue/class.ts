import { CRIntangible } from '../CRIntangible/class.js'

import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueSnapshot,
  CRStructuredValueState,
} from './types/types.js'

export class CRStructuredValue
  extends CRIntangible<
    'StructuredValue',
    CRStructuredValueDefaultShape,
    CRStructuredValueSnapshot
  >
  implements CRStructuredValueState
{
  declare public readonly '@type': 'StructuredValue'

  constructor(snapshot?: CRStructuredValueSnapshot) {
    super(snapshot)
  }
}

export * from './types/types.js'
