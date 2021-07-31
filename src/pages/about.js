import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO/Seo"
import EducationList from "../data/education.yml"
import ExperienceList from "../data/experience.yml"
import AchievementList from "../data/achievement.yml"
const EduList = EducationList.reverse()
const ExpList = ExperienceList.reverse()
const AchList = AchievementList.reverse()

export default function About() {
  return (
    <Layout>
      <SEO />
      <section className="about section active" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>
                    I'm Rahul T and <span>Web Developer</span>
                  </h3>
                  <p>
                    Hi! My name is Rahul T. I am a Web Developer, and I'm very
                    passionate and dedicated to my work. I am a student at
                    College of Engineering, Trivandrum. I acquired the skills
                    and knowledge necessary to make your project a success, with
                    a lot of practice. I enjoy every step of the design process
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Birthday : <span>22 Nov 2001</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age : <span>19</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        website : <span>https://rahult.in</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        email : <span>rahulmanoj@cet.ac.in</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Btech</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 9747 4066 85</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Kerala</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a target="_blank" href="/Resume.pdf" className="btn">
                        Download CV
                      </a>
                      <Link
                        to="/contact"
                        data-section-index="1"
                        className="btn hire-me"
                      >
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item">
                      <h5>Python</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "75%" }}
                        ></div>
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "80%" }}
                        ></div>
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <h5>Django</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "55%" }}
                        ></div>
                        <div className="skill-percent">55%</div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <h5>NodeJS</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "75%" }}
                        ></div>
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">

                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {ExpList.map(experience => (
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            {/* <!-- <h6 className="timeline-date">
                                            <i className="fa fa-calendar"></i> 2021 - present
                                        </h6> --> */}
                            <h4 className="timeline-title">
                              {experience.title}
                            </h4>
                            <p className="timeline-text">
                              {experience.description}
                            </p>
                            <p className="timeline-text">
                              <a target="_blank" href={experience.link}>
                                {experience.shortlink}
                              </a>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                </div>

                <div className="col">
                  

                  <div className="education padd-15">
                    <h3 className="title">Achievements</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {AchList.map(achievement => (
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h4 className="timeline-title">
                                {achievement.title}
                              </h4>
                              <p className="timeline-text">
                                {achievement.description}
                              </p>
                              <p className="timeline-text">
                              <a target="_blank" href={achievement.link}>
                                know more
                              </a>
                            </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="education padd-15">
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {EduList.map(education => (
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h6 className="timeline-date">
                                <i className="fa fa-calendar"></i>{" "}
                                {education.period}
                              </h6>
                              <h4 className="timeline-title">
                                {education.title}
                              </h4>
                              <p className="timeline-text">
                                {education.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
