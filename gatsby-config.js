module.exports = {
  siteMetadata: {
    title: "Mudmie Chuthamsatid",
    siteUrl: "https://www.mudmie.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/`],
        precision: 8,
      },
    },
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
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2356793,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          // selector: '[data-sal]', // Selector of the elements to be animated
          // animateClassName: 'sal-animate', // Class name which triggers animation
          // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          // enterEventName: 'sal:in', // Enter event name
          // exitEventName: 'sal:out', // Exit event name
      }
    }
  ],
};
