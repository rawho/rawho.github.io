import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/Seo"

export default function Contact() {
  return (
    <Layout>
    <SEO title="Contact Me" description="Contact Rahul T" />
      <section className="contact section active" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Call Me Now</h4>
              <a href="tel:+919747406685">
                <p>+91 974 740 6685</p>
              </a>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <h4>House</h4>
              <p>Puthur, Kerala, India</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <a href="mailto:rahulmanoj@cet.ac.in">
                <p>rahulmanoj@cet.ac.in</p>
              </a>
            </div>
          </div>
          <div className="row">
            <form
              className="contact-form padd-15 pageclip-form"
              id="myform"
              action="https://getform.io/f/3c41c1a4-4133-4886-8caa-dc37efb62e12"
              method="post"
            >
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      placeholder="Name*"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      placeholder="Email*"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="Subject"
                      className="form-control"
                      placeholder="subject*"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="Message"
                      placeholder="Your Message..."
                      required=""
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <input
                    type="submit"
                    name="Submit"
                    className="btn"
                    id="send-msg"
                    value="Send Messege"
                  />
                </div>
              </div>
            </form>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <div className="success-msg">
              <p>Thank You for your response!! </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
