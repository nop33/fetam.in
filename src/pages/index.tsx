import { graphql, PageProps } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import PageSectionDjSets from '../components/PageSectionDjSets'
import PageSectionHero, { PageSectionHeroContentType } from '../components/PageSectionHero'
import Seo from '../components/Seo'
import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

interface IndexPageProps extends PageProps {
  data: {
    homepage: {
      nodes: {
        frontmatter: {
          headerSection: PageSectionHeroContentType
        }
      }[]
    }
  }
}

const IndexPage = (props: IndexPageProps) => {
  const pageContent = props.data.homepage.nodes[0].frontmatter

  return (
    <>
      <Seo />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <main>
        <ThemeProvider theme={darkTheme}>
          <PageSectionHero content={pageContent.headerSection} />
          <PageSectionDjSets />
          <Footer />
        </ThemeProvider>
      </main>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          headerSection {
            title
            soundcloud
          }
        }
      }
    }
  }
`
