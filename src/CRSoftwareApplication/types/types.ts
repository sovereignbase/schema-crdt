import type { SoftwareApplication } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkSnapshot,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRImageObjectSnapshot } from '../../CRImageObject/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgSoftwareApplicationRaw = Extract<
  SoftwareApplication,
  { '@type': 'SoftwareApplication' }
>

type SchemaOrgSoftwareApplication = Partial<SchemaOrgSoftwareApplicationRaw>

/**
 * Values accepted by Schema.org software classification properties.
 */
export type CRSoftwareApplicationClassifier = SchemaOrgText | SchemaOrgURL

/**
 * Values accepted by Schema.org operatingSystem.
 */
export type CRSoftwareApplicationOperatingSystem =
  | CRTypedIdReferenceValue<'OperatingSystem'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org runtimePlatform.
 */
export type CRSoftwareApplicationRuntimePlatform =
  | CRTypedIdReferenceValue<'RuntimePlatform'>
  | SchemaOrgText
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org screenshot.
 */
export type CRSoftwareApplicationScreenshot =
  | CRImageObjectSnapshot
  | CRTypedIdReferenceValue<'ImageObject'>
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org softwareAddOn.
 */
export type CRSoftwareApplicationAddOn =
  | CRTypedIdReferenceValue<'SoftwareApplication'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org softwareHelp.
 */
export type CRSoftwareApplicationHelp =
  | CRCreativeWorkSnapshot
  | CRTypedIdReferenceValue<'WebPage'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org softwareRequirements.
 */
export type CRSoftwareApplicationRequirements =
  | CRTypedIdReferenceValue<'SoftwareApplication'>
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org supportingData.
 */
export type CRSoftwareApplicationSupportingData =
  | CRTypedIdReferenceValue<'DataFeed'>
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org SoftwareApplication.
 *
 * Schema.org: A software application.
 */
export type CRSoftwareApplicationDefaultShape<Type = 'SoftwareApplication'> = {
  /**
   * Schema.org applicationCategory: Type of software application.
   */
  applicationCategory: CRSetSnapshot<CRSoftwareApplicationClassifier>
  /**
   * Schema.org applicationSubCategory: Subcategory of the application.
   */
  applicationSubCategory: CRSetSnapshot<CRSoftwareApplicationClassifier>
  /**
   * Schema.org applicationSuite: Name of the application suite.
   */
  applicationSuite: CRTextSnapshot
  /**
   * Schema.org availableOnDevice: Device required to run the application.
   */
  availableOnDevice: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org countriesNotSupported: Countries where the app is not supported.
   */
  countriesNotSupported: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org countriesSupported: Countries where the app is supported.
   */
  countriesSupported: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org device: Deprecated alias for availableOnDevice.
   */
  device: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org downloadUrl: URL to download the binary.
   */
  downloadUrl: SchemaOrgURL
  /**
   * Schema.org featureList: Features or modules provided by this application.
   */
  featureList: CRSetSnapshot<CRSoftwareApplicationClassifier>
  /**
   * Schema.org fileSize: Size of the application package.
   */
  fileSize: CRTextSnapshot
  /**
   * Schema.org installUrl: URL at which the app may be installed.
   */
  installUrl: SchemaOrgURL
  /**
   * Schema.org memoryRequirements: Minimum memory requirements.
   */
  memoryRequirements: CRSetSnapshot<CRSoftwareApplicationClassifier>
  /**
   * Schema.org operatingSystem: Operating systems supported.
   */
  operatingSystem: CRSetSnapshot<CRSoftwareApplicationOperatingSystem>
  /**
   * Schema.org permissions: Permissions required to run the app.
   */
  permissions: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org processorRequirements: Processor architecture required.
   */
  processorRequirements: CRTextSnapshot
  /**
   * Schema.org releaseNotes: Description of what changed in this version.
   */
  releaseNotes: CRSetSnapshot<CRSoftwareApplicationClassifier>
  /**
   * Schema.org requirements: Deprecated dependency requirements.
   */
  requirements: CRSetSnapshot<CRSoftwareApplicationClassifier>
  /**
   * Schema.org runtimePlatform: Runtime platform or interpreter dependencies.
   */
  runtimePlatform: CRSetSnapshot<CRSoftwareApplicationRuntimePlatform>
  /**
   * Schema.org screenshot: A screenshot image of the app.
   */
  screenshot: CRSetSnapshot<CRSoftwareApplicationScreenshot>
  /**
   * Schema.org softwareAddOn: Additional content for a software application.
   */
  softwareAddOn: CRSetSnapshot<CRSoftwareApplicationAddOn>
  /**
   * Schema.org softwareHelp: Software application help.
   */
  softwareHelp: CRSetSnapshot<CRSoftwareApplicationHelp>
  /**
   * Schema.org softwareRequirements: Component dependency requirements.
   */
  softwareRequirements: CRSetSnapshot<CRSoftwareApplicationRequirements>
  /**
   * Schema.org softwareVersion: Version of the software instance.
   */
  softwareVersion: CRTextSnapshot
  /**
   * Schema.org storageRequirements: Free storage required.
   */
  storageRequirements: CRSetSnapshot<CRSoftwareApplicationClassifier>
  /**
   * Schema.org supportingData: Supporting data for a SoftwareApplication.
   */
  supportingData: CRSetSnapshot<CRSoftwareApplicationSupportingData>
} & CRCreativeWorkDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org SoftwareApplication.
 */
