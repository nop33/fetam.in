import { Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

const NotFoundPage = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <main>
      Page not found 😢
      <Link to="/">Go back home</Link>
    </main>
  </ThemeProvider>
)

export default NotFoundPage
