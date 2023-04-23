import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

interface ExternalLinkProps {
  link: string
  className?: string
}

const ExternalLink: FC<PropsWithChildren<ExternalLinkProps>> = ({ link, className, children }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      className={className}
      rel="noreferrer"
      whileHover={{ scale: 1.03 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 10
      }}
    >
      {children}
    </motion.a>
  )
}

export default styled(ExternalLink)`
  text-decoration: none;
  color: inherit;
`
