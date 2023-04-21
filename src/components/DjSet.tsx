import { motion } from 'framer-motion'
import styled from 'styled-components'

import ExternalLink from './ExternalLink'

export type DjSetType = {
  title: string
  genre: string
  trackId: string
  link: string
}

interface DjSetProps extends DjSetType {
  className?: string
}

const DjSet = ({ title, genre, trackId, link, className }: DjSetProps) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.8,
          type: 'spring'
        }
      }}
      viewport={{
        once: true,
        amount: 0.5
      }}
    >
      <ExternalLink link={link}>
        <Title
          whileHover={{ scale: 1.03 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 10
          }}
        >
          {title}
        </Title>
      </ExternalLink>
      <Genre>{genre}</Genre>
      <SoundCloudFrame
        width="20px"
        height="20px"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}`}
      />
    </motion.div>
  )
}

export default DjSet

const Title = styled(motion.h3)`
  font-size: 40px;
  font-weight: var(--fontWeight-extraBold);
  margin: 0;
  padding: 40px 0;
`

const SoundCloudFrame = styled.iframe`
  border-style: none;
  margin-top: 50px;
`

const Genre = styled.div`
  background-color: ${({ theme }) => theme.bgSecondary};
  font-size: 20px;
  font-weight: var(--fontWeight-extraBold);
`
