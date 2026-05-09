import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRGeoCoordinatesDefaultShape,
  CRGeoCoordinatesState,
} from './types/types.js'

export class CRGeoCoordinates<
  Type = 'GeoCoordinates',
  Shape extends CRGeoCoordinatesDefaultShape<Type> =
    CRGeoCoordinatesDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStructuredValue<Type, Shape, Snapshot>
  implements CRGeoCoordinatesState<Type>
{
  declare public readonly '@type': Type
  declare public address: CRGeoCoordinatesState['address']
  declare public addressCountry: CRGeoCoordinatesState['addressCountry']
  declare public elevation: CRGeoCoordinatesState['elevation']
  declare public latitude: CRGeoCoordinatesState['latitude']
  declare public longitude: CRGeoCoordinatesState['longitude']
  declare public postalCode: CRGeoCoordinatesState['postalCode']

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
        '@type': 'GeoCoordinates' as Type,
        address: crSetSnapshot,
        addressCountry: '',
        elevation: '',
        latitude: '',
        longitude: '',
        postalCode: '',
        ...defaultShape,
      } as Partial<Shape>,
      {
        address: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
