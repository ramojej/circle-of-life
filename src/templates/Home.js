import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HomeHero from "../components/Home/HomeHero"

const Home = ({ data: { wpPage } }) => {
  // console.log(wpPage)
  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        image={
          wpPage.seo.opengraphImage
            ? wpPage.seo.opengraphImage.localFile.publicURL
            : null
        }
      />
      <HomeHero homeHeroFields={wpPage.homeHeroFields} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      uri
      title
      seo {
        metaDesc
        title
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      homeHeroFields {
        heroText
        heroTitle
        slogan
        heroButtons {
          firstButtonLink {
            ... on WpPage {
              uri
            }
          }
          firstButtonName
          secondButtonLink {
            ... on WpPage {
              uri
            }
          }
          secondButtonName
        }
        heroImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                quality: 100
              )
            }
          }
        }
      }
    }
  }
`

export default Home
