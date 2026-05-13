/// <reference path="./ExternalModules/type.ts" />

import type {
  CRStructSnapshot,
  CRStructDelta,
  CRStructChange,
  CRStructAck,
} from '@sovereignbase/convergent-replicated-struct'
import type {
  CRTextSnapshot,
  CRTextDelta,
  CRTextChange,
  CRTextAck,
} from '@sovereignbase/convergent-replicated-text'
import type {
  CRSetSnapshot,
  CRSetDelta,
  CRSetChange,
  CRSetAck,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRListSnapshot,
  CRListDelta,
  CRListChange,
  CRListAck,
} from '@sovereignbase/convergent-replicated-list'
import type {
  CRMapSnapshot,
  CRMapDelta,
  CRMapChange,
  CRMapAck,
} from '@sovereignbase/convergent-replicated-map'

import type { CRActionStatusTypeSnapshot } from '../CRActionStatusType/types/types.js'
import type { CRActionSnapshot } from '../CRAction/types/types.js'
import type { CRAdministrativeAreaSnapshot } from '../CRAdministrativeArea/types/types.js'
import type { CRAggregateRatingSnapshot } from '../CRAggregateRating/types/types.js'
import type { CRAudienceSnapshot } from '../CRAudience/types/types.js'
import type { CRBreadcrumbListSnapshot } from '../CRBreadcrumbList/types/types.js'
import type { CRContactPointSnapshot } from '../CRContactPoint/types/types.js'
import type { CRCountrySnapshot } from '../CRCountry/types/types.js'
import type { CRCreativeWorkSnapshot } from '../CRCreativeWork/types/types.js'
import type { CRDefinedTermSetSnapshot } from '../CRDefinedTermSet/types/types.js'
import type { CRDefinedTermSnapshot } from '../CRDefinedTerm/types/types.js'
import type { CRDigitalPlatformEnumerationSnapshot } from '../CRDigitalPlatformEnumeration/types/types.js'
import type { CREntryPointSnapshot } from '../CREntryPoint/types/types.js'
import type { CREnumerationSnapshot } from '../CREnumeration/types/types.js'
import type { CREventAttendanceModeEnumerationSnapshot } from '../CREventAttendanceModeEnumeration/types/types.js'
import type { CREventStatusTypeSnapshot } from '../CREventStatusType/types/types.js'
import type { CREventSnapshot } from '../CREvent/types/types.js'
import type { CRGeoCoordinatesSnapshot } from '../CRGeoCoordinates/types/types.js'
import type { CRGeoShapeSnapshot } from '../CRGeoShape/types/types.js'
import type { CRGeospatialGeometrySnapshot } from '../CRGeospatialGeometry/types/types.js'
import type { CRHowToDirectionSnapshot } from '../CRHowToDirection/types/types.js'
import type { CRHowToItemSnapshot } from '../CRHowToItem/types/types.js'
import type { CRHowToSectionSnapshot } from '../CRHowToSection/types/types.js'
import type { CRHowToStepSnapshot } from '../CRHowToStep/types/types.js'
import type { CRHowToSupplySnapshot } from '../CRHowToSupply/types/types.js'
import type { CRHowToTipSnapshot } from '../CRHowToTip/types/types.js'
import type { CRHowToToolSnapshot } from '../CRHowToTool/types/types.js'
import type { CRHowToSnapshot } from '../CRHowTo/types/types.js'
import type { CRIdReferenceSnapshot } from '../CRIdReference/types/types.js'
import type { CRImageObjectSnapshot } from '../CRImageObject/types/types.js'
import type { CRIntangibleSnapshot } from '../CRIntangible/types/types.js'
import type { CRItemListOrderTypeSnapshot } from '../CRItemListOrderType/types/types.js'
import type { CRItemListSnapshot } from '../CRItemList/types/types.js'
import type { CRListItemSnapshot } from '../CRListItem/types/types.js'
import type { CRLocationFeatureSpecificationSnapshot } from '../CRLocationFeatureSpecification/types/types.js'
import type { CRMediaObjectSnapshot } from '../CRMediaObject/types/types.js'
import type { CRMonetaryAmountSnapshot } from '../CRMonetaryAmount/types/types.js'
import type { CROpeningHoursSpecificationSnapshot } from '../CROpeningHoursSpecification/types/types.js'
import type { CROrganizationSnapshot } from '../CROrganization/types/types.js'
import type { CRPersonSnapshot } from '../CRPerson/types/types.js'
import type { CRPlaceSnapshot } from '../CRPlace/types/types.js'
import type { CRPostalAddressSnapshot } from '../CRPostalAddress/types/types.js'
import type { CRPropertyValueSnapshot } from '../CRPropertyValue/types/types.js'
import type { CRQuantitativeValueSnapshot } from '../CRQuantitativeValue/types/types.js'
import type { CRRatingSnapshot } from '../CRRating/types/types.js'
import type { CRReviewSnapshot } from '../CRReview/types/types.js'
import type { CRScheduleSnapshot } from '../CRSchedule/types/types.js'
import type { CRSoftwareApplicationSnapshot } from '../CRSoftwareApplication/types/types.js'
import type { CRSpeakableSpecificationSnapshot } from '../CRSpeakableSpecification/types/types.js'
import type { CRSpecialtySnapshot } from '../CRSpecialty/types/types.js'
import type { CRStatusEnumerationSnapshot } from '../CRStatusEnumeration/types/types.js'
import type { CRStructuredValueSnapshot } from '../CRStructuredValue/types/types.js'
import type { CRThingSnapshot } from '../CRThing/types/types.js'
import type { CRVirtualLocationSnapshot } from '../CRVirtualLocation/types/types.js'
import type { CRWebContentSnapshot } from '../CRWebContent/types/types.js'
import type { CRWebPageElementSnapshot } from '../CRWebPageElement/types/types.js'
import type { CRWebPageSnapshot } from '../CRWebPage/types/types.js'

