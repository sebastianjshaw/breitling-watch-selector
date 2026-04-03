import { useEffect } from 'react'
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

const priceFmt = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function BreitlingFilterPanel({
  open,
  onClose,
  filters,
  onChange,
  onReset,
}: BreitlingFilterPanelProps) {
  const bounds = getPriceBounds()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const setPriceMin = (v: number) => {
    const clamped = Math.min(
      Math.max(v, bounds.min),
      filters.priceMax,
    )
    onChange({ ...filters, priceMin: clamped })
  }

  const setPriceMax = (v: number) => {
    const clamped = Math.max(
      Math.min(v, bounds.max),
      filters.priceMin,
    )
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
        id="breitling-watch-selector-filter-panel"
        className={
          open
            ? 'breitling-watch-selector-filter-panel breitling-watch-selector-filter-panel-open'
            : 'breitling-watch-selector-filter-panel'
        }
        aria-hidden={!open}
      >
        <div className="breitling-watch-selector-filter-panel-header">
          <h2 className="breitling-watch-selector-filter-panel-title">Filter</h2>
          <button
            type="button"
            className="breitling-watch-selector-text-btn"
            onClick={onClose}
            aria-label="Close filters"
          >
            Close
          </button>
        </div>
        <div className="breitling-watch-selector-filter-panel-body">
          <section className="breitling-watch-selector-filter-section">
            <h3 className="breitling-watch-selector-filter-section-title">
              Collection
            </h3>
            <div className="breitling-watch-selector-filter-chips" role="group">
              {COLLECTIONS.map((c) => {
                const selected = filters.collections.has(c)
                return (
                  <button
                    key={c}
                    type="button"
                    className={
                      selected
                        ? 'breitling-watch-selector-filter-chip breitling-watch-selector-filter-chip-selected'
                        : 'breitling-watch-selector-filter-chip'
                    }
                    aria-pressed={selected}
                    onClick={() =>
                      onChange({
                        ...filters,
                        collections: toggleInSet(
                          filters.collections,
                          c as Collection,
                        ),
                      })
                    }
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </section>

          <section className="breitling-watch-selector-filter-section">
            <h3 className="breitling-watch-selector-filter-section-title">
              Price (USD)
            </h3>
            <div className="breitling-watch-selector-price-range">
              <div className="breitling-watch-selector-price-labels">
                <span>{priceFmt.format(filters.priceMin)}</span>
                <span>{priceFmt.format(filters.priceMax)}</span>
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

          <section className="breitling-watch-selector-filter-section">
            <h3 className="breitling-watch-selector-filter-section-title">
              Case material
            </h3>
            <div className="breitling-watch-selector-filter-chips" role="group">
              {CASE_MATERIALS.map((m) => {
                const selected = filters.caseMaterials.has(m)
                return (
                  <button
                    key={m}
                    type="button"
                    className={
                      selected
                        ? 'breitling-watch-selector-filter-chip breitling-watch-selector-filter-chip-selected'
                        : 'breitling-watch-selector-filter-chip'
                    }
                    aria-pressed={selected}
                    onClick={() =>
                      onChange({
                        ...filters,
                        caseMaterials: toggleInSet(
                          filters.caseMaterials,
                          m as CaseMaterial,
                        ),
                      })
                    }
                  >
                    {m}
                  </button>
                )
              })}
            </div>
          </section>

          <section className="breitling-watch-selector-filter-section">
            <h3 className="breitling-watch-selector-filter-section-title">
              Strap type
            </h3>
            <div className="breitling-watch-selector-filter-chips" role="group">
              {STRAP_TYPES.map((s) => {
                const selected = filters.strapTypes.has(s)
                return (
                  <button
                    key={s}
                    type="button"
                    className={
                      selected
                        ? 'breitling-watch-selector-filter-chip breitling-watch-selector-filter-chip-selected'
                        : 'breitling-watch-selector-filter-chip'
                    }
                    aria-pressed={selected}
                    onClick={() =>
                      onChange({
                        ...filters,
                        strapTypes: toggleInSet(
                          filters.strapTypes,
                          s as StrapType,
                        ),
                      })
                    }
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </section>

          <section className="breitling-watch-selector-filter-section">
            <h3 className="breitling-watch-selector-filter-section-title">
              Dial color
            </h3>
            <div className="breitling-watch-selector-filter-chips" role="group">
              {DIAL_COLORS.map((d) => {
                const selected = filters.dialColors.has(d)
                return (
                  <button
                    key={d}
                    type="button"
                    className={
                      selected
                        ? 'breitling-watch-selector-filter-chip breitling-watch-selector-filter-chip-selected'
                        : 'breitling-watch-selector-filter-chip'
                    }
                    aria-pressed={selected}
                    onClick={() =>
                      onChange({
                        ...filters,
                        dialColors: toggleInSet(
                          filters.dialColors,
                          d as DialColor,
                        ),
                      })
                    }
                  >
                    {d}
                  </button>
                )
              })}
            </div>
          </section>

          <section className="breitling-watch-selector-filter-section">
            <h3 className="breitling-watch-selector-filter-section-title">
              Movement
            </h3>
            <div className="breitling-watch-selector-filter-chips" role="group">
              {MOVEMENTS.map((m) => {
                const selected = filters.movements.has(m)
                return (
                  <button
                    key={m}
                    type="button"
                    className={
                      selected
                        ? 'breitling-watch-selector-filter-chip breitling-watch-selector-filter-chip-selected'
                        : 'breitling-watch-selector-filter-chip'
                    }
                    aria-pressed={selected}
                    onClick={() =>
                      onChange({
                        ...filters,
                        movements: toggleInSet(
                          filters.movements,
                          m as Movement,
                        ),
                      })
                    }
                  >
                    {m}
                  </button>
                )
              })}
            </div>
          </section>

          <section className="breitling-watch-selector-filter-section">
            <h3 className="breitling-watch-selector-filter-section-title">
              Water resistance
            </h3>
            <div className="breitling-watch-selector-filter-chips" role="group">
              {WATER_RESISTANCES.map((w) => {
                const selected = filters.waterResistances.has(w)
                return (
                  <button
                    key={w}
                    type="button"
                    className={
                      selected
                        ? 'breitling-watch-selector-filter-chip breitling-watch-selector-filter-chip-selected'
                        : 'breitling-watch-selector-filter-chip'
                    }
                    aria-pressed={selected}
                    onClick={() =>
                      onChange({
                        ...filters,
                        waterResistances: toggleInSet(
                          filters.waterResistances,
                          w as WaterResistance,
                        ),
                      })
                    }
                  >
                    {w}
                  </button>
                )
              })}
            </div>
          </section>
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
