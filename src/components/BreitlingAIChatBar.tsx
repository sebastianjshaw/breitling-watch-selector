import { useState } from 'react'

function IconSunburst() {
  return (
    <svg
      className="breitling-watch-selector-ai-icon"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <circle cx="16" cy="16" r="4" fill="currentColor" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6
        const x1 = 16 + Math.cos(a) * 7
        const y1 = 16 + Math.sin(a) * 7
        const x2 = 16 + Math.cos(a) * 12
        const y2 = 16 + Math.sin(a) * 12
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}

export function BreitlingAIChatBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="breitling-watch-selector-ai-bar-wrap">
      {open ? (
        <div className="breitling-watch-selector-ai-panel" role="dialog" aria-label="Concierge">
          <div className="breitling-watch-selector-ai-panel-header">
            <span>Breitling concierge</span>
            <button
              type="button"
              className="breitling-watch-selector-text-btn"
              onClick={() => setOpen(false)}
              aria-label="Close concierge"
            >
              Close
            </button>
          </div>
          <div className="breitling-watch-selector-ai-panel-body">
            <p className="breitling-watch-selector-ai-msg">hello</p>
          </div>
          <div className="breitling-watch-selector-ai-panel-footer">
            <div className="breitling-watch-selector-ai-input-row">
              <input
                className="breitling-watch-selector-ai-input"
                type="text"
                placeholder="Message (coming soon)"
                disabled
                aria-disabled
              />
              <button
                type="button"
                className="breitling-watch-selector-ai-send"
                disabled
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        className="breitling-watch-selector-ai-bar"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <IconSunburst />
        <span>Can we help you narrow down your choice?</span>
        <span aria-hidden>·</span>
      </button>
    </div>
  )
}
