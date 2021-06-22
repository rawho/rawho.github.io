import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import Img from "gatsby-image"

export default function Blogs({data}) {
  const blogs = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <section className="blog section active" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blogs</h2>
            </div>
          </div>
          <div className="row">
           
            
            {blogs.map(blog => (
              blog.frontmatter.display === 't' ? <div className="blog-item padd-15">
                <div className="blog-item-inner shadow-dark">
                    <div className="blog-img">
                        <Img fluid={blog.frontmatter.img_path.childImageSharp.fluid} alt={`blog - ${blog.frontmatter.title}`} />
                    </div>
                    <div className="blog-info">
                        <h4 className="blog-title">{ blog.frontmatter.title }</h4>
                        <p className="blog-description">
                            { blog.frontmatter.description }
                        </p>
                        <p className="blog-tags">Tags : <a href="#">{ blog.frontmatter.tag1 }</a>, <a href="#">{ blog.frontmatter.tag2 }</a></p>
                        <a className="read-more" target="_blank" href={ blog.frontmatter.permalink }>Read More <i className="fa fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div> : ""
            ))}

          </div>
          <a href="/blogs">
            <button className="btn">View all blogs</button>
          </a>
        </div>
      </section>
    </Layout>
  )
}



export const query = graphql`
query BlogsPage {
  allMarkdownRemark(filter: {frontmatter: {layout: {eq: "blogs"}}}) {
    nodes {
      frontmatter {
        img_path {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        permalink
        description
        meta_desc
        tag1
        tag2
        display
      }
      id
    }
  }
}

`