import type {
  CRSet,
  CRSetSnapshot,
} from '@sovereignbase/convergent-replicated-set'

import type {
  CRIntangibleDefaultShape,
  CRIntangibleState,
} from '../../CRIntangible/types/types.js'
import type {
  CRIdReferenceValue,
  CRTypedIdReferenceValue,
} from '../../CRIdReference/types/types.js'
import type { CRStructPartialSnapshot } from '../../.types/types.js'

/**
 * Values accepted by Schema.org geospatial geometry relation properties.
 *
 * GeospatialGeometry and Place nodes are represented by CRIdReferenceValue to
 * keep recursive spatial relations finite.
 */
export type CRGeospatialGeometryRelation =
  | CRTypedIdReferenceValue<'GeospatialGeometry'>
  | CRTypedIdReferenceValue<'Place'>
  | CRIdReferenceValue

/**
 * Serializable CRDT shape for Schema.org GeospatialGeometry.
 *
 * Schema.org: A supertype of GeoShape designed to accommodate definitions from
 * geospatial best practices.
 */
export type CRGeospatialGeometryDefaultShape<Type = 'GeospatialGeometry'> = {
  /**
   * Schema.org geoContains: A relationship from a containing geometry to a
   * contained geometry or place.
   */
  geoContains: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoCoveredBy: A relationship from a geometry to another geometry
   * or place that covers it.
   */
  geoCoveredBy: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoCovers: A relationship from a covering geometry to a covered
   * geometry or place.
   */
  geoCovers: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoCrosses: A relationship between geometries or places that
   * cross.
   */
  geoCrosses: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoDisjoint: A spatial relation where geometries or places have
   * no point in common.
   */
  geoDisjoint: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoEquals: A spatial relation where geometries or places are
   * topologically equal.
   */
  geoEquals: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoIntersects: A spatial relation where geometries or places
   * have at least one point in common.
   */
  geoIntersects: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoOverlaps: A relationship between geometries or places that
   * geospatially overlap.
   */
  geoOverlaps: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoTouches: A spatial relation where geometries or places touch.
   */
  geoTouches: CRSetSnapshot<CRGeospatialGeometryRelation>
  /**
   * Schema.org geoWithin: A relationship from a geometry or place to one that
   * contains it.
   */
  geoWithin: CRSetSnapshot<CRGeospatialGeometryRelation>
} & CRIntangibleDefaultShape<Type>

/**
 * Serializable CRDT snapshot for Schema.org GeospatialGeometry.
 */
export type CRGeospatialGeometrySnapshot<Type = 'GeospatialGeometry'> =
  CRStructPartialSnapshot<
    CRGeospatialGeometryDefaultShape<Type>,
    '@id' | '@type' | 'identifier'
  >

/**
 * Runtime CRDT state surface for Schema.org GeospatialGeometry.
 */
export type CRGeospatialGeometryState<Type = 'GeospatialGeometry'> = {
  /**
   * Schema.org geoContains: A relationship from a containing geometry to a
   * contained geometry or place.
   */
  geoContains: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoCoveredBy: A relationship from a geometry to another geometry
   * or place that covers it.
   */
  geoCoveredBy: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoCovers: A relationship from a covering geometry to a covered
   * geometry or place.
   */
  geoCovers: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoCrosses: A relationship between geometries or places that
   * cross.
   */
  geoCrosses: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoDisjoint: A spatial relation where geometries or places have
   * no point in common.
   */
  geoDisjoint: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoEquals: A spatial relation where geometries or places are
   * topologically equal.
   */
  geoEquals: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoIntersects: A spatial relation where geometries or places
   * have at least one point in common.
   */
  geoIntersects: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoOverlaps: A relationship between geometries or places that
   * geospatially overlap.
   */
  geoOverlaps: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoTouches: A spatial relation where geometries or places touch.
   */
  geoTouches: Readonly<CRSet<CRGeospatialGeometryRelation>>
  /**
   * Schema.org geoWithin: A relationship from a geometry or place to one that
   * contains it.
   */
  geoWithin: Readonly<CRSet<CRGeospatialGeometryRelation>>
} & CRIntangibleState<Type>
