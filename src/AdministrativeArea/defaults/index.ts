import type { AdministrativeArea } from 'schema-dts'
import {
  additionalType,
  alternateName,
  description,
  disambiguatingDescription,
} from '../../.shared/index.js'

type SchemaOrgAdministrativeAreaRaw = Extract<
  AdministrativeArea,
  { '@type': 'AdministrativeArea' }
>

export type SchemaOrgAdministrativeArea =
  Partial<SchemaOrgAdministrativeAreaRaw>

export const defaults = {
  '@id': '' as string,
  '@type': 'AdministrativeArea',
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

  additionalProperty: '',
  address: '',
  aggregateRating: '',
  amenityFeature: '',
  branchCode: '',
  containedInPlace: '',
  containsPlace: '',
  event: '',
  faxNumber: '',
  geo: '',
  geoContains: '',
  geoCoveredBy: '',
  geoCovers: '',
  geoCrosses: '',
  geoDisjoint: '',
  geoEquals: '',
  geoIntersects: '',
  geoOverlaps: '',
  geoTouches: '',
  geoWithin: '',
  globalLocationNumber: '',
  hasCertification: '',
  hasDriveThroughService: false as boolean,
  hasGS1DigitalLink: '',
  hasMap: '',
  isAccessibleForFree: false as boolean,
  isicV4: '',
  keywords: '',
  latitude: '',
  logo: '',
  longitude: '',
  maximumAttendeeCapacity: '',
  openingHoursSpecification: '',
  photo: '',
  publicAccess: false as boolean,
  review: '',
  slogan: '',
  smokingAllowed: false as boolean,
  specialOpeningHoursSpecification: '',
  telephone: '',
  tourBookingPage: '',
} as const

// "containedIn" | "events" | "map" | "maps" | "photos" | "reviews" are legacy
type MissingKeys = Exclude<
  keyof SchemaOrgAdministrativeArea,
  keyof typeof defaults
>

type ExtraKeys = Exclude<
  keyof typeof defaults,
  keyof SchemaOrgAdministrativeArea
>

export type CRAdministrativeArea = Partial<typeof defaults>
