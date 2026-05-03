import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

export type CRStructPartialSnapshot<
  T extends Record<string, unknown>,
  Required extends keyof T = never,
> = Pick<CRStructSnapshot<T>, Required> &
  Partial<Omit<CRStructSnapshot<T>, Required>>
