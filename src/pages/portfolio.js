import React from "react"
import Layout from "../components/Layout/Layout"

export default function Portfolio() {
  return (
    <Layout>
      <section className="portfolio section active" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="django">
                Django
              </button>
              <button type="button" data-filter="python">
                Python
              </button>
              <button type="button" data-filter="javascript">
                Javascript
              </button>
            </div>
          </div>
          <div className="row">
            {/* {% for portfolio in site.portfolios%}
            <!-- Portfolio Item  -->
            <div className="portfolio-item padd-15" data-category="{{ portfolio.data_category }}">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src="{{ portfolio.img_path }}" alt="portfolio-{{portfolio.title}}">
                    </div>
                    <div className="portfolio-info">
                        <h4>{{ portfolio.title }}</h4>
                        <a href="{{ portfolio.github_link }}" target="_blank">
                            <div className="icon" style="display: flex;">
                                <i className="fa fa-github"></i>
                            </div>
                        </a>
                        {% if portfolio.website_link %}
                        <a href="{{ portfolio.website_link }}" target="_blank">
                            <div className="icon" style="right: 90px;">
                                <i className="fa fa-link" style="font-size: 20px;"></i>
                            </div>
                        </a>
                        {% endif %}
                        {% if portfolio.info_link %}
                        <a href="{{ portfolio.info_link }}" target="_blank">
                            <div className="icon" style="right: 130px;">
                                <i className="fa fa-info-circle" style="font-size: 20px;"></i>
                            </div>
                        </a>
                        {% endif %}
                    </div>
                </div>
            </div>
            <!-- Portfolio Item End -->
            {% endfor %} */}
          </div>
        </div>
      </section>
    </Layout>
  )
}
