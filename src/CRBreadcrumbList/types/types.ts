import type { BreadcrumbList } from 'schema-dts'

import type {
  CRItemListDefaultShape,
  CRItemListState,
} from '../../CRItemList/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgBreadcrumbListRaw = Extract<
  BreadcrumbList,
  { '@type': 'BreadcrumbList' }
>

type SchemaOrgBreadcrumbList = Partial<SchemaOrgBreadcrumbListRaw>

/**
 * Serializable CRDT shape for Schema.org BreadcrumbList.
 *
 * Schema.org: A chain of linked Web pages in a website hierarchy.
 */
export type CRBreadcrumbListDefaultShape<Type = 'BreadcrumbList'> =
  CRItemListDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org BreadcrumbList.
 */
export type CRBreadcrumbListSnapshot<Type = 'BreadcrumbList'> =
  CRStructPartialSnapshot<
    CRBreadcrumbListDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgBreadcrumbList,
  keyof CRBreadcrumbListSnapshot
>

type ExtraKeys = Exclude<
  keyof CRBreadcrumbListSnapshot,
  keyof SchemaOrgBreadcrumbList
>

/**
 * Runtime CRDT state surface for Schema.org BreadcrumbList.
 */
export type CRBreadcrumbListState<Type = 'BreadcrumbList'> =
  CRItemListState<Type>
