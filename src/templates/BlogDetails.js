import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import "../styles/markdown.css"
import "../styles/blogDetails.module.css"

const BlogDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <>
      <Layout>
      <section className="certificate section active" id="certificates">
        <div className="blogDetailsContainer">
          <header>
            <div className="title">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </header>
          <div className="container markdown-body">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div class="final">
              <p style={{ float: "left" }}>
                <Link to="/blogs">
                  <i className="fa fa-arrow-left"></i> &nbsp; see all blogs
                </Link>{" "}
              </p>
              <p style={{ float: "right" }}>
                <Link to="/">
                  Go to Home &nbsp; <i className="fa fa-arrow-right"></i>
                </Link>{" "}
              </p>
            </div>
          </div>

          <hr style={{ width: "90%", margin: "auto" }} />

          <div className="footer">
            <center>
              <p>&copy; Rahul T - ALL RIGHTS RESERVED</p>
            </center>
          </div>
        </div>
      </section>
      </Layout>
    </>
  )
}

export default BlogDetails

export const query = graphql`
  query BlogPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
