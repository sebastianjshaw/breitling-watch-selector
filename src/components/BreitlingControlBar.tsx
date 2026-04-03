import type { ThemeMode } from '../types/theme'

type BreitlingThemeToggleButtonProps = {
  themeMode: ThemeMode
  onThemeModeChange: (mode: ThemeMode) => void
  className?: string
}

export function BreitlingThemeToggleButton({
  themeMode,
  onThemeModeChange,
  className,
}: BreitlingThemeToggleButtonProps) {
  const isDay = themeMode === 'day'
  const pillClass =
    isDay
      ? 'breitling-watch-selector-pill-toggle breitling-watch-selector-pill-toggle-day'
      : 'breitling-watch-selector-pill-toggle breitling-watch-selector-pill-toggle-night'

  return (
    <button
      type="button"
      className={className ? `${pillClass} ${className}` : pillClass}
      onClick={() => onThemeModeChange(isDay ? 'night' : 'day')}
      aria-pressed={isDay}
      aria-label={isDay ? 'Switch to night mode' : 'Switch to day mode'}
    >
      <span className="breitling-watch-selector-pill-icon" aria-hidden />
      {isDay ? 'Day' : 'Night'}
    </button>
  )
}

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
  return (
    <div className="breitling-watch-selector-control-bar">
      <div className="breitling-watch-selector-control-bar-theme-desktop">
        <BreitlingThemeToggleButton
          themeMode={themeMode}
          onThemeModeChange={onThemeModeChange}
        />
      </div>
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
