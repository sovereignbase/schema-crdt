import type { ContactPoint } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type {
  CRStructuredValueDefaultShape,
  CRStructuredValueState,
} from '../../CRStructuredValue/types/types.js'
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
 * Serializable CRDT shape for Schema.org ContactPoint.
 *
 * Schema.org: A contact point, for example a customer complaints department.
 *
 * Deprecated Schema.org properties intentionally omitted:
 * serviceArea.
 */
export type CRContactPointDefaultShape<Type = 'ContactPoint'> = {
  /**
   * Schema.org areaServed: The geographic area where a service or offered item
   * is provided.
   */
  areaServed: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org availableLanguage: A language someone may use with or at the
   * item, service or place.
   */
  availableLanguage: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org contactOption: An option available on this contact point.
   */
  contactOption: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org contactType: The kind of contact point.
   */
  contactType: CRTextSnapshot
  /**
   * Schema.org email: Email address.
   */
  email: CRTextSnapshot
  /**
   * Schema.org faxNumber: The fax number.
   */
  faxNumber: CRTextSnapshot
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  hoursAvailable: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org productSupported: The product or service this support contact
   * point is related to.
   */
  productSupported: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org telephone: The telephone number.
   */
  telephone: CRTextSnapshot
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
  areaServed: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org availableLanguage: A language someone may use with or at the
   * item, service or place.
   */
  availableLanguage: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org contactOption: An option available on this contact point.
   */
  contactOption: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org contactType: The kind of contact point.
   */
  contactType: Readonly<CRText>
  /**
   * Schema.org email: Email address.
   */
  email: Readonly<CRText>
  /**
   * Schema.org faxNumber: The fax number.
   */
  faxNumber: Readonly<CRText>
  /**
   * Schema.org hoursAvailable: The hours during which this service or contact
   * is available.
   */
  hoursAvailable: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org productSupported: The product or service this support contact
   * point is related to.
   */
  productSupported: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org telephone: The telephone number.
   */
  telephone: Readonly<CRText>
} & CRStructuredValueState<Type>
