module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vocabulation/" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "docs" : "dist",
  transpileDependencies: ["vuetify"],
};
