import { CRStruct } from '@sovereignbase/convergent-replicated-struct'
import { CRText } from '@sovereignbase/convergent-replicated-text'
import { CRSet } from '@sovereignbase/convergent-replicated-set'
import { Cryptographic } from '@sovereignbase/cryptosuite'

import type {
  CRThingSnapshot,
  CRThingSnapshotShape,
  CRThingState,
} from './types/types.js'
import {
  additionalType,
  alternateName,
  description,
  disambiguatingDescription,
  name,
  sameAs,
  subjectOf,
} from '../.shared/index.js'

export class CRThing implements CRThingState {
  private readonly state: CRStruct<CRThingSnapshotShape>
  constructor(snapshot?: CRThingSnapshot) {
    const defaults = {
      '@id': '',
      '@type': 'Thing',
      additionalType,
      alternateName,
      description,
      disambiguatingDescription,
      identifier: '',
      image: '',
      mainEntityOfPage: '',
      name,
      owner: '',
      potentialAction: '',
      sameAs,
      subjectOf,
      url: '',
    }
    this.state = new CRStruct(defaults, snapshot)

    Object.defineProperties(this, {
      '@id': {
        value: this.state['@id'] ?? Cryptographic.identifier.generate(),
        enumerable: true,
        configurable: false,
        writable: false,
      },
      '@type': {
        value: 'Thing',
        enumerable: true,
        configurable: false,
        writable: false,
      },
      additionalType: {
        value: new CRSet(
          this.state['additionalType'] ?? defaults['additionalType']
        ),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      alternateName: {
        value: new CRSet(
          this.state['alternateName'] ?? defaults['alternateName']
        ),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      description: {
        value: new CRText(this.state['description'] ?? defaults['description']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      disambiguatingDescription: {
        value: new CRText(
          this.state['disambiguatingDescription'] ??
            defaults['disambiguatingDescription']
        ),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      identifier: {
        value: this.state['identifier'] ?? '',
        enumerable: false,
        configurable: false,
        writable: false,
      },
      image: {
        value: this.state['image'] ?? defaults['image'],
        enumerable: true,
        configurable: true,
        writable: true,
      },
      mainEntityOfPage: {
        value: this.state['mainEntityOfPage'] ?? defaults['mainEntityOfPage'],
        enumerable: true,
        configurable: true,
        writable: true,
      },
      name: {
        value: new CRText(this.state['name'] ?? defaults['name']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      owner: {
        value: this.state['owner'] ?? defaults['owner'],
        enumerable: true,
        configurable: true,
        writable: true,
      },
      potentialAction: {
        value: this.state['potentialAction'] ?? defaults['potentialAction'],
        enumerable: true,
        configurable: true,
        writable: false,
      },
      sameAs: {
        value: new CRSet(this.state['sameAs'] ?? defaults['sameAs']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      subjectOf: {
        value: new CRSet(this.state['subjectOf'] ?? defaults['subjectOf']),
        enumerable: true,
        configurable: true,
        writable: false,
      },
      url: {
        value: this.state['url'] ?? defaults['url'],
        enumerable: true,
        configurable: true,
        writable: true,
      },
    })
  }
}
