import type { CRStructSnapshot } from '@sovereignbase/convergent-replicated-struct'

import { CRCreativeWork } from '../CRCreativeWork/class.js'
import { crSetSnapshot } from '../.shared/index.js'

import type {
  CRSoftwareApplicationDefaultShape,
  CRSoftwareApplicationState,
} from './types/types.js'

/**
 * CRDT-backed Schema.org SoftwareApplication.
 *
 * Schema.org: A software application.
 */
export class CRSoftwareApplication<
  Type = 'SoftwareApplication',
  Shape extends CRSoftwareApplicationDefaultShape<Type> =
    CRSoftwareApplicationDefaultShape<Type>,
  Snapshot extends Partial<CRStructSnapshot<Shape>> = Partial<
    CRStructSnapshot<Shape>
  >,
>
  extends CRCreativeWork<Type, Shape, Snapshot>
  implements CRSoftwareApplicationState<Type>
{
  /**
   * Schema.org type name for this node.
   */
  declare public readonly '@type': Type
  declare public applicationCategory: CRSoftwareApplicationState<Type>['applicationCategory']
  declare public applicationSubCategory: CRSoftwareApplicationState<Type>['applicationSubCategory']
  declare public applicationSuite: CRSoftwareApplicationState<Type>['applicationSuite']
  declare public availableOnDevice: CRSoftwareApplicationState<Type>['availableOnDevice']
  declare public countriesNotSupported: CRSoftwareApplicationState<Type>['countriesNotSupported']
  declare public countriesSupported: CRSoftwareApplicationState<Type>['countriesSupported']
  declare public downloadUrl: CRSoftwareApplicationState<Type>['downloadUrl']
  declare public featureList: CRSoftwareApplicationState<Type>['featureList']
  declare public fileSize: CRSoftwareApplicationState<Type>['fileSize']
  declare public installUrl: CRSoftwareApplicationState<Type>['installUrl']
  declare public memoryRequirements: CRSoftwareApplicationState<Type>['memoryRequirements']
  declare public operatingSystem: CRSoftwareApplicationState<Type>['operatingSystem']
  declare public permissions: CRSoftwareApplicationState<Type>['permissions']
  declare public processorRequirements: CRSoftwareApplicationState<Type>['processorRequirements']
  declare public releaseNotes: CRSoftwareApplicationState<Type>['releaseNotes']
  declare public runtimePlatform: CRSoftwareApplicationState<Type>['runtimePlatform']
  declare public screenshot: CRSoftwareApplicationState<Type>['screenshot']
  declare public softwareAddOn: CRSoftwareApplicationState<Type>['softwareAddOn']
  declare public softwareHelp: CRSoftwareApplicationState<Type>['softwareHelp']
  declare public softwareRequirements: CRSoftwareApplicationState<Type>['softwareRequirements']
  declare public softwareVersion: CRSoftwareApplicationState<Type>['softwareVersion']
  declare public storageRequirements: CRSoftwareApplicationState<Type>['storageRequirements']
  declare public supportingData: CRSoftwareApplicationState<Type>['supportingData']

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
        '@type': 'SoftwareApplication' as Type,
        applicationCategory: crSetSnapshot,
        applicationSubCategory: crSetSnapshot,
        applicationSuite: '',
        availableOnDevice: crSetSnapshot,
        countriesNotSupported: crSetSnapshot,
        countriesSupported: crSetSnapshot,
        downloadUrl: '',
        featureList: crSetSnapshot,
        fileSize: '',
        installUrl: '',
        memoryRequirements: crSetSnapshot,
        operatingSystem: crSetSnapshot,
        permissions: crSetSnapshot,
        processorRequirements: '',
        releaseNotes: crSetSnapshot,
        runtimePlatform: crSetSnapshot,
        screenshot: crSetSnapshot,
        softwareAddOn: crSetSnapshot,
        softwareHelp: crSetSnapshot,
        softwareRequirements: crSetSnapshot,
        softwareVersion: '',
        storageRequirements: crSetSnapshot,
        supportingData: crSetSnapshot,
        ...defaultShape,
      } as unknown as Partial<Shape>,
      {
        applicationCategory: 'set',
        applicationSubCategory: 'set',
        availableOnDevice: 'set',
        countriesNotSupported: 'set',
        countriesSupported: 'set',
        featureList: 'set',
        memoryRequirements: 'set',
        operatingSystem: 'set',
        permissions: 'set',
        releaseNotes: 'set',
        runtimePlatform: 'set',
        screenshot: 'set',
        softwareAddOn: 'set',
        softwareHelp: 'set',
        softwareRequirements: 'set',
        storageRequirements: 'set',
        supportingData: 'set',
        ...crdtProperties,
      } as Partial<
        Record<Extract<keyof Shape, string>, 'text' | 'set' | 'list' | 'map'>
      >
    )
  }
}

export * from './types/types.js'
