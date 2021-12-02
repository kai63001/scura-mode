const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: 'serverless',
  exportPathMap: () => ({
    "/scura-mode": {
      page: "/web",
    },
  }),
  images: {
    loader: 'imgix',
    path: '/web',
  },
}