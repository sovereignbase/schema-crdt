import { CRThing } from '../CRThing/class.js'
import type { CRActionState } from './types/types.js'

export class CRAction extends CRThing<'Action'> implements CRActionState {
  declare public readonly '@type': 'Action'
  declare public actionProcess: ''
  declare public actionStatus: ''
  declare public agent: ''
  declare public endTime: ''
  declare public error: ''
  declare public instrument: ''
  declare public location: ''
  declare public object: ''
  declare public participant: ''
  declare public provider: ''
  declare public result: ''
  declare startTime: ''
  declare public target: ''
  constructor() {
    super()
  }
}
