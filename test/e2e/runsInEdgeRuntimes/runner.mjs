import { resolve } from 'node:path'
import { EdgeRuntime } from 'edge-runtime'
import { build } from 'esbuild'
import {
  ensurePassing,
  printResults,
  runSchemaCRDTSuite,
} from '../shared/suite.mjs'

const root = process.cwd()
const esmDistPath = resolve(root, 'dist', 'index.js')
/** update to current package */

const runtime = new EdgeRuntime()
runtime.evaluate(`
  if (typeof globalThis.CustomEvent === 'undefined') {
    globalThis.CustomEvent = class CustomEvent extends Event {
      constructor(type, init = {}) {
        super(type, init)
        this.detail = init.detail
      }
    }
  }
`)
const bundle = await build({
  bundle: true,
  entryPoints: [esmDistPath],
  format: 'iife',
  globalName: '__schemaCRDTEsmExports',
  platform: 'browser',
  target: 'es2024',
  write: false,
})

runtime.evaluate(bundle.outputFiles[0].text)

const results = await runSchemaCRDTSuite(
  runtime.context.__schemaCRDTEsmExports,
  {
    label: 'edge-runtime esm',
    runtimeGlobals: runtime.context,
  }
)
printResults(results)
ensurePassing(results)
