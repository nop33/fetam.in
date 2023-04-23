import { faInstagram, faSoundcloud, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import DjSet, { DjSetType } from './DjSet'
import ExternalLink from './ExternalLink'
import Playlist, { PlaylistType } from './Playlist'

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

const b2bs: DjSetType[] = [
  {
    title: 'Fetamin b2b Sasha Gummy - Summer Solstice Festival 2022 - Thursday 8pm',
    genre: 'Indie Dance',
    trackId: '1302867535',
    link: 'https://soundcloud.com/djfetamin/fetamin-b2b-sasha-gummy-summer-solstice-festival-2022-thursday-8pm-indie-dance-set'
  },
  {
    title: 'Fetamin b2b Sasha Gummy - What is Techno',
    genre: 'Techno',
    trackId: '942253561',
    link: 'https://soundcloud.com/djfetamin/what-is-techno'
  },
  {
    title: 'Fetamin b2b Sasha Gummy - Raving at 130km/h',
    genre: 'Acid Techno',
    trackId: '831700420',
    link: 'https://soundcloud.com/sashagummy/raving-at-130kmh'
  }
]

const playlists: PlaylistType[] = [
  {
    title: 'Everything Will Be Alright',
    spotifyId: '6fSvDnPA8QouyS8krHmLc9'
  },
  {
    title: 'Dark Mellow Techno',
    spotifyId: '75E4Ykd3AgNQrXsoyubkCN'
  },
  {
    title: 'Züri Klingt Wie',
    spotifyId: '0GDLddTnEMGltMQN1RowhA'
  },
  {
    title: 'Tribal Electronica',
    spotifyId: '4qkPbqgXNeLJeA7XwKAUZl'
  }
]

const myOwnMusic: DjSetType[] = [
  {
    title: 'Sudden Melt',
    genre: 'Leftfield House',
    trackId: '1449227314',
    link: 'https://soundcloud.com/djfetamin/sudden-melt'
  }
]

const PageSectionDjSets = () => {
  return (
    <>
      <PageSection>
        <PageContainer>
          <SideBySide>
            <SectionTitle>Socials</SectionTitle>

            <MainContent>
              <Socials>
                <Social>
                  <SocialExternalLink link="https://soundcloud.com/djfetamin">
                    <Icon>
                      <FontAwesomeIcon icon={faSoundcloud} />
                    </Icon>
                    SoundCloud
                  </SocialExternalLink>
                </Social>
                <Social>
                  <SocialExternalLink link="https://open.spotify.com/user/11101912794">
                    <Icon>
                      <FontAwesomeIcon icon={faSpotify} />
                    </Icon>
                    Spotify
                  </SocialExternalLink>
                </Social>
                <Social>
                  <SocialExternalLink link="https://instagram.com/dj.fetamin">
                    <Icon>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Icon>
                    Instagram
                  </SocialExternalLink>
                </Social>
                <Social>
                  <SocialExternalLink link="mailto:book@fetam.in">
                    <Icon>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </Icon>
                    Bookings
                  </SocialExternalLink>
                </Social>
              </Socials>
            </MainContent>
          </SideBySide>
        </PageContainer>
        <PageContainer>
          <SideBySide>
            <SectionTitle>DJ sets</SectionTitle>

            <MainContent>
              {djSets.map((djSet) => (
                <DjSetStyled key={djSet.trackId} {...djSet} />
              ))}
            </MainContent>
          </SideBySide>
        </PageContainer>
        <PageContainer>
          <SideBySide>
            <SectionTitle>b2b&apos;s</SectionTitle>

            <MainContent>
              {b2bs.map((djSet) => (
                <DjSetStyled key={djSet.trackId} {...djSet} />
              ))}
            </MainContent>
          </SideBySide>
        </PageContainer>
        <PageContainer>
          <SideBySide>
            <SectionTitle>My own music</SectionTitle>

            <MainContent>
              {myOwnMusic.map((djSet) => (
                <DjSetStyled key={djSet.trackId} {...djSet} />
              ))}
            </MainContent>
          </SideBySide>
        </PageContainer>
        <PageContainer>
          <SideBySide>
            <SectionTitle>Playlists</SectionTitle>

            <MainContent>
              {playlists.map((playlist) => (
                <PlaylistStyled key={playlist.spotifyId} {...playlist} />
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
`

const SectionTitle = styled(motion.h2)`
  text-transform: uppercase;
  font-size: 80px;
  font-weight: var(--fontWeight-extraBold);
  margin: 0;
  order: 2;

  line-height: 1;

  position: sticky;
  top: 50%;
  transform: translateY(-50%);

  background: linear-gradient(135deg, hsla(0, 0%, 100%, 0) 56%, #ffcaba 98%),
    linear-gradient(25deg, #f5d1ff 23%, #fff 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${deviceBreakPoints.ipad} {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    top: 5%;
    transform: translateY(0);
  }
`

const PageContainer = styled(motion.div)`
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;

  @media ${deviceBreakPoints.ipad} {
    padding: 0 15px;
  }
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
  gap: 30px;
`

const MainContent = styled.div`
  order: 1;
  margin: 50vh 0;
`

const Socials = styled.div``

const Social = styled.div`
  font-size: 40px;
  font-weight: var(--fontWeight-bold);

  @media ${deviceBreakPoints.ipad} {
    font-size: 30px;
  }
`

const Icon = styled.div`
  width: 45px;

  @media ${deviceBreakPoints.ipad} {
    width: 30px;
  }
`

const SocialExternalLink = styled(ExternalLink)`
  display: flex;
  gap: 20px;
  padding: 20px 0;
`

const PlaylistStyled = styled(Playlist)`
  &:not(:last-child) {
    margin-bottom: 100vh;
  }
`
