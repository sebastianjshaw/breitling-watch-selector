import { getPriceBounds, WATCHES } from '../data/watches'
import type { Watch, WatchFilters } from '../data/types'

export function createDefaultWatchFilters(): WatchFilters {
  const { min, max } = getPriceBounds()
  return {
    collections: new Set(),
    priceMin: min,
    priceMax: max,
    caseMaterials: new Set(),
    strapTypes: new Set(),
    dialColors: new Set(),
    movements: new Set(),
    waterResistances: new Set(),
  }
}

export function filterWatches(watches: Watch[], f: WatchFilters): Watch[] {
  return watches.filter((w) => {
    if (f.collections.size > 0 && !f.collections.has(w.collection)) {
      return false
    }
    if (w.priceUsd < f.priceMin || w.priceUsd > f.priceMax) {
      return false
    }
    if (f.caseMaterials.size > 0 && !f.caseMaterials.has(w.caseMaterial)) {
      return false
    }
    if (f.strapTypes.size > 0 && !f.strapTypes.has(w.strapType)) {
      return false
    }
    if (f.dialColors.size > 0 && !f.dialColors.has(w.dialColor)) {
      return false
    }
    if (f.movements.size > 0 && !f.movements.has(w.movement)) {
      return false
    }
    if (
      f.waterResistances.size > 0 &&
      !f.waterResistances.has(w.waterResistance)
    ) {
      return false
    }
    return true
  })
}

export function countActiveFilters(f: WatchFilters): number {
  const { min, max } = getPriceBounds()
  let n = 0
  if (f.collections.size > 0) n += f.collections.size
  if (f.caseMaterials.size > 0) n += f.caseMaterials.size
  if (f.strapTypes.size > 0) n += f.strapTypes.size
  if (f.dialColors.size > 0) n += f.dialColors.size
  if (f.movements.size > 0) n += f.movements.size
  if (f.waterResistances.size > 0) n += f.waterResistances.size
  if (f.priceMin > min || f.priceMax < max) n += 1
  return n
}

export { WATCHES }
