import { CRStruct } from '@sovereignbase/convergent-replicated-struct'
import { CRDefinedTermSnapshot, defaults } from './defaults/index.js'

export class CRDefinedTerm {
  private readonly state
  constructor(snapshot?: CRDefinedTermSnapshot) {
    this.state = new CRStruct(defaults)
  }
}
