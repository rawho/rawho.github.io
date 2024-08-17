import { graphql, Link } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/SEO/Seo"

export default function Blogs({data}) {

  const blogs = data.allMarkdownRemark.nodes



  return (
    <Layout>
    <SEO title="Blogs" description="Blogs written by Rahul T"/>
      <section className="blog section active" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blogs</h2>
            </div>
          </div>
          <div className="row">
           
            
            {blogs.map(blog => (
              <div className="blog-item padd-15">
                <div className="blog-item-inner shadow-dark">
                    <div className="blog-img">
                        <GatsbyImage image={blog.frontmatter.img_path.childImageSharp.gatsbyImageData} alt={`blog - ${blog.frontmatter.title}`} />
                    </div>
                    <div className="blog-info">
                        <h4 className="blog-title">{ blog.frontmatter.title }</h4>
                        <p className="blog-description">
                            { blog.frontmatter.description }
                        </p>
                        <p className="blog-tags">Tags : <a href="#">{ blog.frontmatter.tag1 }</a>, <a href="#">{ blog.frontmatter.tag2 }</a></p>
                        <Link className="read-more" to={ blog.frontmatter.slug }>Read More <i className="fa fa-arrow-right"></i> </Link>
                    </div>
                </div>
            </div>
            ))}

          </div>
          
            {/* <button className="btn">View all blogs</button> */}
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
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        title
        slug
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