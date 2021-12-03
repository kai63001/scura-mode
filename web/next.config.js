const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/scura-mode" : "",
  basePath: isProd ? "/scura-mode" : "",
  target: "serverless",
  images: {
    loader: "imgix",
    path: "/web",
  },
};
