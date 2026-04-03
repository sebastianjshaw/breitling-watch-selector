import type { ThemeMode } from '../types/theme'

type BreitlingControlBarProps = {
  themeMode: ThemeMode
  onThemeModeChange: (mode: ThemeMode) => void
  filterCount: number
  filterPanelOpen: boolean
  onOpenFilters: () => void
}

function IconFunnel() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6H20M8 12H16M10 18H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BreitlingControlBar({
  themeMode,
  onThemeModeChange,
  filterCount,
  filterPanelOpen,
  onOpenFilters,
}: BreitlingControlBarProps) {
  const isDay = themeMode === 'day'

  return (
    <div className="breitling-watch-selector-control-bar">
      <button
        type="button"
        className={
          isDay
            ? 'breitling-watch-selector-pill-toggle breitling-watch-selector-pill-toggle-day'
            : 'breitling-watch-selector-pill-toggle breitling-watch-selector-pill-toggle-night'
        }
        onClick={() => onThemeModeChange(isDay ? 'night' : 'day')}
        aria-pressed={isDay}
        aria-label={isDay ? 'Switch to night mode' : 'Switch to day mode'}
      >
        <span className="breitling-watch-selector-pill-icon" aria-hidden />
        {isDay ? 'Day' : 'Night'}
      </button>
      <button
        type="button"
        className="breitling-watch-selector-filter-trigger"
        onClick={onOpenFilters}
        aria-expanded={filterPanelOpen}
        aria-controls="breitling-watch-selector-filter-panel"
      >
        <IconFunnel />
        Filter
        {filterCount > 0 ? (
          <span className="breitling-watch-selector-filter-badge">
            {filterCount}
          </span>
        ) : null}
      </button>
    </div>
  )
}
