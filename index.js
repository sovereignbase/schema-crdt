import { CRThing } from './dist/index.js'

const thing = new CRThing()

thing.addEventListener('snapshot', ({ detail }) => {
  detail
})
