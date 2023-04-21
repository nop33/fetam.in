import { motion } from 'framer-motion'
import { FC } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import Logotype from '../images/fetamin-logotype-white.svg'
import { darkTheme } from '../styles/themes'

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
        <GradientBackground>
          <HeroPageContainer>
            <ContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Contents>
                <a href={content.soundcloud}>
                  <Image src={Logotype} alt={content.title} />
                </a>
              </Contents>
            </ContentWrapper>
          </HeroPageContainer>
        </GradientBackground>
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

const PageContainer = styled(motion.div)`
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
`

const GradientBackground = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 5%, rgba(255, 255, 255, 0) 50%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const HeroPageContainer = styled(PageContainer)`
  max-width: 1000px;
  height: 100%;
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
