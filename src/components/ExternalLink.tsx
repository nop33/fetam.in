import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

interface ExternalLinkProps {
  link: string
  className?: string
}

const ExternalLink: FC<PropsWithChildren<ExternalLinkProps>> = ({ link, className, children }) => {
  return (
    <a href={link} target="_blank" className={className} rel="noreferrer">
      {children}
    </a>
  )
}

export default styled(ExternalLink)`
  text-decoration: none;
  color: inherit;
`
