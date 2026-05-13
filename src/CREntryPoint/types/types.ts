import type { EntryPoint } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type { CRDigitalPlatformEnumerationSnapshot } from '../../CRDigitalPlatformEnumeration/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRSoftwareApplicationSnapshot } from '../../CRSoftwareApplication/types/types.js'
import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgText,
  SchemaOrgURL,
} from '../../.types/types.js'

type SchemaOrgEntryPointRaw = Extract<EntryPoint, { '@type': 'EntryPoint' }>

type SchemaOrgEntryPoint = Partial<SchemaOrgEntryPointRaw>

/**
 * Values accepted by Schema.org actionApplication.
 */
export type CREntryPointApplication =
  | CRSoftwareApplicationSnapshot
  | CRTypedIdReferenceValue<'SoftwareApplication'>
  | CRIdReferenceValue

/**
 * Values accepted by Schema.org actionPlatform.
 */
export type CREntryPointActionPlatform =
  | CRDigitalPlatformEnumerationSnapshot
  | CRTypedIdReferenceValue<'DigitalPlatformEnumeration'>
  | SchemaOrgText
  | SchemaOrgURL
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org EntryPoint.
 *
 * Schema.org: An entry point, within some Web-based protocol.
 */
export type CREntryPointDefaultShape<Type = 'EntryPoint'> = {
  /**
   * Schema.org actionApplication: An application that can complete the request.
   */
  actionApplication: CRSetSnapshot<CREntryPointApplication>
  /**
   * Schema.org actionPlatform: High level platforms where the Action can be
   * performed.
   */
  actionPlatform: CRSetSnapshot<CREntryPointActionPlatform>
  /**
   * Schema.org contentType: Supported content types for an EntryPoint response.
   */
  contentType: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org encodingType: Supported encoding types for an EntryPoint request.
   */
  encodingType: CRSetSnapshot<SchemaOrgText>
  /**
   * Schema.org httpMethod: HTTP method for the request.
   */
  httpMethod: SchemaOrgText
  /**
   * Schema.org urlTemplate: RFC 6570 URL template used to construct the target.
   */
  urlTemplate: SchemaOrgText
} & CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org EntryPoint.
 */
export type CREntryPointSnapshot<Type = 'EntryPoint'> = CRStructPartialSnapshot<
  CREntryPointDefaultShape<Type>,
  '@id' | '@type' | 'identifier'
>

/**
 * Intentionally omitted deprecated Schema.org EntryPoint properties:
 * application.
 */
type MissingKeys = Exclude<
  keyof SchemaOrgEntryPoint,
  keyof CREntryPointSnapshot
>

type ExtraKeys = Exclude<keyof CREntryPointSnapshot, keyof SchemaOrgEntryPoint>

/**
 * Runtime CRDT state surface for Schema.org EntryPoint.
 */
export type CREntryPointState<Type = 'EntryPoint'> = {
  /**
   * Schema.org actionApplication: An application that can complete the request.
   */
  actionApplication: Readonly<CRSet<CREntryPointApplication>>
  /**
   * Schema.org actionPlatform: High level platforms where the Action can be
   * performed.
   */
  actionPlatform: Readonly<CRSet<CREntryPointActionPlatform>>
  /**
   * Schema.org contentType: Supported content types for an EntryPoint response.
   */
  contentType: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org encodingType: Supported encoding types for an EntryPoint request.
   */
  encodingType: Readonly<CRSet<SchemaOrgText>>
  /**
   * Schema.org httpMethod: HTTP method for the request.
   */
  httpMethod: SchemaOrgText
  /**
   * Schema.org urlTemplate: RFC 6570 URL template used to construct the target.
   */
  urlTemplate: SchemaOrgText
} & CRIntangibleState<Type>
