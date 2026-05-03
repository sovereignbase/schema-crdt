import {
  CRSet,
  type CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import { CRStruct } from '@sovereignbase/convergent-replicated-struct'
import {
  CRText,
  type CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'
import { ISO31661Alpha2 } from '@sovereignbase/utils'

const crSetSnapshot = new CRSet<string>().toJSON()
const crTextSnapshot = new CRText().toJSON()

export const additionalType: CRSetSnapshot<string> = crSetSnapshot
export const addressCountry: ISO31661Alpha2 = 'AD'
export const addressLocality: string = ''
export const alternateName: CRSetSnapshot<string> = crSetSnapshot
export const caption: CRTextSnapshot = crTextSnapshot
export const description: CRTextSnapshot = crTextSnapshot
export const disambiguatingDescription: CRTextSnapshot = crTextSnapshot
export const embeddedTextCaption: CRTextSnapshot = crTextSnapshot