export type {
  SchemaCRDTCanonicalPresentationOptions,
  SchemaCRDTExpandedJSONLDDocument,
  SchemaCRDTJSONLDContext,
  SchemaCRDTJSONLDDocument,
  SchemaCRDTJSONLDInput,
  SchemaCRDTJSONLDOptions,
  SchemaCRDTJSONLDScalar,
  SchemaCRDTJSONLDValue,
} from './SchemaCRDTJSONLD/type.js'

/**
 * Partial CRStruct snapshot where selected keys stay required.
 */
export type CRStructPartialSnapshot<
  T extends Record<string, unknown>,
  Required extends keyof T = never,
> = Pick<CRStructSnapshot<T>, Required> &
  Partial<Omit<CRStructSnapshot<T>, Required>>

/**
 * Snapshot union for every CRDT-backed Schema.org class in this package.
 */
export type SchemaCRDTSnapshot =
  | CRActionSnapshot
  | CRActionStatusTypeSnapshot
  | CRAdministrativeAreaSnapshot
  | CRAggregateRatingSnapshot
  | CRAudienceSnapshot
  | CRBreadcrumbListSnapshot
  | CRContactPointSnapshot
  | CRCountrySnapshot
  | CRCreativeWorkSnapshot
  | CRDefinedTermSnapshot
  | CRDefinedTermSetSnapshot
  | CRDigitalPlatformEnumerationSnapshot
  | CREntryPointSnapshot
  | CREnumerationSnapshot
  | CREventSnapshot
  | CREventAttendanceModeEnumerationSnapshot
  | CREventStatusTypeSnapshot
  | CRGeoCoordinatesSnapshot
  | CRGeoShapeSnapshot
  | CRGeospatialGeometrySnapshot
  | CRHowToSnapshot
  | CRHowToDirectionSnapshot
  | CRHowToItemSnapshot
  | CRHowToSectionSnapshot
  | CRHowToStepSnapshot
  | CRHowToSupplySnapshot
  | CRHowToTipSnapshot
  | CRHowToToolSnapshot
  | CRIdReferenceSnapshot
  | CRImageObjectSnapshot
  | CRIntangibleSnapshot
  | CRItemListSnapshot
  | CRItemListOrderTypeSnapshot
  | CRListItemSnapshot
  | CRLocationFeatureSpecificationSnapshot
  | CRMediaObjectSnapshot
  | CRMonetaryAmountSnapshot
  | CROpeningHoursSpecificationSnapshot
  | CROrganizationSnapshot
  | CRPersonSnapshot
  | CRPlaceSnapshot
  | CRPostalAddressSnapshot
  | CRPropertyValueSnapshot
  | CRQuantitativeValueSnapshot
  | CRRatingSnapshot
  | CRReviewSnapshot
  | CRScheduleSnapshot
  | CRSoftwareApplicationSnapshot
  | CRSpeakableSpecificationSnapshot
  | CRSpecialtySnapshot
  | CRStatusEnumerationSnapshot
  | CRStructuredValueSnapshot
  | CRThingSnapshot
  | CRVirtualLocationSnapshot
  | CRWebContentSnapshot
  | CRWebPageSnapshot
  | CRWebPageElementSnapshot

/**
 * Schema.org Boolean primitive.
 */
export type SchemaOrgBoolean = boolean

/**
 * Schema.org Date primitive.
 */
export type SchemaOrgDate = string

/**
 * Schema.org DateTime primitive.
 */
export type SchemaOrgDateTime = string

/**
 * Schema.org Time primitive.
 */
