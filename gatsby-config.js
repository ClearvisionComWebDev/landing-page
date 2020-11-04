module.exports = {
  pathPrefix: `/gatsby-starter-hyperspace/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Clearvision Communications',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Clearvision Communications',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};