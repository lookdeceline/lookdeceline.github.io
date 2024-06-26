import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import LayoutBlogpost from "../components/layout-blogpost"
import Layout from "../components/layout"
import * as styles from "./blog-post-styles.module.css"

// const Title = styled.h5`
//   font-size: 18px;
//   font-weight: 600;
//   letter-spacing: -.05em;
//   color: #088BEE;
//   margin-bottom: 0;
// `

export function getColor(tag) {
  switch(tag) {
    case 'SwiftUI':
      return "#def0fd";
      // return "#FBE9FA";
      // return "#def6fd";
    case 'Programming':
      return '#e9e0ff';
    case 'Swift':
      return "#FFE4BE"
    default:
      return '#414A56'; // default color
  }
}


export default function BlogPost({ data }) {
    // console.log('data: ', data)
    const post = data.markdownRemark
    // console.log(post)
    return(
      <div>
        <Header/>
        <SEO description={post.frontmatter.intro} title={post.frontmatter.title}/>
        <div className={styles.titleBackground}>
          <div className={styles.titleContent}>
            <div className={styles.tags}>
            {post.frontmatter.tags.map((tag, index) => {
              return (
                <div className={styles.tag} style={{backgroundColor: getColor(tag)}}>
                  {`${tag}${index !== post.frontmatter.tags.length - 1 ? "," : ""}`}
                  </div>
              )
            })}
            </div>

            <h1 className={styles.h1}>{post.frontmatter.title}</h1>
            {/* <h5 className={styles.h5}>{post.frontmatter.date}</h5> */}
            <h2 className={styles.h2}>{post.frontmatter.intro}</h2>
            <h5 className={styles.h5}>{post.frontmatter.date}</h5>
          </div>
        </div>
        {/* <Layout> */}
              
        <div className={styles.article} dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* </Layout> */}
        <Footer />
      </div>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        intro
        tags
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`