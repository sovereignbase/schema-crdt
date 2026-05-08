import type { DefinedTerm, DefinedTermSet, Thing } from 'schema-dts'
import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'
import type {
  CRText,
  CRTextSnapshot,
} from '@sovereignbase/convergent-replicated-text'

import type {
  CRThingDefaultShape,
  CRThingState,
} from '../../CRThing/types/types.js'
import type {
  CRStructPartialSnapshot,
  SchemaOrgURL,
} from '../../.types/types.js'
import type { CRIdReferenceValue } from '../../CRIdReference/types/types.js'

type SchemaOrgDefinedTermRaw = Extract<DefinedTerm, { '@type': 'DefinedTerm' }>

type SchemaOrgDefinedTerm = Partial<SchemaOrgDefinedTermRaw>

export type CRDefinedTermAbout = Thing | CRIdReferenceValue

export type CRDefinedTermSetReference =
  | DefinedTermSet
  | SchemaOrgURL
  | CRIdReferenceValue

export type CRDefinedTermDefaultShape<Type = 'DefinedTerm'> = {
  about: CRSetSnapshot<CRDefinedTermAbout>
  inDefinedTermSet: CRSetSnapshot<CRDefinedTermSetReference>
  termCode: CRTextSnapshot
} & CRThingDefaultShape<Type>

export type CRDefinedTermSnapshot<Type = 'DefinedTerm'> =
  CRStructPartialSnapshot<
    CRDefinedTermDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

type MissingKeys = Exclude<
  keyof SchemaOrgDefinedTerm,
  keyof CRDefinedTermSnapshot
>

type ExtraKeys = Exclude<
  keyof CRDefinedTermSnapshot,
  keyof SchemaOrgDefinedTerm
>

export type CRDefinedTermState<Type = 'DefinedTerm'> = {
  about: Readonly<CRSet<CRDefinedTermAbout>>
  inDefinedTermSet: Readonly<CRSet<CRDefinedTermSetReference>>
  termCode: Readonly<CRText>
} & CRThingState<Type>
