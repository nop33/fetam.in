import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const deviceSizes = {
  smallMobile: 528,
  ipad: 768,
  mobile: 1024,
  desktop: 1920
}

export const deviceBreakPoints = {
  smallMobile: `(max-width: ${deviceSizes.smallMobile}px)`,
  ipad: `(max-width: ${deviceSizes.ipad}px)`,
  mobile: `(max-width: ${deviceSizes.mobile}px)`,
  desktop: `(max-width: ${deviceSizes.desktop}px)`
}

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    font-size: 15px;

    @media ${deviceBreakPoints.mobile} {
      font-size: 12px;
    }

    --page-width: 1600px;

    --fontFamily-sans: system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    --fontFamily-serif: "Times New Roman", Times, serif;

    --fontWeight-normal: 400;
    --fontWeight-semiBold: 600;
    --fontWeight-bold: 700;
    --fontWeight-extraBold: 900;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.textPrimary};
    font-family: var(--fontFamily-sans);
  }
`

export default GlobalStyle
