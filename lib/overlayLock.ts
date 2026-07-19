import { useEffect } from 'react'

// Reference-counted body-scroll lock shared across independently mounted
// overlays (nav drawer, enquiry modal, gallery lightbox). Each overlay used
// to set `document.body.style.overflow` directly off its own `isOpen` state,
// so closing one overlay stomped the lock still needed by another that
// happened to be open underneath it. Counting locks/unlocks keeps the body
// locked as long as *any* overlay is open.
let lockCount = 0

export function lockScroll() {
  lockCount += 1
  document.body.style.overflow = 'hidden'
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount === 0) {
    document.body.style.overflow = ''
  }
}

/** True while at least one overlay currently holds the scroll lock. */
export function isOverlayOpen() {
  return lockCount > 0
}

export function useScrollLock(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return
    lockScroll()
    return () => unlockScroll()
  }, [isOpen])
}
