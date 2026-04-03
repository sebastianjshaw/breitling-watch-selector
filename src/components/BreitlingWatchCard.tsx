import type { Watch } from '../data/types'

type BreitlingWatchCardProps = {
  watch: Watch
  onSelect: (watch: Watch) => void
}

export function BreitlingWatchCard({
  watch,
  onSelect,
}: BreitlingWatchCardProps) {
  return (
    <button
      type="button"
      className="breitling-watch-selector-card"
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
