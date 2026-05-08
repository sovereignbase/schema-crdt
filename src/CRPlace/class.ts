import { CRThing } from '../CRThing/class.js'
import { additionalType, description } from '../.shared/index.js'

import type {
  CRPlaceDefaultShape,
  CRPlaceSnapshot,
  CRPlaceState,
} from './types/types.js'

export class CRPlace
  extends CRThing<'Place', CRPlaceDefaultShape, CRPlaceSnapshot>
  implements CRPlaceState
{
  declare public readonly '@type': 'Place'
  declare public additionalProperty: CRPlaceState['additionalProperty']
  declare public address: CRPlaceState['address']
  declare public aggregateRating: CRPlaceState['aggregateRating']
  declare public amenityFeature: CRPlaceState['amenityFeature']
  declare public branchCode: CRPlaceState['branchCode']
  declare public containedInPlace: CRPlaceState['containedInPlace']
  declare public containsPlace: CRPlaceState['containsPlace']
  declare public event: CRPlaceState['event']
  declare public faxNumber: CRPlaceState['faxNumber']
  declare public geo: CRPlaceState['geo']
  declare public geoContains: CRPlaceState['geoContains']
  declare public geoCoveredBy: CRPlaceState['geoCoveredBy']
  declare public geoCovers: CRPlaceState['geoCovers']
  declare public geoCrosses: CRPlaceState['geoCrosses']
  declare public geoDisjoint: CRPlaceState['geoDisjoint']
  declare public geoEquals: CRPlaceState['geoEquals']
  declare public geoIntersects: CRPlaceState['geoIntersects']
  declare public geoOverlaps: CRPlaceState['geoOverlaps']
  declare public geoTouches: CRPlaceState['geoTouches']
  declare public geoWithin: CRPlaceState['geoWithin']
  declare public globalLocationNumber: CRPlaceState['globalLocationNumber']
  declare public hasCertification: CRPlaceState['hasCertification']
  declare public hasDriveThroughService: CRPlaceState['hasDriveThroughService']
  declare public hasGS1DigitalLink: CRPlaceState['hasGS1DigitalLink']
  declare public hasMap: CRPlaceState['hasMap']
  declare public isAccessibleForFree: CRPlaceState['isAccessibleForFree']
  declare public isicV4: CRPlaceState['isicV4']
  declare public keywords: CRPlaceState['keywords']
  declare public latitude: CRPlaceState['latitude']
  declare public logo: CRPlaceState['logo']
  declare public longitude: CRPlaceState['longitude']
  declare public maximumAttendeeCapacity: CRPlaceState['maximumAttendeeCapacity']
  declare public openingHoursSpecification: CRPlaceState['openingHoursSpecification']
  declare public photo: CRPlaceState['photo']
  declare public publicAccess: CRPlaceState['publicAccess']
  declare public review: CRPlaceState['review']
  declare public slogan: CRPlaceState['slogan']
  declare public smokingAllowed: CRPlaceState['smokingAllowed']
  declare public specialOpeningHoursSpecification: CRPlaceState['specialOpeningHoursSpecification']
  declare public telephone: CRPlaceState['telephone']
  declare public tourBookingPage: CRPlaceState['tourBookingPage']

  constructor(snapshot?: CRPlaceSnapshot) {
    super(
      snapshot,
      {
        '@type': 'Place',
        additionalProperty: additionalType,
        address: additionalType,
        aggregateRating: additionalType,
        amenityFeature: additionalType,
        branchCode: description,
        containedInPlace: additionalType,
        containsPlace: additionalType,
        event: additionalType,
        faxNumber: description,
        geo: additionalType,
        geoContains: additionalType,
        geoCoveredBy: additionalType,
        geoCovers: additionalType,
        geoCrosses: additionalType,
        geoDisjoint: additionalType,
        geoEquals: additionalType,
        geoIntersects: additionalType,
        geoOverlaps: additionalType,
        geoTouches: additionalType,
        geoWithin: additionalType,
        globalLocationNumber: description,
        hasCertification: additionalType,
        hasDriveThroughService: false,
        hasGS1DigitalLink: '',
        hasMap: additionalType,
        isAccessibleForFree: false,
        isicV4: description,
        keywords: additionalType,
        latitude: description,
        logo: additionalType,
        longitude: description,
        maximumAttendeeCapacity: 0,
        openingHoursSpecification: additionalType,
        photo: additionalType,
        publicAccess: false,
        review: additionalType,
        slogan: description,
        smokingAllowed: false,
        specialOpeningHoursSpecification: additionalType,
        telephone: description,
        tourBookingPage: '',
      },
      {
        additionalProperty: 'set',
        address: 'set',
        aggregateRating: 'set',
        amenityFeature: 'set',
        branchCode: 'text',
        containedInPlace: 'set',
        containsPlace: 'set',
        event: 'set',
        faxNumber: 'text',
        geo: 'set',
        geoContains: 'set',
        geoCoveredBy: 'set',
        geoCovers: 'set',
        geoCrosses: 'set',
        geoDisjoint: 'set',
        geoEquals: 'set',
        geoIntersects: 'set',
        geoOverlaps: 'set',
        geoTouches: 'set',
        geoWithin: 'set',
        globalLocationNumber: 'text',
        hasCertification: 'set',
        hasMap: 'set',
        isicV4: 'text',
        keywords: 'set',
        latitude: 'text',
        logo: 'set',
        longitude: 'text',
        openingHoursSpecification: 'set',
        photo: 'set',
        review: 'set',
        slogan: 'text',
        specialOpeningHoursSpecification: 'set',
        telephone: 'text',
      }
    )
  }
}

export * from './types/types.js'
