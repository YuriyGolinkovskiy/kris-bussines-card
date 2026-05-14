// Дизайн-токены для сайта кинолога Кристины

export const colors = {
  // Фоны
  background: '#FFF8F0',
  surface: '#F9EFE6',

  // Текст
  textPrimary: '#2A2A2A',
  textSecondary: '#6B5B55',

  // Акценты — красная гамма
  accent: '#9B1D2C',
  accentLight: '#C43D4F',
  accentDark: '#751A26',

  // Декор
  decor: '#C9A87C',

  // Статусы
  success: '#2E7D64',
  error: '#C94F4F',
} as const;

export const fonts = {
  heading: 'var(--font-playfair)',
  body: 'var(--font-inter)',
} as const;

export const animations = {
  sectionEnter: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  cardHover: {
    scale: 1.02,
  },
  buttonHover: {
    backgroundColor: colors.accentLight,
  },
} as const;

export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1920,
} as const;

export const spacing = {
  sectionDesktop: 'py-20',
  sectionMobile: 'py-12',
} as const;
