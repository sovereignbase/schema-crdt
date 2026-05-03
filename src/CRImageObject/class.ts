import { CRStruct } from '@sovereignbase/convergent-replicated-struct'
import { defaults } from './defaults/index.js'

export class PostalAddress {
  private readonly state
  constructor() {
    this.state = new CRStruct(defaults)
  }
}
