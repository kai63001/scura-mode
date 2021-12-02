
module.exports = {
  assetPrefix: "/scura-mode",
  target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
  images: {
    loader: 'imgix',
    path: '/web',
  },
}