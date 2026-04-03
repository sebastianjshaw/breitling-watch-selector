import { useEffect, useRef } from 'react'
import {
  CASE_MATERIALS,
  COLLECTIONS,
  DIAL_COLORS,
  MOVEMENTS,
  STRAP_TYPES,
  WATER_RESISTANCES,
} from '../data/constants'
import { getPriceBounds } from '../data/watches'
import type {
  CaseMaterial,
  Collection,
  DialColor,
  Movement,
  StrapType,
  WatchFilters,
  WaterResistance,
} from '../data/types'
import { useOverlayFocus } from '../hooks/useOverlayFocus'
import { formatUsd } from '../utils/formatUsd'
import { BreitlingFilterChipSection } from './BreitlingFilterChipSection'

type BreitlingFilterPanelProps = {
  open: boolean
  onClose: () => void
  filters: WatchFilters
  onChange: (next: WatchFilters) => void
  onReset: () => void
}

function toggleInSet<T>(set: Set<T>, item: T): Set<T> {
  const next = new Set(set)
  if (next.has(item)) next.delete(item)
  else next.add(item)
  return next
}

export function BreitlingFilterPanel({
  open,
  onClose,
  filters,
  onChange,
  onReset,
}: BreitlingFilterPanelProps) {
  const bounds = getPriceBounds()
  const panelRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useOverlayFocus(open, panelRef, closeRef)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const setPriceMin = (v: number) => {
    const clamped = Math.min(Math.max(v, bounds.min), filters.priceMax)
    onChange({ ...filters, priceMin: clamped })
  }

  const setPriceMax = (v: number) => {
    const clamped = Math.max(Math.min(v, bounds.max), filters.priceMin)
    onChange({ ...filters, priceMax: clamped })
  }

  return (
    <>
      <div
        className={
          open
            ? 'breitling-watch-selector-filter-backdrop breitling-watch-selector-filter-backdrop-open'
            : 'breitling-watch-selector-filter-backdrop'
        }
        aria-hidden={!open}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      />
      <aside
        ref={panelRef}
        id="breitling-watch-selector-filter-panel"
        className={
          open
            ? 'breitling-watch-selector-filter-panel breitling-watch-selector-filter-panel-open'
            : 'breitling-watch-selector-filter-panel'
        }
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-labelledby="breitling-watch-selector-filter-panel-heading"
      >
        <div className="breitling-watch-selector-filter-panel-header">
          <h2
            id="breitling-watch-selector-filter-panel-heading"
            className="breitling-watch-selector-filter-panel-title"
          >
            Filter
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="breitling-watch-selector-text-btn"
            onClick={onClose}
            aria-label="Close filters"
          >
            Close
          </button>
        </div>
        <div className="breitling-watch-selector-filter-panel-body">
          <BreitlingFilterChipSection
            title="Collection"
            items={COLLECTIONS}
            selected={filters.collections}
            onToggle={(c) =>
              onChange({
                ...filters,
                collections: toggleInSet(filters.collections, c as Collection),
              })
            }
          />

          <section className="breitling-watch-selector-filter-section">
            <h3 className="breitling-watch-selector-filter-section-title">
              Price (USD)
            </h3>
            <div className="breitling-watch-selector-price-range">
              <div className="breitling-watch-selector-price-labels">
                <span>{formatUsd(filters.priceMin)}</span>
                <span>{formatUsd(filters.priceMax)}</span>
              </div>
              <div className="breitling-watch-selector-range-dual">
                <label>
                  Min
                  <input
                    type="number"
                    min={bounds.min}
                    max={bounds.max}
                    value={filters.priceMin}
                    onChange={(e) =>
                      setPriceMin(Number(e.target.value) || bounds.min)
                    }
                  />
                </label>
                <label>
                  Max
                  <input
                    type="number"
                    min={bounds.min}
                    max={bounds.max}
                    value={filters.priceMax}
                    onChange={(e) =>
                      setPriceMax(Number(e.target.value) || bounds.max)
                    }
                  />
                </label>
              </div>
            </div>
          </section>

          <BreitlingFilterChipSection
            title="Case material"
            items={CASE_MATERIALS}
            selected={filters.caseMaterials}
            onToggle={(m) =>
              onChange({
                ...filters,
                caseMaterials: toggleInSet(
                  filters.caseMaterials,
                  m as CaseMaterial,
                ),
              })
            }
          />

          <BreitlingFilterChipSection
            title="Strap type"
            items={STRAP_TYPES}
            selected={filters.strapTypes}
            onToggle={(s) =>
              onChange({
                ...filters,
                strapTypes: toggleInSet(filters.strapTypes, s as StrapType),
              })
            }
          />

          <BreitlingFilterChipSection
            title="Dial color"
            items={DIAL_COLORS}
            selected={filters.dialColors}
            onToggle={(d) =>
              onChange({
                ...filters,
                dialColors: toggleInSet(filters.dialColors, d as DialColor),
              })
            }
          />

          <BreitlingFilterChipSection
            title="Movement"
            items={MOVEMENTS}
            selected={filters.movements}
            onToggle={(m) =>
              onChange({
                ...filters,
                movements: toggleInSet(filters.movements, m as Movement),
              })
            }
          />

          <BreitlingFilterChipSection
            title="Water resistance"
            items={WATER_RESISTANCES}
            selected={filters.waterResistances}
            onToggle={(w) =>
              onChange({
                ...filters,
                waterResistances: toggleInSet(
                  filters.waterResistances,
                  w as WaterResistance,
                ),
              })
            }
          />
        </div>
        <div className="breitling-watch-selector-filter-footer">
          <button
            type="button"
            className="breitling-watch-selector-btn-ghost"
            onClick={onReset}
          >
            Reset all
          </button>
          <button
            type="button"
            className="breitling-watch-selector-btn-primary"
            onClick={onClose}
          >
            View results
          </button>
        </div>
      </aside>
    </>
  )
}
