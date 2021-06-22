/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rahul T`,
        short_name: `Rahul T`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/images/meSquare.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `certificates`,
        path: `${__dirname}/src/certificates/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Rahul T's Portfolio",
    titleTemplate: "%s - Rahul T",
    description:
      "Hi! My name is Rahul T.You may be thinking who is Rahul T, I am a Full Stack Web Developer, and I'm very passionate and dedicated to my work. I am a student at College of Engineering, Trivandrum. I acquired the skills and knowledge necessary to make your project a success, with a lot of practice. I enjoy every step of the design process",
    url: "https://rahult.in",
    image: "/images/me.jpg",
    twitterUsername: "@rahulmanojcet",
  },
}