export type SchemaOrgTime = string

/**
 * Schema.org Duration primitive.
 */
export type SchemaOrgDuration = string

/**
 * Schema.org Distance primitive.
 */
export type SchemaOrgDistance = string

/**
 * Schema.org Number primitive.
 */
export type SchemaOrgNumber = number

/**
 * Schema.org Float primitive.
 */
export type SchemaOrgFloat = number

/**
 * Schema.org Integer primitive.
 */
export type SchemaOrgInteger = number

/**
 * Schema.org Text primitive.
 */
export type SchemaOrgText = string

/**
 * Schema.org postalCode primitive.
 *
 * Postal code formats are jurisdiction-specific, so this type names the
 * schema.org property domain without pretending there is one global regex.
 */
export type SchemaOrgPostalCode = string

/**
 * Schema.org URL primitive.
 */
export type SchemaOrgURL = string

/**
 * Schema.org CssSelectorType primitive.
 */
export type SchemaOrgCssSelectorType = string

/**
 * Schema.org XPathType primitive.
 */
export type SchemaOrgXPathType = string

/***/

/**
 * Property-specific regular expressions for Schema.org values that define a
 * clear lexical format in addition to the CRDT type shape.
 */
export type SchemaCRDTFormatValidators<T extends Record<string, unknown>> =
  Partial<Record<Extract<keyof T, string>, RegExp>>

/**
 * Event payload union for nested CRDT property instances.
 */
export type SchemaCRDTPropertyEventMap = {
  /**
   * Nested CRDT snapshot event payload.
   */
  snapshot:
    | CRTextSnapshot
    | CRSetSnapshot<unknown>
    | CRListSnapshot<unknown>
    | CRMapSnapshot<string, unknown>
  /**
   * Nested CRDT change event payload.
   */
  change:
    | CRTextChange
    | CRSetChange<unknown>
    | CRListChange<unknown>
    | CRMapChange<string, unknown>
  /**
   * Nested CRDT delta event payload.
   */
  delta:
    | CRTextDelta
    | CRSetDelta<unknown>
    | CRListDelta<unknown>
    | CRMapDelta<string, unknown>
  /**
   * Nested CRDT acknowledgement frontier payload.
   */
  ack: CRTextAck | CRSetAck | CRListAck | CRMapAck
}

/**
 * Event payload map after routing nested CRDT events through their owning
 * Schema.org property key.
 */
export type SchemaCRDTRoutedEventMap<T extends Record<string, unknown>> = {
  /**
   * Routed snapshot payload keyed by Schema.org property.
   */
  snapshot: Partial<{
    [K in keyof T]:
      | CRStructSnapshot<T>[K]
      | SchemaCRDTPropertyEventMap['snapshot']
  }>
  /**
   * Routed change payload keyed by Schema.org property.
   */
  change: Partial<{
    [K in keyof T]: T[K] | SchemaCRDTPropertyEventMap['change']
  }>
  /**
   * Routed delta payload keyed by Schema.org property.
   */
  delta: Partial<{
    [K in keyof T]: CRStructSnapshot<T>[K] | SchemaCRDTPropertyEventMap['delta']
  }>
  /**
   * Routed acknowledgement frontier keyed by Schema.org property.
   */
  ack: Partial<Record<keyof T, string | SchemaCRDTPropertyEventMap['ack']>>
}

/**
 * Maps Schema CRDT event names to their event payload shapes.
 */
export type SchemaCRDTEventMap<T extends Record<string, unknown>> = {
  /** STATE / PROJECTION */
  snapshot: CRStructSnapshot<T> | SchemaCRDTRoutedEventMap<T>['snapshot']
  change: CRStructChange<T> | SchemaCRDTRoutedEventMap<T>['change']

  /** GOSSIP / PROTOCOL */
  delta: CRStructDelta<T> | SchemaCRDTRoutedEventMap<T>['delta']
  ack: CRStructAck<T> | SchemaCRDTRoutedEventMap<T>['ack']
}

/**
 * Represents a strongly typed Schema CRDT event listener.
 */
export type SchemaCRDTEventListener<
  T extends Record<string, unknown>,
  K extends keyof SchemaCRDTEventMap<T>,
> =
  | ((event: CustomEvent<SchemaCRDTEventMap<T>[K]>) => void)
  | { handleEvent(event: CustomEvent<SchemaCRDTEventMap<T>[K]>): void }

/**
 * Resolves an event name to its corresponding listener type.
 */
export type SchemaCRDTEventListenerFor<
  T extends Record<string, unknown>,
  K extends string,
> = K extends keyof SchemaCRDTEventMap<T>
  ? SchemaCRDTEventListener<T, K>
  : EventListenerOrEventListenerObject
