import type { DefinedTermSet } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRCreativeWorkDefaultShape,
  CRCreativeWorkState,
} from '../../CRCreativeWork/types/types.js'
import type { CRDefinedTermSnapshot } from '../../CRDefinedTerm/types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

type SchemaOrgDefinedTermSetRaw = Extract<
  DefinedTermSet,
  { '@type': 'DefinedTermSet' }
>

type SchemaOrgDefinedTermSet = Partial<SchemaOrgDefinedTermSetRaw>

export type CRDefinedTermSetDefinedTerm =
  | CRDefinedTermSnapshot
  | CRIdReferenceValue

export type CRDefinedTermSetDefaultShape<Type = 'DefinedTermSet'> = {
  hasDefinedTerm: CRSetSnapshot<CRDefinedTermSetDefinedTerm>
} & CRCreativeWorkDefaultShape<Type>

export type CRDefinedTermSetSnapshot<Type = 'DefinedTermSet'> =
  CRStructPartialSnapshot<
    CRDefinedTermSetDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgDefinedTermSet,
  keyof CRDefinedTermSetSnapshot
>

type ExtraKeys = Exclude<
  keyof CRDefinedTermSetSnapshot,
  keyof SchemaOrgDefinedTermSet
>

export type CRDefinedTermSetState<Type = 'DefinedTermSet'> = {
  hasDefinedTerm: Readonly<CRSet<CRDefinedTermSetDefinedTerm>>
} & CRCreativeWorkState<Type>
