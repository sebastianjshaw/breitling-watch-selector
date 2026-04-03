import type {
  CaseMaterial,
  Collection,
  DialColor,
  Movement,
  StrapType,
  WaterResistance,
} from './types'

export const COLLECTIONS: Collection[] = [
  'Navitimer',
  'Chronomat',
  'Superocean',
  'Avenger',
  'Premier',
  'Top Time',
]

export const CASE_MATERIALS: CaseMaterial[] = [
  'Stainless steel',
  '18k red gold',
  'Titanium',
  'Ceramic',
  'Two-tone',
]

export const STRAP_TYPES: StrapType[] = [
  'Metal bracelet',
  'Leather',
  'Rubber',
  'NATO',
  'Mesh',
]

export const DIAL_COLORS: DialColor[] = [
  'Black',
  'Blue',
  'Green',
  'Silver',
  'White',
  'Copper',
  'Purple',
]

export const MOVEMENTS: Movement[] = ['Automatic', 'Quartz', 'Manual']

export const WATER_RESISTANCES: WaterResistance[] = [
  '30 m',
  '100 m',
  '200 m',
  '300 m',
  '500 m',
  '1000 m',
  '3000 m',
]
