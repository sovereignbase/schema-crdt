import { CRStruct } from '@sovereignbase/convergent-replicated-struct'
import { CRThingSnapshot, defaults } from './defaults/index.js'

export class CRThing {
  private readonly state
  constructor(snapshot?: CRThingSnapshot) {
    this.state = new CRStruct(defaults)
  }
}
