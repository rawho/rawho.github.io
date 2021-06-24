import { graphql } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import Img from "gatsby-image"
import SEO from "../components/SEO/Seo"

export default function Portfolio({data}) {
  let projects = data.allMarkdownRemark.nodes

  const [AllProjects, setAllProjects] = useState(projects)
  
  
  const handleClick = (e) => {
    
    if(e.target.getAttribute("data-filter") === "all"){
      setAllProjects(projects)
      e.target.parentElement.querySelector('.active').classList.remove('active') 
      e.target.classList.add('active')
      return
    }

    let p = projects.filter(project => project.frontmatter.data_category === e.target.getAttribute("data-filter"))
    setAllProjects(p)
    e.target.parentElement.querySelector('.active').classList.remove('active') 
    e.target.classList.add('active')

    
    
  }



  return (
    <Layout>
    <SEO title="Projects" description="All the amazing Projects done by Rahul T" />
      <section className="portfolio section active" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" onClick={e => handleClick(e)} className="active" data-filter="all">
                All
              </button>
              <button type="button" onClick={e => handleClick(e)} data-filter="web-design">
                Web Design
              </button>
              <button type="button" onClick={e => handleClick(e)} data-filter="django">
                Django
              </button>
              <button type="button" onClick={e => handleClick(e)} data-filter="python">
                Python
              </button>
              <button type="button" onClick={e => handleClick(e)} data-filter="javascript">
                Javascript
              </button>
            </div>
          </div>
          <div className="row">
            {AllProjects.map(project => (
              <div key={project.id} className="portfolio-item padd-15" data-category={ project.frontmatter.data_category }>
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <Img fluid={project.frontmatter.img_path.childImageSharp.fluid} alt={`project-${project.frontmatter.title}`} />
                    </div>
                    <div className="portfolio-info">
                        <h4>{ project.frontmatter.title }</h4>
                        <a href={ project.frontmatter.github_link } target="_blank">
                            <div className="icon" style={{display: "flex"}}>
                                <i className="fa fa-github"></i>
                            </div>
                        </a>
                        {project.frontmatter.website_link ?   <a href={ project.frontmatter.website_link } target="_blank">
                            <div className="icon" style={{right: "90px"}}>
                                <i className="fa fa-link" style={{fontSize: "20px"}}></i>
                            </div>
                        </a> : ""}
                       
                        
                        {project.frontmatter.info_link ?  <a href={ project.frontmatter.info_link } target="_blank">
                            <div className="icon" style={{right: "130px"}}>
                                <i className="fa fa-info-circle" style={{fontSize: "20px"}}></i>
                            </div>
                        </a> : ""}
                       
                    </div>
                </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}


// export page query

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(filter: {frontmatter: {layout: {eq: "projects"}}}) {
    nodes {
      frontmatter {
        github_link
        data_category
        img_path {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        website_link
      }
      id
    }
  }
}

`