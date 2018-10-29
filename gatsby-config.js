module.exports = {
  siteMetadata: {
    title: "Mudmie Chuthamsatid",
    siteUrl: "https://www.mudmie.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-68361765-1",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
};
