import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/global.css'
// import Img from 'gatsby-image';

const PageTitle = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkerHeader = styled.h3`
  display: inline;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
  `
const ArticleDate = styled.h5`
  display: inline;
  font-size: 14px;
  font-weight: 400;
  color: #0e51ec;
  // color: #fd163f;
  margin-bottom: 10px;
`

const ReadingTime = styled.h5`
  display: inline;
  font-size: 14px;
  font-weight: 400;
  color: #0e51ec;
  // color: #fd163f;
  margin-bottom: 10px;
`

const MarkerContent = styled.h5`
  font-size: 17.6px;
  font-weight: 400;
`

const SinglePost = styled.section`
  padding: 13px 0;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <PageTitle>Blog</PageTitle>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <SinglePost>
            <div key={node.id}>
            {/* // <div key={node.id}> */}
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                {/* {node.frontmatter.image.childImageSharp.fluid} */}
                {/* <div>{node.frontmatter.image}</div> */}
                <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
                <div>
                  <ArticleDate>{node.frontmatter.date}</ArticleDate>
                  <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                </div>
                <div>{node.frontmatter.description}</div>
                {/* <div><Img fluid={node.frontmatter.thumbnail.childImageSharp}/></div> */}
              </Link>
            </div>
          </SinglePost>
        ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            description

          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