export type CRSoftwareApplicationSnapshot<Type = 'SoftwareApplication'> =
  CRStructPartialSnapshot<
    CRSoftwareApplicationDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgSoftwareApplication,
  keyof CRSoftwareApplicationSnapshot
>

type ExtraKeys = Exclude<
  keyof CRSoftwareApplicationSnapshot,
  keyof SchemaOrgSoftwareApplication
>

/**
 * Runtime CRDT state surface for Schema.org SoftwareApplication.
 */
export type CRSoftwareApplicationState<Type = 'SoftwareApplication'> = {
  /**
   * Schema.org applicationCategory: Type of software application.
   */
  applicationCategory: Readonly<CRSet<CRSoftwareApplicationClassifier>>
  /**
   * Schema.org applicationSubCategory: Subcategory of the application.
   */
  applicationSubCategory: Readonly<CRSet<CRSoftwareApplicationClassifier>>
  /**
   * Schema.org applicationSuite: Name of the application suite.
   */
  applicationSuite: Readonly<CRText>
  /**
   * Schema.org availableOnDevice: Device required to run the application.
   */
  availableOnDevice: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org countriesNotSupported: Countries where the app is not supported.
   */
  countriesNotSupported: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org countriesSupported: Countries where the app is supported.
   */
  countriesSupported: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org device: Deprecated alias for availableOnDevice.
   */
  device: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org downloadUrl: URL to download the binary.
   */
  downloadUrl: SchemaOrgURL
  /**
   * Schema.org featureList: Features or modules provided by this application.
   */
  featureList: Readonly<CRSet<CRSoftwareApplicationClassifier>>
  /**
   * Schema.org fileSize: Size of the application package.
   */
  fileSize: Readonly<CRText>
  /**
   * Schema.org installUrl: URL at which the app may be installed.
   */
  installUrl: SchemaOrgURL
  /**
   * Schema.org memoryRequirements: Minimum memory requirements.
   */
  memoryRequirements: Readonly<CRSet<CRSoftwareApplicationClassifier>>
  /**
   * Schema.org operatingSystem: Operating systems supported.
   */
  operatingSystem: Readonly<CRSet<CRSoftwareApplicationOperatingSystem>>
  /**
   * Schema.org permissions: Permissions required to run the app.
   */
  permissions: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org processorRequirements: Processor architecture required.
   */
  processorRequirements: Readonly<CRText>
  /**
   * Schema.org releaseNotes: Description of what changed in this version.
   */
  releaseNotes: Readonly<CRSet<CRSoftwareApplicationClassifier>>
  /**
   * Schema.org requirements: Deprecated dependency requirements.
   */
  requirements: Readonly<CRSet<CRSoftwareApplicationClassifier>>
  /**
   * Schema.org runtimePlatform: Runtime platform or interpreter dependencies.
   */
  runtimePlatform: Readonly<CRSet<CRSoftwareApplicationRuntimePlatform>>
  /**
   * Schema.org screenshot: A screenshot image of the app.
   */
  screenshot: Readonly<CRSet<CRSoftwareApplicationScreenshot>>
  /**
   * Schema.org softwareAddOn: Additional content for a software application.
   */
  softwareAddOn: Readonly<CRSet<CRSoftwareApplicationAddOn>>
  /**
   * Schema.org softwareHelp: Software application help.
   */
  softwareHelp: Readonly<CRSet<CRSoftwareApplicationHelp>>
  /**
   * Schema.org softwareRequirements: Component dependency requirements.
   */
  softwareRequirements: Readonly<CRSet<CRSoftwareApplicationRequirements>>
  /**
   * Schema.org softwareVersion: Version of the software instance.
   */
  softwareVersion: Readonly<CRText>
  /**
   * Schema.org storageRequirements: Free storage required.
   */
  storageRequirements: Readonly<CRSet<CRSoftwareApplicationClassifier>>
  /**
   * Schema.org supportingData: Supporting data for a SoftwareApplication.
   */
  supportingData: Readonly<CRSet<CRSoftwareApplicationSupportingData>>
} & CRCreativeWorkState<Type>
