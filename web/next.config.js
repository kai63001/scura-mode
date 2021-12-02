
module.exports = {
  assetPrefix: "/scura-mode",
  target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/index",
    },
  }),
  images: {
    loader: 'imgix',
    path: '/web',
  },
}