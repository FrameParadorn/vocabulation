module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vocabulation/" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "docs" : "dist",
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "ท่องศัพท์ By Frame ",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  },
};
