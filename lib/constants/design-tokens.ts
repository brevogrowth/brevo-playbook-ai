export const colors = {
  brevo: {
    green: '#0B996E',
    mint: '#D7FEC8',
    cream: '#FAF5E3',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    light: '#F5F5F5',
    dark: '#333333',
  },
} as const

export const spacing = {
  sectionGap: 'space-y-16',
  componentGap: 'space-y-4',
  contentMaxWidth: 'max-w-5xl',
  pageMaxWidth: 'max-w-6xl',
} as const

export const typography = {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  fontSize: {
    h1: 'text-[40px]',
    h2: 'text-[32px]',
    h3: 'text-[24px]',
    h4: 'text-xl',
    h5: 'text-lg',
    body: 'text-base',
    small: 'text-sm',
    xs: 'text-xs',
  },
  fontWeight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
} as const

export const timing = {
  copyFeedbackDuration: 2000,
  searchDebounce: 300,
  toastDuration: 3000,
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const
