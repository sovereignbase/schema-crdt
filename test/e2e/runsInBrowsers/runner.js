import * as api from '../../../dist/index.js'
import { printResults, runSchemaCRDTSuite } from '../shared/suite.mjs'

const results = await runSchemaCRDTSuite(api, { label: 'browser esm' })
printResults(results)
window.__SCHEMA_CRDT_RESULTS__ = results
const status = document.getElementById('status')
if (status)
  status.textContent = results.ok ? 'ok' : 'failed: ' + results.errors.length
