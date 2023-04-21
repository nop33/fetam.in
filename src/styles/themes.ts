import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark'

export const darkTheme: DefaultTheme = {
  name: 'dark',

  textPrimary: '#fff',
  textPrimaryVariation: '#fff',
  textSecondary: '#fff',
  textTertiary: '#fff',

  bgPrimary: '#000',
  bgSecondary: '#000',
  bgTertiary: '#000',

  borderPrimary: 'red',

  link: 'blue'
}

export const lightTheme: DefaultTheme = {
  name: 'light',

  textPrimary: '#000',
  textPrimaryVariation: '#000',
  textSecondary: '#000',
  textTertiary: '#000',

  bgPrimary: '#fff',
  bgSecondary: '#fff',
  bgTertiary: '#fff',

  borderPrimary: 'red',

  link: 'blue'
}
