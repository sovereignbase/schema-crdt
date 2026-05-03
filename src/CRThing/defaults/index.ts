import type { Thing } from 'schema-dts'
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

type SchemaOrgThingRaw = Extract<Thing, { '@type': 'Thing' }>

export type SchemaOrgThing = Partial<SchemaOrgThingRaw>

export const defaults = {
  '@id': '' as string,
  '@type': 'Thing',
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

type MissingKeys = Exclude<keyof SchemaOrgThing, keyof typeof defaults>

type ExtraKeys = Exclude<keyof typeof defaults, keyof SchemaOrgThing>

export type CRThingSnapshot = CRStructSnapshot<Partial<typeof defaults>>
