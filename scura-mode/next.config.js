const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/scura-mode" : "/",
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