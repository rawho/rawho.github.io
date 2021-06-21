import React from "react"
import Layout from "../components/Layout/Layout"

export default function Certificates() {
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
            {/* {% for certificate in site.certificates%}
                <!-- Portfolio Item  -->
                
                <div className="certificate-item padd-15">
                    <a target="_blank" href="{{ certificate.pdf }}">
                    <div className="certificate-item-inner shadow-dark">
                        
                        <div className="certificate-img">
                            <img src="{{ certificate.img_path }}" alt="certificate - {{ certificate.title}}">
                        </div>
                        
                        <div className="certificate-info">
                            <h4>{{ certificate.title }}</h4>
                            <!-- <a href="https://www.instagram.com" target="_blank">
                                <div className="icon">
                                <i className="fa fa-search"></i>
                                </div>
                            </a> -->
                        </div>
                    </div>
                </a>            
                </div>
                <!-- Portfolio Item End -->
                {% endfor %} */}
          </div>
        </div>
      </section>
    </Layout>
  )
}
