const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
  images: {
    loader: 'imgix',
    path: ""
  },
}