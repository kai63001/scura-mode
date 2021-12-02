const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: 'serverless',
  exportPathMap: () => ({
    "/scura-mode": {
      page: "/scura-mode",
    },
  }),
  images: {
    loader: 'imgix',
    path: '/web',
  },
}