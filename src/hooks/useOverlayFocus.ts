import { type RefObject, useEffect } from 'react'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

function listFocusables(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter((el) => {
    if (el.closest('[aria-hidden="true"]')) return false
    if (el.hasAttribute('disabled')) return false
    return el.tabIndex !== -1
  })
}

/**
 * When `open`: moves focus to `initialFocusRef` or first tabbable in `containerRef`,
 * traps Tab within the container, restores focus to the previously focused element on close.
 */
export function useOverlayFocus(
  open: boolean,
  containerRef: RefObject<HTMLElement | null>,
  initialFocusRef?: RefObject<HTMLElement | null>,
): void {
  useEffect(() => {
    if (!open) return
    const container = containerRef.current
    if (!container) return

    const previousActive = document.activeElement as HTMLElement | null

    const raf = requestAnimationFrame(() => {
      const initial = initialFocusRef?.current
      if (initial) initial.focus()
      else listFocusables(container)[0]?.focus()
    })

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const list = listFocusables(container)
      if (list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (e.shiftKey) {
        if (active === first || !container.contains(active)) {
          e.preventDefault()
          last.focus()
        }
      } else if (active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('keydown', onKeyDown)
      if (
        previousActive &&
        typeof previousActive.focus === 'function' &&
        document.body.contains(previousActive)
      ) {
        previousActive.focus()
      }
    }
  }, [open, containerRef, initialFocusRef])
}
