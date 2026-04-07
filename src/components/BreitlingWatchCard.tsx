import { memo } from 'react'
import type { CSSProperties } from 'react'
import type { Watch } from '../data/types'

type BreitlingWatchCardProps = {
  watch: Watch
  onSelect: (watch: Watch) => void
  /** First-screen grid index for staggered entrance; omit when not animating. */
  entranceStaggerIndex?: number
}

const ENTRANCE_STAGGER_CAP = 32

function BreitlingWatchCardInner({
  watch,
  onSelect,
  entranceStaggerIndex,
}: BreitlingWatchCardProps) {
  const useEntrance =
    entranceStaggerIndex !== undefined &&
    entranceStaggerIndex < ENTRANCE_STAGGER_CAP

  return (
    <button
      type="button"
      className={
        useEntrance
          ? 'breitling-watch-selector-card breitling-watch-selector-card--entrance'
          : 'breitling-watch-selector-card'
      }
      style={
        useEntrance
          ? ({
              '--breitling-card-stagger': String(entranceStaggerIndex),
            } as CSSProperties)
          : undefined
      }
      onClick={() => onSelect(watch)}
      aria-label={`${watch.name}, ${watch.reference}`}
    >
      <span className="breitling-watch-selector-card-image-wrap">
        <img
          src={watch.heroImageUrl}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </span>
    </button>
  )
}

export const BreitlingWatchCard = memo(BreitlingWatchCardInner)
