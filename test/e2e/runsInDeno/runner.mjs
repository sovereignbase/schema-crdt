import * as api from '../../../dist/index.js'
import {
  ensurePassing,
  printResults,
  runSchemaCRDTSuite,
} from '../shared/suite.mjs'

const results = await runSchemaCRDTSuite(api, { label: 'deno esm' })
printResults(results)
ensurePassing(results)
/** update to current package */
