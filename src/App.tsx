import { useMemo, useState } from 'react'
import { BreitlingAIChatBar } from './components/BreitlingAIChatBar'
import { BreitlingFilterPanel } from './components/BreitlingFilterPanel'
import { BreitlingHeader } from './components/BreitlingHeader'
import { BreitlingWatchGrid } from './components/BreitlingWatchGrid'
import { BreitlingWatchModal } from './components/BreitlingWatchModal'
import { WATCHES } from './data/watches'
import type { Watch } from './data/types'
import type { ThemeMode } from './types/theme'
import {
  countActiveFilters,
  createDefaultWatchFilters,
  filterWatches,
} from './utils/filterWatches'
import './breitling-app.css'

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('day')
  const [filters, setFilters] = useState(createDefaultWatchFilters)
  const [filterPanelOpen, setFilterPanelOpen] = useState(false)
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null)
  const [conciergeOpen, setConciergeOpen] = useState(false)

  const filtered = useMemo(
    () => filterWatches(WATCHES, filters),
    [filters],
  )

  const filterCount = useMemo(() => countActiveFilters(filters), [filters])

  const rootClass =
    themeMode === 'night'
      ? 'breitling-watch-selector-root breitling-theme-night'
      : 'breitling-watch-selector-root'

  const mainInert =
    filterPanelOpen || selectedWatch !== null || conciergeOpen

  return (
    <div className={rootClass}>
      <a
        href="#breitling-watch-selector-main-content"
        className="breitling-watch-selector-skip-link"
      >
        Skip to main content
      </a>
      <BreitlingHeader
        themeMode={themeMode}
        onThemeModeChange={setThemeMode}
        filterCount={filterCount}
        filterPanelOpen={filterPanelOpen}
        onOpenFilters={() => setFilterPanelOpen(true)}
      />
      <main
        id="breitling-watch-selector-main-content"
        className="breitling-watch-selector-main"
        tabIndex={-1}
        inert={mainInert}
      >
        <BreitlingWatchGrid
          watches={filtered}
          onSelectWatch={setSelectedWatch}
          onResetFilters={() => setFilters(createDefaultWatchFilters())}
        />
      </main>
      <BreitlingFilterPanel
        open={filterPanelOpen}
        onClose={() => setFilterPanelOpen(false)}
        filters={filters}
        onChange={setFilters}
        onReset={() => setFilters(createDefaultWatchFilters())}
      />
      <BreitlingWatchModal
        key={selectedWatch?.id ?? 'breitling-watch-modal-closed'}
        watch={selectedWatch}
        onClose={() => setSelectedWatch(null)}
      />
      <BreitlingAIChatBar onOpenChange={setConciergeOpen} />
    </div>
  )
}

export default App
