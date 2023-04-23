import styled from 'styled-components'

import ExternalLink from './ExternalLink'

export type PlaylistType = {
  title: string
  spotifyId: string
}

interface PlaylistProps extends PlaylistType {
  className?: string
}

const Playlist = ({ spotifyId, title, className }: PlaylistProps) => {
  return (
    <div className={className}>
      <ExternalLink link={`https://open.spotify.com/playlist/${spotifyId}`}>
        <Title>{title}</Title>
      </ExternalLink>
      <SpotifyIframe
        className={className}
        src={`https://open.spotify.com/embed/playlist/${spotifyId}?theme=0`}
        loading="lazy"
      />
    </div>
  )
}

export default Playlist

const Title = styled.h3`
  font-size: 40px;
  font-weight: var(--fontWeight-extraBold);
  margin: 0;
  padding: 40px 0;
`

const SpotifyIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border-style: none;
`
