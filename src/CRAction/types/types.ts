import type { Action } from 'schema-dts'
import {
  additionalType,
  alternateName,
  description,
  disambiguatingDescription,
  embeddedTextCaption,
  name,
  sameAs,
  subjectOf,
} from '../../.shared/index.js'
import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'
import { OpaqueIdentifier } from '@sovereignbase/cryptosuite'
import { CRSetSnapshot } from '@sovereignbase/convergent-replicated-set'
import { CRTextSnapshot } from '@sovereignbase/convergent-replicated-text'

type SchemaOrgActionRaw = Extract<Action, { '@type': 'Action' }>

type SchemaOrgAction = Partial<SchemaOrgActionRaw>

export const defaults = {
  '@id': '' as OpaqueIdentifier,
  '@type': 'Action',
  additionalType,
  alternateName,
  description,
  disambiguatingDescription,
  identifier: '' as string,
  image: '',
  mainEntityOfPage: '',
  name,
  owner: '',
  potentialAction: '',
  sameAs,
  subjectOf,
  url: '' as string,
} as const

export type CRActionSnapshot = CRStructSnapshot<{
  '@id': OpaqueIdentifier
  '@type': 'Action'
  additionalType: CRSetSnapshot<string>
  alternateName: CRSetSnapshot<string>
  description: CRTextSnapshot
}>

type MissingKeys = Exclude<keyof SchemaOrgAction, keyof CRActionSnapshot>

type ExtraKeys = Exclude<keyof CRActionSnapshot, keyof SchemaOrgAction>
