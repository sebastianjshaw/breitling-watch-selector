export type Collection =
  | 'Navitimer'
  | 'Chronomat'
  | 'Superocean'
  | 'Avenger'
  | 'Premier'
  | 'Top Time'

export type CaseMaterial =
  | 'Stainless steel'
  | '18k red gold'
  | 'Titanium'
  | 'Ceramic'
  | 'Two-tone'

export type StrapType =
  | 'Metal bracelet'
  | 'Leather'
  | 'Rubber'
  | 'NATO'
  | 'Mesh'

export type DialColor =
  | 'Black'
  | 'Blue'
  | 'Green'
  | 'Silver'
  | 'White'
  | 'Copper'
  | 'Purple'

export type Movement = 'Automatic' | 'Quartz' | 'Manual'

export type WaterResistance =
  | '30 m'
  | '100 m'
  | '200 m'
  | '300 m'
  | '500 m'
  | '1000 m'
  | '3000 m'

export interface Watch {
  id: string
  name: string
  reference: string
  collection: Collection
  priceUsd: number
  caseMaterial: CaseMaterial
  strapType: StrapType
  dialColor: DialColor
  movement: Movement
  waterResistance: WaterResistance
  heroImageUrl: string
  description: string
  materialsDetail: string
}

export interface WatchFilters {
  collections: Set<Collection>
  priceMin: number
  priceMax: number
  caseMaterials: Set<CaseMaterial>
  strapTypes: Set<StrapType>
  dialColors: Set<DialColor>
  movements: Set<Movement>
  waterResistances: Set<WaterResistance>
}
