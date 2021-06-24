import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import styles from "../styles/blogDetails.module.css"
import "../styles/markdown.css"

const BlogDetails = ({data}) => {
  const {html} = data.markdownRemark
  const {title, description} = data.markdownRemark.frontmatter
  return (
    <>
      <header>
        <div className="title">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </header>
      <div className="container markdown-body">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div class="final">
          <p style={{float: "left"}}>
            <a href="/blogs/">
              <i className="fa fa-arrow-left"></i> &nbsp; see all blogs
            </a>{" "}
          </p>
          <p style={{float: "right"}}>
            <a href="/">
              Go to Home &nbsp; <i className="fa fa-arrow-right"></i>
            </a>{" "}
          </p>
        </div>
      </div>

      <hr style={{width: "90%", margin: "auto"}} />

      <div className="footer">
        <center>
          <p>&copy; Rahul T - ALL RIGHTS RESERVED</p>
        </center>
      </div>
    </>
  )
}

export default BlogDetails


export const query = graphql`
  query BlogPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
