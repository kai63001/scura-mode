
module.exports = {
  assetPrefix: "/scura-mode",
  target: 'serverless',
  exportPathMap: () => ({
    "/scura-mode": {
      page: "/",
    },
  }),
  images: {
    loader: 'imgix',
    path: '/web',
  },
}