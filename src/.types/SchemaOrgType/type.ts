import type { Thing } from 'schema-dts'

/**
 * Schema.org `@type` value.
 */
export type SchemaOrgType = Extract<Thing, { '@type': string }>['@type']
