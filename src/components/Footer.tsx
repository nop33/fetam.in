import styled from 'styled-components'

interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={className}>
      <Quote>“Life would be a mistake without music”</Quote> as Nietzsche said, but he forgot the feta.
    </div>
  )
}

export default styled(Footer)`
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 50px;
  padding-bottom: 40px;
  opacity: 0.3;
`

const Quote = styled.span`
  font-style: italic;
`
