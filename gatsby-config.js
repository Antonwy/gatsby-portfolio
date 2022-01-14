module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://cms.antonwy.tech/api',
        collectionTypes: ['projects', 'skill'],
        singleTypes: ['about-me'],
        queryLimit: 1000,
      },
    },
  ],
};
