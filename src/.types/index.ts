import type { Person } from 'schema-dts'

type SchemaOrgPersonRaw = Extract<Person, { '@type': 'Person' }>
export type SchemaOrgPerson = Partial<
  Record<keyof SchemaOrgPersonRaw, SchemaOrgPersonRaw[keyof SchemaOrgPersonRaw]>
>
