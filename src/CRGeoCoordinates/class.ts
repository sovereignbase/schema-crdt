import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRGeoCoordinatesDefaultShape,
  CRGeoCoordinatesState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org GeoCoordinates.
 *
 * Schema.org: The geographic coordinates of a place or event.
 */
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
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org address: Physical address of the item.
   */
  declare public address: CRGeoCoordinatesState['address']
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  declare public addressCountry: CRGeoCoordinatesState['addressCountry']
  /**
   * Schema.org elevation: The elevation of a location in WGS 84.
   */
  declare public elevation: CRGeoCoordinatesState['elevation']
  /**
   * Schema.org latitude: The latitude of a location in WGS 84.
   */
  declare public latitude: CRGeoCoordinatesState['latitude']
  /**
   * Schema.org longitude: The longitude of a location in WGS 84.
   */
  declare public longitude: CRGeoCoordinatesState['longitude']
  /**
   * Schema.org postalCode: The postal code.
   */
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
      >,
      {
        latitude: /^-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)$/,
        longitude: /^-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?)$/,
      } as Partial<Record<Extract<keyof Shape, string>, RegExp>>
    )
  }
}

export * from './types/types.js'
