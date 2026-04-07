import { useEffect, useMemo, useRef, useState } from 'react'
import type { Watch } from '../data/types'
import { BreitlingWatchCard } from './BreitlingWatchCard'

type BreitlingWatchGridProps = {
  watches: Watch[]
  /** When true, show each matching watch once and disable infinite scroll. */
  filtersActive: boolean
  onSelectWatch: (watch: Watch) => void
  onResetFilters: () => void
}

const INITIAL_VISIBLE = 24
const LOAD_MORE_COUNT = 18
const MAX_VISIBLE_TILES = 600

function buildRepeatedSlots(
  watches: Watch[],
  count: number,
): Array<{ watch: Watch; slotKey: string }> {
  if (watches.length === 0) return []
  const out: Array<{ watch: Watch; slotKey: string }> = []
  for (let i = 0; i < count; i++) {
    const w = watches[i % watches.length]
    out.push({ watch: w, slotKey: `${w.id}-slot-${i}` })
  }
  return out
}

export function BreitlingWatchGrid({
  watches,
  filtersActive,
  onSelectWatch,
  onResetFilters,
}: BreitlingWatchGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const slots = useMemo(() => {
    if (filtersActive) {
      return watches.map((w) => ({ watch: w, slotKey: w.id }))
    }
    return buildRepeatedSlots(watches, visibleCount)
  }, [watches, visibleCount, filtersActive])

  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (filtersActive) return
    const node = sentinelRef.current
    if (!node || watches.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return
        setVisibleCount((n) => {
          if (n >= MAX_VISIBLE_TILES) return n
          return Math.min(n + LOAD_MORE_COUNT, MAX_VISIBLE_TILES)
        })
      },
      { root: null, rootMargin: '400px 0px', threshold: 0 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [watches, visibleCount, filtersActive])

  return (
    <>
      <p className="breitling-watch-selector-results-meta">
        {watches.length === 0 ? (
          <>No matching timepieces</>
        ) : filtersActive ? (
          <>
            {watches.length}{' '}
            {watches.length === 1
              ? 'model matches your filters'
              : 'models match your filters'}
          </>
        ) : (
          <>
            {watches.length}{' '}
            {watches.length === 1 ? 'model' : 'models'} in this view ·{' '}
            {visibleCount} tiles
            {visibleCount >= MAX_VISIBLE_TILES
              ? ' (grid cap reached)'
              : ' (scroll for more)'}
          </>
        )}
      </p>
      <div className="breitling-watch-selector-grid" role="list">
        {watches.length === 0 ? (
          <div className="breitling-watch-selector-empty">
            <div
              className="breitling-watch-selector-empty-ornament"
              aria-hidden
            >
              <svg viewBox="0 0 56 56" fill="none">
                <circle
                  className="breitling-watch-selector-empty-ornament-circle"
                  cx="28"
                  cy="28"
                  r="22"
                />
                <path
                  className="breitling-watch-selector-empty-ornament-hand"
                  d="M28 28V15M28 28l10 8"
                />
              </svg>
            </div>
            <p className="breitling-watch-selector-empty-title">
              No watches match
            </p>
            <p className="breitling-watch-selector-empty-copy">
              Adjust or clear your filters to see more of the collection.
            </p>
            <button
              type="button"
              className="breitling-watch-selector-text-btn"
              onClick={onResetFilters}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            {slots.map(({ watch: w, slotKey }, index) => (
              <div key={slotKey} role="listitem">
                <BreitlingWatchCard
                  watch={w}
                  onSelect={onSelectWatch}
                  entranceStaggerIndex={index}
                />
              </div>
            ))}
            {!filtersActive ? (
              <div
                ref={sentinelRef}
                className="breitling-watch-selector-infinite-sentinel"
                aria-hidden
              />
            ) : null}
          </>
        )}
      </div>
    </>
  )
}
