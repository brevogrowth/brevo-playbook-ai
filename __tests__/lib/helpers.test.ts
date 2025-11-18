import { describe, it, expect, vi } from 'vitest'
import { debounce, generateId, isNonEmptyString, clamp, cn } from '@/lib/utils/helpers'

describe('Helper Functions', () => {
  describe('debounce', () => {
    it('should delay function execution', async () => {
      vi.useFakeTimers()
      const fn = vi.fn()
      const debouncedFn = debounce(fn, 100)

      debouncedFn()
      expect(fn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(50)
      expect(fn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(50)
      expect(fn).toHaveBeenCalledTimes(1)

      vi.useRealTimers()
    })

    it('should cancel previous calls', async () => {
      vi.useFakeTimers()
      const fn = vi.fn()
      const debouncedFn = debounce(fn, 100)

      debouncedFn()
      vi.advanceTimersByTime(50)
      debouncedFn()
      vi.advanceTimersByTime(50)
      expect(fn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(50)
      expect(fn).toHaveBeenCalledTimes(1)

      vi.useRealTimers()
    })
  })

  describe('generateId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateId()
      const id2 = generateId()
      expect(id1).not.toBe(id2)
    })

    it('should use provided prefix', () => {
      const id = generateId('test')
      expect(id).toMatch(/^test-/)
    })
  })

  describe('isNonEmptyString', () => {
    it('should return true for non-empty strings', () => {
      expect(isNonEmptyString('hello')).toBe(true)
      expect(isNonEmptyString('  test  ')).toBe(true)
    })

    it('should return false for empty strings', () => {
      expect(isNonEmptyString('')).toBe(false)
      expect(isNonEmptyString('   ')).toBe(false)
    })

    it('should return false for non-strings', () => {
      expect(isNonEmptyString(123)).toBe(false)
      expect(isNonEmptyString(null)).toBe(false)
      expect(isNonEmptyString(undefined)).toBe(false)
      expect(isNonEmptyString({})).toBe(false)
    })
  })

  describe('clamp', () => {
    it('should clamp value between min and max', () => {
      expect(clamp(5, 1, 10)).toBe(5)
      expect(clamp(0, 1, 10)).toBe(1)
      expect(clamp(15, 1, 10)).toBe(10)
    })

    it('should handle negative numbers', () => {
      expect(clamp(-5, -10, -1)).toBe(-5)
      expect(clamp(-15, -10, -1)).toBe(-10)
      expect(clamp(0, -10, -1)).toBe(-1)
    })
  })

  describe('cn', () => {
    it('should combine class names', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2')
    })

    it('should filter out falsy values', () => {
      expect(cn('class1', false, 'class2', null, undefined)).toBe('class1 class2')
    })

    it('should handle conditional classes', () => {
      const isActive = true
      expect(cn('base', isActive && 'active')).toBe('base active')
      expect(cn('base', !isActive && 'active')).toBe('base')
    })
  })
})
