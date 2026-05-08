import { CRThing, CRIntangible, CRStructuredValue } from './dist/index.js'

const thing = new CRThing()

thing.addEventListener('snapshot', ({ detail }) => {
  detail
})

const intangible = new CRIntangible()

intangible.addEventListener('delta', ({ detail }) => {})

const structuredValue = new CRStructuredValue()

structuredValue.addEventListener('snapshot', ({ detail }) => {})
