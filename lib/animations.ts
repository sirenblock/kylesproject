/**
 * Global animation configuration
 * Set ENABLE_ANIMATIONS to false to disable all Framer Motion entrance animations
 */

export const ENABLE_ANIMATIONS = false

/**
 * Helper to conditionally apply animations
 * Returns empty object if animations are disabled
 */
export function getAnimation(animation: any) {
  if (!ENABLE_ANIMATIONS) {
    return {}
  }
  return animation
}

/**
 * Safe initial state - prevents flicker by starting visible
 */
export const safeInitial = ENABLE_ANIMATIONS ? undefined : false

/**
 * Safe animate state
 */
export function safeAnimate(animateProps: any) {
  if (!ENABLE_ANIMATIONS) {
    return undefined
  }
  return animateProps
}
