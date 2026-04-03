import { useEffect, useRef, useState } from 'react'
import { BreitlingControlBar } from './BreitlingControlBar'
import { BreitlingLogoMark } from './BreitlingLogoMark'

const navItems = [
  'Watches',
  'Collections',
  'Accessories',
  'Services',
  'About Breitling',
  'Stores',
] as const

export type BreitlingHeaderProps = {
  themeMode: 'day' | 'night'
  onThemeModeChange: (mode: 'day' | 'night') => void
  filterCount: number
  filterPanelOpen: boolean
  onOpenFilters: () => void
}

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 16L20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 19C6 15.5 8.5 13 12 13C15.5 13 18 15.5 18 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconBag() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 8V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="8"
        width="14"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function BreitlingHeader({
  themeMode,
  onThemeModeChange,
  filterCount,
  filterPanelOpen,
  onOpenFilters,
}: BreitlingHeaderProps) {
  const introRef = useRef<HTMLElement | null>(null)
  const [introInView, setIntroInView] = useState(true)

  useEffect(() => {
    const el = introRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setIntroInView(entry.isIntersecting)
      },
      { root: null, rootMargin: '0px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <header
        ref={introRef}
        className="breitling-watch-selector-header-intro"
      >
        <div className="breitling-watch-selector-header-intro-inner">
          <a href="#" className="breitling-watch-selector-logo-link">
            <BreitlingLogoMark className="breitling-watch-selector-logo-mark" />
            <span className="breitling-watch-selector-logo-wordmark">
              Breitling
            </span>
            <span className="breitling-watch-selector-logo-year">1884</span>
          </a>
          <div className="breitling-watch-selector-nav-row">
            <nav className="breitling-watch-selector-nav" aria-label="Primary">
              {navItems.map((label) => (
                <button
                  key={label}
                  type="button"
                  className={
                    label === 'Watches'
                      ? 'breitling-watch-selector-nav-link breitling-watch-selector-nav-link-active'
                      : 'breitling-watch-selector-nav-link'
                  }
                >
                  {label}
                </button>
              ))}
            </nav>
            <div
              className="breitling-watch-selector-header-utilities"
              aria-label="Utilities"
            >
              <button
                type="button"
                className="breitling-watch-selector-icon-btn"
                aria-label="Search"
              >
                <IconSearch />
              </button>
              <button
                type="button"
                className="breitling-watch-selector-icon-btn"
                aria-label="Account"
              >
                <IconUser />
              </button>
              <button
                type="button"
                className="breitling-watch-selector-icon-btn"
                aria-label="Shopping bag"
              >
                <IconBag />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="breitling-watch-selector-sticky-dock">
        <div
          className={
            introInView
              ? 'breitling-watch-selector-sticky-dock-inner breitling-watch-selector-sticky-dock-inner-controls-end'
              : 'breitling-watch-selector-sticky-dock-inner'
          }
        >
          <a
            href="#"
            className={
              introInView
                ? 'breitling-watch-selector-sticky-dock-logo breitling-watch-selector-sticky-dock-logo-concealed'
                : 'breitling-watch-selector-sticky-dock-logo'
            }
            tabIndex={introInView ? -1 : 0}
            aria-hidden={introInView}
          >
            <BreitlingLogoMark className="breitling-watch-selector-sticky-dock-logo-mark" />
            <span className="breitling-watch-selector-sticky-dock-logo-text">
              <span className="breitling-watch-selector-sticky-dock-logo-word">
                Breitling
              </span>
              <span className="breitling-watch-selector-sticky-dock-logo-year">
                1884
              </span>
            </span>
          </a>
          <BreitlingControlBar
            themeMode={themeMode}
            onThemeModeChange={onThemeModeChange}
            filterCount={filterCount}
            filterPanelOpen={filterPanelOpen}
            onOpenFilters={onOpenFilters}
          />
        </div>
      </div>
    </>
  )
}
