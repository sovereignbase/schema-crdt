import type { PropertyValue } from 'schema-dts'
import {
  additionalType,
  alternateName,
  caption,
  description,
  disambiguatingDescription,
  embeddedTextCaption,
} from '../../.shared/index.js'

type SchemaOrgPropertyValueRaw = Extract<
  PropertyValue,
  { '@type': 'PropertyValue' }
>

export type SchemaOrgPropertyValue = Partial<SchemaOrgPropertyValueRaw>

export const defaults = {
  '@id': '' as string,
  '@type': 'PropertyValue',
  maxValue: 0 as number,
  measurementMethod: '',
  measurementTechnique: '',
  minValue: 0 as number,
  propertyID: '',
  unitCode: '',
  unitText: '',
  value: '',
  valueReference: '',
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

type MissingKeys = Exclude<keyof SchemaOrgPropertyValue, keyof typeof defaults>

type ExtraKeys = Exclude<keyof typeof defaults, keyof SchemaOrgPropertyValue>

export type CRPropertyValue = Partial<typeof defaults>
