import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRIntangible } from '../CRIntangible/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRGeospatialGeometryDefaultShape,
  CRGeospatialGeometryState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org GeospatialGeometry.
 *
 * Schema.org: A supertype of GeoShape designed to accommodate definitions from
 * geospatial best practices.
 */
export class CRGeospatialGeometry<
  Type = 'GeospatialGeometry',
  Shape extends CRGeospatialGeometryDefaultShape<Type> =
    CRGeospatialGeometryDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRIntangible<Type, Shape, Snapshot>
  implements CRGeospatialGeometryState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  /**
   * Schema.org geoContains: A relationship from a containing geometry to a
   * contained geometry or place.
   */
  declare public geoContains: CRGeospatialGeometryState['geoContains']
  /**
   * Schema.org geoCoveredBy: A relationship from a geometry to another geometry
   * or place that covers it.
   */
  declare public geoCoveredBy: CRGeospatialGeometryState['geoCoveredBy']
  /**
   * Schema.org geoCovers: A relationship from a covering geometry to a covered
   * geometry or place.
   */
  declare public geoCovers: CRGeospatialGeometryState['geoCovers']
  /**
   * Schema.org geoCrosses: A relationship between geometries or places that
   * cross.
   */
  declare public geoCrosses: CRGeospatialGeometryState['geoCrosses']
  /**
   * Schema.org geoDisjoint: A spatial relation where geometries or places have
   * no point in common.
   */
  declare public geoDisjoint: CRGeospatialGeometryState['geoDisjoint']
  /**
   * Schema.org geoEquals: A spatial relation where geometries or places are
   * topologically equal.
   */
  declare public geoEquals: CRGeospatialGeometryState['geoEquals']
  /**
   * Schema.org geoIntersects: A spatial relation where geometries or places
   * have at least one point in common.
   */
  declare public geoIntersects: CRGeospatialGeometryState['geoIntersects']
  /**
   * Schema.org geoOverlaps: A relationship between geometries or places that
   * geospatially overlap.
   */
  declare public geoOverlaps: CRGeospatialGeometryState['geoOverlaps']
  /**
   * Schema.org geoTouches: A spatial relation where geometries or places touch.
   */
  declare public geoTouches: CRGeospatialGeometryState['geoTouches']
  /**
   * Schema.org geoWithin: A relationship from a geometry or place to one that
   * contains it.
   */
  declare public geoWithin: CRGeospatialGeometryState['geoWithin']

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
        '@type': 'GeospatialGeometry' as Type,
        geoContains: crSetSnapshot,
        geoCoveredBy: crSetSnapshot,
        geoCovers: crSetSnapshot,
        geoCrosses: crSetSnapshot,
        geoDisjoint: crSetSnapshot,
        geoEquals: crSetSnapshot,
        geoIntersects: crSetSnapshot,
        geoOverlaps: crSetSnapshot,
        geoTouches: crSetSnapshot,
        geoWithin: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
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
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
