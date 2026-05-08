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

export const crSetSnapshot = new CRSet().toJSON()
export const crTextSnapshot = new CRText().toJSON()

export const award: CRSetSnapshot<string> =
  crSetSnapshot as CRSetSnapshot<string>

export const additionalName: CRSetSnapshot<string> =
  crSetSnapshot as CRSetSnapshot<string>

export const additionalType: CRSetSnapshot<string> =
  crSetSnapshot as CRSetSnapshot<string>

export const address = ''

export const addressCountry: ISO31661Alpha2 = 'AD'

export const addressLocality: string = ''

export const alternateName: CRSetSnapshot<string> =
  crSetSnapshot as CRSetSnapshot<string>

export const caption: CRTextSnapshot = crTextSnapshot

export const description: CRTextSnapshot = crTextSnapshot

export const disambiguatingDescription: CRTextSnapshot = crTextSnapshot

export const embeddedTextCaption: CRTextSnapshot = crTextSnapshot

export const name: CRTextSnapshot = crTextSnapshot

export const sameAs: CRSetSnapshot<string> =
  crSetSnapshot as CRSetSnapshot<string>

export const subjectOf: CRSetSnapshot<string> =
  crSetSnapshot as CRSetSnapshot<string>
