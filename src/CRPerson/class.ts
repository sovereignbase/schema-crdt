import { CRStruct } from '@sovereignbase/convergent-replicated-struct'
import { defaults } from './defaults/index.js'

export class Person {
  private readonly state
  constructor() {
    this.state = new CRStruct(defaults)
  }
}
