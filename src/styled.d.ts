import {} from 'styled-components'
import { lightTheme } from './Theme'
declare module 'styled-components' {
  type Theme = typeof lightTheme
  export interface DefaultTheme extends Theme {}
}
