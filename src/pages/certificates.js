import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import Img from "gatsby-image"

export default function Certificates({data}) {
  console.log(data.allMarkdownRemark.nodes);
  const certificates = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <section className="certificate section active" id="certificates">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Certificates</h2>
            </div>
          </div>
          <div className="row">
                {certificates.map(certificate => (
                  <div key={certificate.id} className="certificate-item padd-15">
                    <a target="_blank" href="#">
                    <div className="certificate-item-inner shadow-dark">
                        
                        <div className="certificate-img">
                            <Img className="img" fluid={ certificate.frontmatter.img_path.childImageSharp.fluid } alt={`certificate - ${ certificate.frontmatter.title}`} />
                        </div>
                        
                        <div className="certificate-info">
                            <h4>{ certificate.frontmatter.title }</h4>
                        </div>
                    </div>
                </a>            
                </div>
                ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
query CertificatesPage {
  allMarkdownRemark(filter: {frontmatter: {layout: {eq: "certificates"}}}) {
    nodes {
      frontmatter {
        title
        img_path {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
        
      }
      id
    }
  }
}

`

