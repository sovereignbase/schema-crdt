import { CRSet } from '@sovereignbase/convergent-replicated-set'
import { CRText } from '@sovereignbase/convergent-replicated-text'
import { CRList } from '@sovereignbase/convergent-replicated-list'
import type { ISO31661Alpha2 } from '@sovereignbase/utils'

export const crSetSnapshot = new CRSet().toJSON()
export const crTextSnapshot = new CRText().toJSON()
export const crListSnapshot = new CRList().toJSON()

export const crIdReferenceValue: { '@id': '' } = { '@id': '' }

export const addressCountry: ISO31661Alpha2 = 'AD'
