import { useMemo, useState } from 'react'
import { BreitlingAIChatBar } from './components/BreitlingAIChatBar'
import { BreitlingFilterPanel } from './components/BreitlingFilterPanel'
import { BreitlingHeader } from './components/BreitlingHeader'
import { BreitlingWatchGrid } from './components/BreitlingWatchGrid'
import { BreitlingWatchModal } from './components/BreitlingWatchModal'
import type { Watch } from './data/types'
import {
  countActiveFilters,
  createDefaultWatchFilters,
  filterWatches,
  WATCHES,
} from './utils/filterWatches'
import './breitling-app.css'

type ThemeMode = 'day' | 'night'

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('day')
  const [filters, setFilters] = useState(createDefaultWatchFilters)
  const [filterPanelOpen, setFilterPanelOpen] = useState(false)
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null)

  const filtered = useMemo(
    () => filterWatches(WATCHES, filters),
    [filters],
  )

  const watchGridKey = useMemo(
    () => filtered.map((w) => w.id).join('|'),
    [filtered],
  )

  const filterCount = useMemo(() => countActiveFilters(filters), [filters])

  const rootClass =
    themeMode === 'night'
      ? 'breitling-watch-selector-root breitling-theme-night'
      : 'breitling-watch-selector-root'

  return (
    <div className={rootClass}>
      <BreitlingHeader
        themeMode={themeMode}
        onThemeModeChange={setThemeMode}
        filterCount={filterCount}
        filterPanelOpen={filterPanelOpen}
        onOpenFilters={() => setFilterPanelOpen(true)}
      />
      <main className="breitling-watch-selector-main">
        <BreitlingWatchGrid
          key={watchGridKey}
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
      <BreitlingAIChatBar />
    </div>
  )
}

export default App
