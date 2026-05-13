import type { ContactPoint } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
import type { CREnumerationSnapshot } from '../../CREnumeration/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
} from '../../.types/types.js'

type SchemaOrgContactPointRaw = Extract<
  ContactPoint,
  { '@type': 'ContactPoint' }
>

type SchemaOrgContactPoint = Partial<SchemaOrgContactPointRaw>

/**
 * Values accepted by Schema.org areaServed.
 */
export type CRContactPointAreaServed =
  | CRTypedIdReferenceValue<'AdministrativeArea'>
  | CRTypedIdReferenceValue<'GeoShape'>
  | CRTypedIdReferenceValue<'Place'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org availableLanguage.
 */
export type CRContactPointAvailableLanguage =
  | CRTypedIdReferenceValue<'Language'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org contactOption.
 */
export type CRContactPointContactOption =
  | CREnumerationSnapshot<'ContactPointOption'>
  | CRTypedIdReferenceValue<'ContactPointOption'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org hoursAvailable.
 */
export type CRContactPointHoursAvailable =
  | CRTypedIdReferenceValue<'OpeningHoursSpecification'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org productSupported.
 */
export type CRContactPointProductSupported =
  | CRTypedIdReferenceValue<'Product'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org ContactPoint.
 *
 * Schema.org: A contact point, for example a customer complaints department.
 */
export type CRContactPointDefaultShape<Type = 'ContactPoint'> = {
  /**
   * Schema.org areaServed: The geographic area where a service or offered item
   * is provided.
   */
  areaServed: CRSetSnapshot<CRContactPointAreaServed>
  /**
   * Schema.org availableLanguage: A language someone may use with or at the
   * item, service or place.
   */
  availableLanguage: CRSetSnapshot<CRContactPointAvailableLanguage>
  /**
   * Schema.org contactOption: An option available on this contact point.
   */
  contactOption: CRSetSnapshot<CRContactPointContactOption>
  /**
   * Schema.org contactType: The kind of contact point.
   */
  contactType: SchemaOrgText
  /**
   * Schema.org email: Email address.
   */
  email: SchemaOrgText
  /**
   * Schema.org faxNumber: The fax number.
   */
  faxNumber: SchemaOrgText
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  hoursAvailable: CRSetSnapshot<CRContactPointHoursAvailable>
  /**
   * Schema.org productSupported: The product or service this support contact
   * point is related to.
   */
  productSupported: CRSetSnapshot<CRContactPointProductSupported>
  /**
   * Schema.org telephone: The telephone number.
   */
  telephone: SchemaOrgText
} & CRStructuredValueDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org ContactPoint.
 */
export type CRContactPointSnapshot<Type = 'ContactPoint'> =
  CRStructPartialSnapshot<
    CRContactPointDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

/**
 * Intentionally omitted deprecated Schema.org ContactPoint properties:
 * serviceArea.
 */
type MissingKeys = Exclude<
  keyof SchemaOrgContactPoint,
  keyof CRContactPointSnapshot
>

type ExtraKeys = Exclude<
  keyof CRContactPointSnapshot,
  keyof SchemaOrgContactPoint
>

/**
 * Runtime CRDT state surface for Schema.org ContactPoint.
 */
export type CRContactPointState<Type = 'ContactPoint'> = {
  /**
   * Schema.org areaServed: The geographic area where a service or offered item
   * is provided.
   */
  areaServed: Readonly<CRSet<CRContactPointAreaServed>>
  /**
   * Schema.org availableLanguage: A language someone may use with or at the
   * item, service or place.
   */
  availableLanguage: Readonly<CRSet<CRContactPointAvailableLanguage>>
  /**
   * Schema.org contactOption: An option available on this contact point.
   */
  contactOption: Readonly<CRSet<CRContactPointContactOption>>
  /**
   * Schema.org contactType: The kind of contact point.
   */
  contactType: SchemaOrgText
  /**
   * Schema.org email: Email address.
   */
  email: SchemaOrgText
  /**
   * Schema.org faxNumber: The fax number.
   */
  faxNumber: SchemaOrgText
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  hoursAvailable: Readonly<CRSet<CRContactPointHoursAvailable>>
  /**
   * Schema.org productSupported: The product or service this support contact
   * point is related to.
   */
  productSupported: Readonly<CRSet<CRContactPointProductSupported>>
  /**
   * Schema.org telephone: The telephone number.
   */
  telephone: SchemaOrgText
} & CRStructuredValueState<Type>
