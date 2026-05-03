import type { DefinedTerm } from 'schema-dts'
import {
  additionalType,
  alternateName,
  description,
  disambiguatingDescription,
  embeddedTextCaption,
} from '../../.shared/index.js'
import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

type SchemaOrgDefinedTermRaw = Extract<DefinedTerm, { '@type': 'DefinedTerm' }>

export type SchemaOrgDefinedTerm = Partial<SchemaOrgDefinedTermRaw>

export const defaults = {
  '@id': '' as string,
  '@type': 'DefinedTerm',
  inDefinedTermSet: '',
  termCode: '',
  additionalType,
  alternateName,
  description,
  disambiguatingDescription,
  identifier: '' as string,
  image: '',
  mainEntityOfPage: '',
  name: '',
  owner: '',
  potentialAction: '',
  sameAs: '',
  subjectOf: '',
  url: '',
} as const

// "awards" | "encodings" | "fileFormat" | "isBasedOnUrl" | "reviews" are legacy
type MissingKeys = Exclude<keyof SchemaOrgDefinedTerm, keyof typeof defaults>

type ExtraKeys = Exclude<keyof typeof defaults, keyof SchemaOrgDefinedTerm>

export type CRDefinedTermSnapshot = CRStructSnapshot<Partial<typeof defaults>>
