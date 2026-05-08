import type { Class, Enumeration, Property } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgEnumerationRaw = Extract<Enumeration, { '@type': 'Enumeration' }>

type SchemaOrgEnumeration = Partial<SchemaOrgEnumerationRaw>

export type CREnumerationSupersededBy =
  | Class
  | Enumeration
  | Property
  | CRIdReferenceValue

export type CREnumerationDefaultShape<Type = 'Enumeration'> = {
  supersededBy: CRSetSnapshot<CREnumerationSupersededBy>
} & CRThingDefaultShape<Type>

export type CREnumerationSnapshot<Type = 'Enumeration'> =
  CRStructPartialSnapshot<
    CREnumerationDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgEnumeration,
  keyof CREnumerationSnapshot
>

type ExtraKeys = Exclude<
  keyof CREnumerationSnapshot,
  keyof SchemaOrgEnumeration
>

export type CREnumerationState<Type = 'Enumeration'> = {
  supersededBy: Readonly<CRSet<CREnumerationSupersededBy>>
} & CRThingState<Type>
