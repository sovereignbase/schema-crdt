import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRThing } from '../CRThing/class.js'
import { additionalType, description } from '../.shared/index.js'

import type {
  CRPlaceDefaultShape,
  CRPlaceSnapshot,
  CRPlaceState,
} from './types/types.js'

export class CRPlace<
  Type = 'Place',
  Shape extends CRPlaceDefaultShape<Type> = CRPlaceDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRThing<Type, Shape, Snapshot>
  implements CRPlaceState<Type>
{
  declare public readonly '@type': Type
  declare public additionalProperty: CRPlaceState<Type>['additionalProperty']
  declare public address: CRPlaceState<Type>['address']
  declare public aggregateRating: CRPlaceState<Type>['aggregateRating']
  declare public amenityFeature: CRPlaceState<Type>['amenityFeature']
  declare public branchCode: CRPlaceState<Type>['branchCode']
  declare public containedInPlace: CRPlaceState<Type>['containedInPlace']
  declare public containsPlace: CRPlaceState<Type>['containsPlace']
  declare public event: CRPlaceState<Type>['event']
  declare public faxNumber: CRPlaceState<Type>['faxNumber']
  declare public geo: CRPlaceState<Type>['geo']
  declare public geoContains: CRPlaceState<Type>['geoContains']
  declare public geoCoveredBy: CRPlaceState<Type>['geoCoveredBy']
  declare public geoCovers: CRPlaceState<Type>['geoCovers']
  declare public geoCrosses: CRPlaceState<Type>['geoCrosses']
  declare public geoDisjoint: CRPlaceState<Type>['geoDisjoint']
  declare public geoEquals: CRPlaceState<Type>['geoEquals']
  declare public geoIntersects: CRPlaceState<Type>['geoIntersects']
  declare public geoOverlaps: CRPlaceState<Type>['geoOverlaps']
  declare public geoTouches: CRPlaceState<Type>['geoTouches']
  declare public geoWithin: CRPlaceState<Type>['geoWithin']
  declare public globalLocationNumber: CRPlaceState<Type>['globalLocationNumber']
  declare public hasCertification: CRPlaceState<Type>['hasCertification']
  declare public hasDriveThroughService: CRPlaceState<Type>['hasDriveThroughService']
  declare public hasGS1DigitalLink: CRPlaceState<Type>['hasGS1DigitalLink']
  declare public hasMap: CRPlaceState<Type>['hasMap']
  declare public isAccessibleForFree: CRPlaceState<Type>['isAccessibleForFree']
  declare public isicV4: CRPlaceState<Type>['isicV4']
  declare public keywords: CRPlaceState<Type>['keywords']
  declare public latitude: CRPlaceState<Type>['latitude']
  declare public logo: CRPlaceState<Type>['logo']
  declare public longitude: CRPlaceState<Type>['longitude']
  declare public maximumAttendeeCapacity: CRPlaceState<Type>['maximumAttendeeCapacity']
  declare public openingHoursSpecification: CRPlaceState<Type>['openingHoursSpecification']
  declare public photo: CRPlaceState<Type>['photo']
  declare public publicAccess: CRPlaceState<Type>['publicAccess']
  declare public review: CRPlaceState<Type>['review']
  declare public slogan: CRPlaceState<Type>['slogan']
  declare public smokingAllowed: CRPlaceState<Type>['smokingAllowed']
  declare public specialOpeningHoursSpecification: CRPlaceState<Type>['specialOpeningHoursSpecification']
  declare public telephone: CRPlaceState<Type>['telephone']
  declare public tourBookingPage: CRPlaceState<Type>['tourBookingPage']

  constructor(
    snapshot?: Snapshot,
    defaultShape?: Partial<Shape>,
    crdtProperties?: Partial<
      Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
    >
  ) {
    super(
      snapshot,
      {
        '@type': 'Place' as Type,
        additionalProperty:
          additionalType as unknown as CRPlaceDefaultShape<Type>['additionalProperty'],
        address: additionalType,
        aggregateRating:
          additionalType as unknown as CRPlaceDefaultShape<Type>['aggregateRating'],
        amenityFeature:
          additionalType as unknown as CRPlaceDefaultShape<Type>['amenityFeature'],
        branchCode: '',
        containedInPlace: additionalType,
        containsPlace: additionalType,
        event: additionalType,
        faxNumber: '',
        geo: additionalType as unknown as CRPlaceDefaultShape<Type>['geo'],
        geoContains:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoContains'],
        geoCoveredBy:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoCoveredBy'],
        geoCovers:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoCovers'],
        geoCrosses:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoCrosses'],
        geoDisjoint:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoDisjoint'],
        geoEquals:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoEquals'],
        geoIntersects:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoIntersects'],
        geoOverlaps:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoOverlaps'],
        geoTouches:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoTouches'],
        geoWithin:
          additionalType as unknown as CRPlaceDefaultShape<Type>['geoWithin'],
        globalLocationNumber: '',
        hasCertification: additionalType,
        hasDriveThroughService: false,
        hasGS1DigitalLink: '',
        hasMap: additionalType,
        isAccessibleForFree: false,
        isicV4: '',
        keywords: additionalType,
        latitude: '',
        logo: additionalType,
        longitude: '',
        maximumAttendeeCapacity: 0,
        openingHoursSpecification:
          additionalType as unknown as CRPlaceDefaultShape<Type>['openingHoursSpecification'],
        photo: additionalType,
        publicAccess: false,
        review: additionalType,
        slogan: description,
        smokingAllowed: false,
        specialOpeningHoursSpecification:
          additionalType as unknown as CRPlaceDefaultShape<Type>['specialOpeningHoursSpecification'],
        telephone: '',
        tourBookingPage: '',
        ...defaultShape,
      } as Partial<Shape>,
      {
        additionalProperty: 'set',
        address: 'set',
        aggregateRating: 'set',
        amenityFeature: 'set',
        containedInPlace: 'set',
        containsPlace: 'set',
        event: 'set',
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
        hasCertification: 'set',
        hasMap: 'set',
        keywords: 'set',
        logo: 'set',
        openingHoursSpecification: 'set',
        photo: 'set',
        review: 'set',
        slogan: 'text',
        specialOpeningHoursSpecification: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >,
      {
        latitude: /^-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)$/,
        longitude: /^-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?)$/,
      } as Partial<Record<Extract<keyof Shape, string>, RegExp>>
    )
  }
}

export * from './types/types.js'
