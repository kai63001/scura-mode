
module.exports = {
  assetPrefix: "/scura-mode",
  target: 'serverless',
  exportPathMap: () => ({
    "/index": {
      page: "/",
    },
  }),
  images: {
    loader: 'imgix',
    path: '/web',
  },
}