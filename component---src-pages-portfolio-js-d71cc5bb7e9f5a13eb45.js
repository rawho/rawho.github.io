"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[821],{4371:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=a(6540),r=a(6345),n=a(2532),i=a(1319);function c(e){let{data:t}=e,a=t.allMarkdownRemark.nodes;const{0:c,1:o}=(0,l.useState)(a),s=e=>{if("all"===e.target.getAttribute("data-filter"))return o(a),e.target.parentElement.querySelector(".active").classList.remove("active"),void e.target.classList.add("active");let t=a.filter((t=>t.frontmatter.data_category===e.target.getAttribute("data-filter")));o(t),e.target.parentElement.querySelector(".active").classList.remove("active"),e.target.classList.add("active")};return l.createElement(r.A,null,l.createElement(i.A,{title:"Projects",description:"All the amazing Projects done by Rahul T"}),l.createElement("section",{className:"portfolio section active",id:"portfolio"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"section-title padd-15"},l.createElement("h2",null,"Projects"))),l.createElement("div",{className:"row"},l.createElement("div",{className:"portfolio-filter padd-15"},l.createElement("button",{type:"button",onClick:e=>s(e),className:"active","data-filter":"all"},"All"),l.createElement("button",{type:"button",onClick:e=>s(e),"data-filter":"web-design"},"Web Design"),l.createElement("button",{type:"button",onClick:e=>s(e),"data-filter":"django"},"Django"),l.createElement("button",{type:"button",onClick:e=>s(e),"data-filter":"python"},"Python"),l.createElement("button",{type:"button",onClick:e=>s(e),"data-filter":"javascript"},"Javascript"))),l.createElement("div",{className:"row"},c.map((e=>l.createElement("div",{key:e.id,className:"portfolio-item padd-15","data-category":e.frontmatter.data_category},l.createElement("div",{className:"portfolio-item-inner shadow-dark"},l.createElement("div",{className:"portfolio-img"},l.createElement(n.G,{image:e.frontmatter.img_path.childImageSharp.gatsbyImageData,alt:`project-${e.frontmatter.title}`})),l.createElement("div",{className:"portfolio-info"},l.createElement("h4",null,e.frontmatter.title),l.createElement("a",{href:e.frontmatter.github_link,target:"_blank"},l.createElement("div",{className:"icon",style:{display:"flex"}},l.createElement("i",{className:"fa fa-github"}))),e.frontmatter.website_link?l.createElement("a",{href:e.frontmatter.website_link,target:"_blank"},l.createElement("div",{className:"icon",style:{right:"90px"}},l.createElement("i",{className:"fa fa-link",style:{fontSize:"20px"}}))):"",e.frontmatter.info_link?l.createElement("a",{href:e.frontmatter.info_link,target:"_blank"},l.createElement("div",{className:"icon",style:{right:"130px"}},l.createElement("i",{className:"fa fa-info-circle",style:{fontSize:"20px"}}))):"")))))))))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-d71cc5bb7e9f5a13eb45.js.map