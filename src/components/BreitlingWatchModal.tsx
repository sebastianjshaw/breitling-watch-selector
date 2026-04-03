import { useEffect, useState } from 'react'
import type { Watch } from '../data/types'

type BreitlingWatchModalProps = {
  watch: Watch | null
  onClose: () => void
}

const priceUsd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function IconDial() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 16L16 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 16L21 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconCase() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect
        x="8"
        y="10"
        width="16"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 10V8H20V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconStrap() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M6 14H26V18H6V14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 14V12C10 10 12 8 16 8C20 8 22 10 22 12V14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function IconDetail() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="10" cy="12" r="2" fill="currentColor" />
      <circle cx="16" cy="12" r="2" fill="currentColor" />
      <circle cx="22" cy="12" r="2" fill="currentColor" />
      <path
        d="M8 20H24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const THUMB_COUNT = 5
const THUMB_ICONS = [IconDial, IconCase, IconStrap, IconDetail] as const

export function BreitlingWatchModal({ watch, onClose }: BreitlingWatchModalProps) {
  const [activeThumb, setActiveThumb] = useState(0)
  const open = watch !== null

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!watch) return null

  return (
    <div
      className={
        open
          ? 'breitling-watch-selector-modal-backdrop breitling-watch-selector-modal-backdrop-open'
          : 'breitling-watch-selector-modal-backdrop'
      }
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="breitling-watch-selector-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="breitling-watch-modal-title"
      >
        <button
          type="button"
          className="breitling-watch-selector-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="breitling-watch-selector-modal-visual">
          <div className="breitling-watch-selector-modal-hero">
            <img src={watch.heroImageUrl} alt="" />
          </div>
          <div className="breitling-watch-selector-modal-thumbs">
            {Array.from({ length: THUMB_COUNT }, (_, i) => {
              const Icon = i > 0 ? THUMB_ICONS[i - 1] : null
              const selected = activeThumb === i
              return (
                <button
                  key={i}
                  type="button"
                  className={
                    selected
                      ? 'breitling-watch-selector-modal-thumb breitling-watch-selector-modal-thumb-selected'
                      : 'breitling-watch-selector-modal-thumb'
                  }
                  onClick={() => setActiveThumb(i)}
                  aria-label={
                    i === 0
                      ? 'Hero view'
                      : `Placeholder view ${i + 1} of ${THUMB_COUNT}`
                  }
                  aria-pressed={selected}
                >
                  {i === 0 ? (
                    <img
                      src={watch.heroImageUrl}
                      alt=""
                      width={48}
                      height={48}
                      className="breitling-watch-selector-modal-thumb-photo"
                    />
                  ) : Icon ? (
                    <Icon />
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>
        <div className="breitling-watch-selector-modal-detail">
          <p className="breitling-watch-selector-modal-ref">{watch.reference}</p>
          <h2
            id="breitling-watch-modal-title"
            className="breitling-watch-selector-modal-name"
          >
            {watch.name}
          </h2>
          <p className="breitling-watch-selector-modal-price">
            {priceUsd.format(watch.priceUsd)}
          </p>
          <div className="breitling-watch-selector-modal-spec-block">
            <strong>Materials &amp; case</strong>
            {watch.materialsDetail}
          </div>
          <p className="breitling-watch-selector-modal-desc">{watch.description}</p>
          <dl className="breitling-watch-selector-modal-meta-grid">
            <div className="breitling-watch-selector-modal-meta-item">
              <dt>Collection</dt>
              <dd>{watch.collection}</dd>
            </div>
            <div className="breitling-watch-selector-modal-meta-item">
              <dt>Movement</dt>
              <dd>{watch.movement}</dd>
            </div>
            <div className="breitling-watch-selector-modal-meta-item">
              <dt>Dial</dt>
              <dd>{watch.dialColor}</dd>
            </div>
            <div className="breitling-watch-selector-modal-meta-item">
              <dt>Water resistance</dt>
              <dd>{watch.waterResistance}</dd>
            </div>
          </dl>
          <div className="breitling-watch-selector-modal-actions">
            <button type="button" className="breitling-watch-selector-btn-primary">
              Add to bag
            </button>
            <button type="button" className="breitling-watch-selector-btn-ghost">
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
