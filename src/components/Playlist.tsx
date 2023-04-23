import styled from 'styled-components'

export type PlaylistType = {
  spotifyId: string
}

interface PlaylistProps extends PlaylistType {
  className?: string
}

const Playlist = ({ spotifyId, className }: PlaylistProps) => {
  return (
    <iframe
      className={className}
      src={`https://open.spotify.com/embed/playlist/${spotifyId}?theme=0`}
      width="100%"
      height="400"
      loading="lazy"
    />
  )
}

export default styled(Playlist)`
  border-style: none;
`
