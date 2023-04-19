import { FC } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/themes'
import Logotype from '../images/fetamin-logotype-white.svg'

import { motion } from 'framer-motion'

export interface PageSectionHeroContentType {
  title: string
  soundcloud: string
}

interface PageSectionHeroProps {
  className?: string
  content: PageSectionHeroContentType
}

const PageSectionHero: FC<PageSectionHeroProps> = ({ className, content }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <HeroSection className={className}>
        <BackgroundVideo autoPlay muted loop>
          <source src="/videos/fetamin-background.webm" type="video/webm" />
          <source src="/videos/fetamin-background.mp4" type="video/mp4" />
        </BackgroundVideo>
        <PageContainer>
          <ContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Contents>
              <a href={content.soundcloud}>
                <Image src={Logotype} alt={content.title} />
              </a>
            </Contents>
          </ContentWrapper>
        </PageContainer>
      </HeroSection>
    </ThemeProvider>
  )
}

export default PageSectionHero

const HeroSection = styled.section`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  ${({ theme }) => css`
    background: linear-gradient(black 0%, black 40%, ${theme.bgSecondary}) 100%;
  `};
  transition: all 0.4s ease-in;
  display: flex;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  z-index: 1;
`

const PageContainer = styled.div`
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ContentWrapper = styled(motion.div)`
  margin: auto 0;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Image = styled.img``

const BackgroundVideo = styled.video`
  filter: grayscale() blur(3px);
  max-height: 100vh;
  width: 100%;
  object-fit: cover;
`
