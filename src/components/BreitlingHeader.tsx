import { useEffect, useId, useRef, useState } from 'react'
import type { ThemeMode } from '../types/theme'
import {
  BreitlingControlBar,
  BreitlingThemeToggleButton,
} from './BreitlingControlBar'
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
  themeMode: ThemeMode
  onThemeModeChange: (mode: ThemeMode) => void
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

function IconMenu({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="breitling-watch-selector-mobile-nav-toggle-svg"
    >
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M5 8H19M5 12H19M5 16H19"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      )}
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const mobileNavTitleId = useId()

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

  useEffect(() => {
    if (!mobileNavOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileNavOpen])

  useEffect(() => {
    if (!mobileNavOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileNavOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileNavOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (mq.matches) setMobileNavOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const closeMobileNav = () => setMobileNavOpen(false)

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
          <div className="breitling-watch-selector-header-nav-desktop-only">
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
                    aria-current={label === 'Watches' ? 'page' : undefined}
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
        </div>
      </header>

      <div
        className={
          mobileNavOpen
            ? 'breitling-watch-selector-mobile-nav-backdrop breitling-watch-selector-mobile-nav-backdrop-open'
            : 'breitling-watch-selector-mobile-nav-backdrop'
        }
        aria-hidden={!mobileNavOpen}
        onClick={closeMobileNav}
      />

      <div
        id="breitling-watch-selector-mobile-nav"
        className={
          mobileNavOpen
            ? 'breitling-watch-selector-mobile-nav-panel breitling-watch-selector-mobile-nav-panel-open'
            : 'breitling-watch-selector-mobile-nav-panel'
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby={mobileNavTitleId}
        aria-hidden={!mobileNavOpen}
        inert={!mobileNavOpen}
      >
        <div className="breitling-watch-selector-mobile-nav-panel-inner">
          <h2
            id={mobileNavTitleId}
            className="breitling-watch-selector-mobile-nav-title"
          >
            Menu
          </h2>
          <nav
            className="breitling-watch-selector-mobile-nav-links"
            aria-label="Primary"
          >
            {navItems.map((label) => (
              <button
                key={label}
                type="button"
                className={
                  label === 'Watches'
                    ? 'breitling-watch-selector-mobile-nav-link breitling-watch-selector-mobile-nav-link-active'
                    : 'breitling-watch-selector-mobile-nav-link'
                }
                aria-current={label === 'Watches' ? 'page' : undefined}
                onClick={closeMobileNav}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="breitling-watch-selector-mobile-nav-theme-row">
            <BreitlingThemeToggleButton
              themeMode={themeMode}
              onThemeModeChange={onThemeModeChange}
              className="breitling-watch-selector-mobile-nav-theme-toggle"
            />
          </div>
          <div
            className="breitling-watch-selector-mobile-nav-utilities"
            aria-label="Utilities"
          >
            <button
              type="button"
              className="breitling-watch-selector-icon-btn breitling-watch-selector-mobile-nav-utility-btn"
              aria-label="Search"
              onClick={closeMobileNav}
            >
              <IconSearch />
            </button>
            <button
              type="button"
              className="breitling-watch-selector-icon-btn breitling-watch-selector-mobile-nav-utility-btn"
              aria-label="Account"
              onClick={closeMobileNav}
            >
              <IconUser />
            </button>
            <button
              type="button"
              className="breitling-watch-selector-icon-btn breitling-watch-selector-mobile-nav-utility-btn"
              aria-label="Shopping bag"
              onClick={closeMobileNav}
            >
              <IconBag />
            </button>
          </div>
        </div>
      </div>

      <div className="breitling-watch-selector-sticky-dock">
        <div
          className={
            introInView
              ? 'breitling-watch-selector-sticky-dock-inner breitling-watch-selector-sticky-dock-inner-controls-end'
              : 'breitling-watch-selector-sticky-dock-inner'
          }
        >
          <button
            type="button"
            className="breitling-watch-selector-mobile-nav-toggle"
            onClick={() => setMobileNavOpen((o) => !o)}
            aria-expanded={mobileNavOpen}
            aria-controls="breitling-watch-selector-mobile-nav"
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
          >
            <IconMenu open={mobileNavOpen} />
          </button>
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
