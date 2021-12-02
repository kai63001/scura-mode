const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/web",
    },
  }),
  images: {
    loader: 'imgix',
    path: '/web',
  },
}