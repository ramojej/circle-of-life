import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import Layout from "../components/layout"

const Home = ({ data: { wpPage } }) => {
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
      <div style={{ fontFamily: "Nexa Bold" }}>Test Home</div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
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
    }
  }
`

export default Home
