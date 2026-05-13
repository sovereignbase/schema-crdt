import http from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, resolve } from 'node:path'
import { build } from 'esbuild'

const root = resolve(process.cwd())
const testRoot = resolve(root, 'test', 'e2e')
const runnerBundle = await build({
  bundle: true,
  entryPoints: [resolve(testRoot, 'runsInBrowsers', 'runner.js')],
  format: 'esm',
  platform: 'browser',
  target: 'es2024',
  write: false,
})

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.json': 'application/json',
  '.map': 'application/json',
  '.css': 'text/css',
}

function safeResolve(base, pathname) {
  const resolved = resolve(base, '.' + pathname)
  if (!resolved.startsWith(base)) return null
  return resolved
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://127.0.0.1')
  let pathname = url.pathname
  if (pathname === '/') pathname = '/runsInBrowsers/index.html'

  if (pathname === '/runsInBrowsers/runner.js') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/javascript')
    res.end(runnerBundle.outputFiles[0].text)
    return
  }

  let filePath
  if (pathname.startsWith('/dist/')) filePath = safeResolve(root, pathname)
  else filePath = safeResolve(testRoot, pathname)

  if (!filePath) {
    res.statusCode = 400
    res.end('Bad request')
    return
  }

  try {
    const data = await readFile(filePath)
    res.statusCode = 200
    res.setHeader(
      'Content-Type',
      mimeTypes[extname(filePath)] || 'application/octet-stream'
    )
    res.end(data)
  } catch {
    res.statusCode = 404
    res.end('Not found')
  }
})

const port = Number.parseInt(process.env.PORT || '4173', 10)
server.listen(port, '127.0.0.1', () => {
  console.log(`schema-crdt test server running at http://127.0.0.1:${port}`)
})

function shutdown() {
  server.close(() => process.exit(0))
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
