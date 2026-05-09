import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { addressCountry, crSetSnapshot } from '../.shared/index.js'

import type { CRGeoShapeDefaultShape, CRGeoShapeState } from './types/types.js'

/**
 * CRDT-backed Schema.org GeoShape.
 *
 * Schema.org: The geographic shape of a place.
 */
export class CRGeoShape<
  Type = 'GeoShape',
  Shape extends CRGeoShapeDefaultShape<Type> = CRGeoShapeDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStructuredValue<Type, Shape, Snapshot>
  implements CRGeoShapeState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org address: Physical address of the item.
   */
  declare public address: CRGeoShapeState['address']
  /**
   * Schema.org addressCountry: The country, recommended as ISO 3166-1 alpha-2.
   */
  declare public addressCountry: CRGeoShapeState['addressCountry']
  /**
   * Schema.org box: The area enclosed by a rectangle formed by two points.
   */
  declare public box: CRGeoShapeState['box']
  /**
   * Schema.org circle: A circular region centered at a latitude/longitude pair
   * with a radius in meters.
   */
  declare public circle: CRGeoShapeState['circle']
  /**
   * Schema.org elevation: The elevation of a location in WGS 84.
   */
  declare public elevation: CRGeoShapeState['elevation']
  /**
   * Schema.org line: A point-to-point path consisting of two or more points.
   */
  declare public line: CRGeoShapeState['line']
  /**
   * Schema.org polygon: An area enclosed by a point-to-point path where the
   * starting and ending points are the same.
   */
  declare public polygon: CRGeoShapeState['polygon']
  /**
   * Schema.org postalCode: The postal code.
   */
  declare public postalCode: CRGeoShapeState['postalCode']

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
        '@type': 'GeoShape' as Type,
        address: crSetSnapshot,
        addressCountry,
        box: '',
        circle: '',
        elevation: '',
        line: '',
        polygon: '',
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
        addressCountry: /^[A-Z]{2}$/,
        box: /^-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)(?:,|\s+)-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?)\s+-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)(?:,|\s+)-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?)$/,
        circle:
          /^-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)(?:,|\s+)-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?)\s+(?:0|[1-9]\d*)(?:\.\d+)?$/,
        line: /^-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)(?:,|\s+)-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?)(?:\s+-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)(?:,|\s+)-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?))+$/,
        polygon:
          /^(-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)(?:,|\s+)-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?))(?:\s+-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)(?:,|\s+)-?(?:(?:[0-9]?\d|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?)){2,}\s+\1$/,
      } as Partial<Record<Extract<keyof Shape, string>, RegExp>>
    )
  }
}

export * from './types/types.js'
