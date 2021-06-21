import React from "react"
import Layout from "../components/Layout/Layout"

export default function Blogs() {
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
            {/* <!-- Blog Item  -->
            {% for blog in site.blogs %}
            {% if blog.display == 't' %}
            <div className="blog-item padd-15">
                <div className="blog-item-inner shadow-dark">
                    <div className="blog-img">
                        <img src="{{ blog.img_path }}" alt="blog - {{blog.title}}">
                    </div>
                    <div className="blog-info">
                        <h4 className="blog-title">{{ blog.title }}</h4>
                        <p className="blog-description">
                            {{ blog.description }}
                        </p>
                        <p className="blog-tags">Tags : <a href="#">{{ blog.tag1 }}</a>, <a href="#">{{ blog.tag2 }}</a></p>
                        <a className="read-more" target="_blank" href="{{ blog.permalink }}">Read More <i className="fa fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
            {% endif %}
            {% endfor %}
            <!-- Blog Item End --> */}
          </div>
          <a href="/blogs">
            <button className="btn">View all blogs</button>
          </a>
        </div>
      </section>
    </Layout>
  )
}
