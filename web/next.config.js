const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: 'serverless',
  exportPathMap: () => ({
    "/web": {
      page: "/web",
    },
  }),
  images: {
    loader: 'imgix',
    path: ""
  },
}