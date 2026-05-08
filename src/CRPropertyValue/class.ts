import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRStructuredValue } from '../CRStructuredValue/class.js'
import { crSetSnapshot, crTextSnapshot } from '../.shared/index.js'

import type {
  CRPropertyValueDefaultShape,
  CRPropertyValueState,
} from './types/types.js'

export class CRPropertyValue<
  Type = 'PropertyValue',
  Shape extends CRPropertyValueDefaultShape<Type> =
    CRPropertyValueDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRStructuredValue<Type, Shape, Snapshot>
  implements CRPropertyValueState<Type>
{
  declare public readonly '@type': Type
  declare public maxValue: CRPropertyValueState['maxValue']
  declare public measurementMethod: CRPropertyValueState['measurementMethod']
  declare public measurementTechnique: CRPropertyValueState['measurementTechnique']
  declare public minValue: CRPropertyValueState['minValue']
  declare public propertyID: CRPropertyValueState['propertyID']
  declare public unitCode: CRPropertyValueState['unitCode']
  declare public unitText: CRPropertyValueState['unitText']
  declare public value: CRPropertyValueState['value']
  declare public valueReference: CRPropertyValueState['valueReference']

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
        '@type': 'PropertyValue' as Type,
        maxValue: 0,
        measurementMethod: crSetSnapshot,
        measurementTechnique: crSetSnapshot,
        minValue: 0,
        propertyID: crTextSnapshot,
        unitCode: crTextSnapshot,
        unitText: crTextSnapshot,
        value: '',
        valueReference: crSetSnapshot,
        ...defaultShape,
      } as Partial<Shape>,
      {
        measurementMethod: 'set',
        measurementTechnique: 'set',
        propertyID: 'text',
        unitCode: 'text',
        unitText: 'text',
        valueReference: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
