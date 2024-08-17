import React from "react"
import Layout from "../components/Layout/Layout"
import Typewriter from "typewriter-effect"
import SEO from "../components/SEO/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function Home({data}) {
  
  return (
    <Layout>
    <SEO/>
      <section className="home section active" id="home">
        <div style={{ paddingBottom: "0" }} className="container">
          <div className="intro">
            <div className="intro-box">
              {/* <Img fluid={data.file.childImageSharp.fluid} alt="background" className="bg" /> */}
              <h2>
                Discover My Amazing <br /> Art Space!
              </h2>
              <h1>
                <span>
                  {" "}
                  <Typewriter
                    onInit={typewriter => {
                      typewriter
                        .typeString("<span style='color: yellow;'>I am Rahul T</span>")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("<span style='color: green;'>I am a Web Developer</span>")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("<span style='color: yellow;'>I am a Python Developer</span>")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("<span style='color: green;'>I am a Full Stack Developer</span>")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("<span style='color: red;'>Welcome</span>")
                        .start()
                    }}
                  />
                </span>
              </h1>
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                className="dp"
                alt="rahult"
              />
            </div>
            {/* <img className="phone" src="/images/pro.JPG" alt="rahulmanojcet" /> */}
            <div className="social-container">
              <ul className="social-icons">
                <li>
                  <a href="https://instagram.com/_rawho">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rawho">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/rahulmanojt">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+919747406685">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
query Banner {
  file(relativePath: {eq: "dp.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
}

`