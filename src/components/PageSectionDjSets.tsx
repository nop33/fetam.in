import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import DjSet, { DjSetType } from './DjSet'

const djSets: DjSetType[] = [
  {
    title: 'Studio Sessions 007 - Everybody Loves the Sunshine',
    genre: 'Drum & Bass',
    trackId: '1440337441',
    link: 'https://soundcloud.com/djfetamin/studio-sessions-007-everybody-loves-the-sunshine'
  },
  {
    title: 'Summer Solstice Festival 2022, Saturday 1am',
    genre: 'Hard Techno',
    trackId: '1290998587',
    link: 'https://soundcloud.com/djfetamin/summer-solstice-festival-2022-saturday-1am-fetamin-hard-techno-set'
  },
  {
    title: 'Studio Sessions 006 - A Series of Questions',
    genre: 'Melodic Techno',
    trackId: '1147580347',
    link: 'https://soundcloud.com/djfetamin/a-series-of-questions-melodic-techno-mix-25102021-zurich'
  },
  {
    title: 'Studio Sessions 004 - Mellowdic Alex',
    genre: 'Melodic House & Techno',
    trackId: '1039358683',
    link: 'https://soundcloud.com/djfetamin/mellow-mini-set-for-alex'
  },
  {
    title: 'Studio Sessions 003 - A FCKING Serious Job',
    genre: 'High-Tech Minimal',
    trackId: '1005829753',
    link: 'https://soundcloud.com/djfetamin/a-fcking-serious-job'
  },
  {
    title: 'Studio Sessions 001 - Lazy Raver In The Sun',
    genre: 'Downtempo',
    trackId: '825430849',
    link: 'https://soundcloud.com/djfetamin/lazy-raver-in-the-sun'
  },
  {
    title: 'Forever Ravers',
    genre: 'Techno',
    trackId: '771163744',
    link: 'https://soundcloud.com/djfetamin/forever-ravers-house-party-zurich'
  }
]

const PageSectionDjSets = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const [sectionHeight, setSectionHeight] = useState(0)
  const [titleHeight, setTitleHeight] = useState(92)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start end`, 'end start']
  })

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      setSectionHeight(sectionRef.current.getBoundingClientRect().height)
      setTitleHeight(titleRef.current.getBoundingClientRect().height)
    }
  }, [])

  const titleStyle = {
    y: useTransform(scrollYProgress, (value) => {
      const distanceFromTopOfSection = value * sectionHeight

      return distanceFromTopOfSection <= titleHeight ? 0 : distanceFromTopOfSection - titleHeight
    })
  }

  return (
    <>
      <PageSection>
        <PageContainer>
          <SideBySide ref={sectionRef}>
            <SectionTitle style={titleStyle} ref={titleRef}>
              DJ sets
            </SectionTitle>

            <MainContent>
              {djSets.map((djSet) => (
                <DjSetStyled key={djSet.trackId} {...djSet} />
              ))}
            </MainContent>
          </SideBySide>
        </PageContainer>
      </PageSection>
    </>
  )
}

export default PageSectionDjSets

const PageSection = styled.section`
  padding-top: 100vh;
  padding-bottom: 100vh;
  width: 100%;
  display: flex;
`

const SectionTitle = styled(motion.h2)`
  text-transform: uppercase;
  font-size: 80px;
  font-weight: var(--fontWeight-extraBold);
  margin: 0;
  order: 2;
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

const DjSetStyled = styled(DjSet)`
  &:not(:last-child) {
    margin-bottom: 100vh;
  }
`

const SideBySide = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
`

const MainContent = styled.div`
  order: 1;
  margin: 50vh 0;
`
