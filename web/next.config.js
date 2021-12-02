const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: 'serverless',
  exportPathMap: () => ({
    "/web": {
      page: "/scura-mode",
    },
  }),
  images: {
    loader: 'imgix',
    path: '/web',
  },
}