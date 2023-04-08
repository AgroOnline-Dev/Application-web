const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/users/sing-up", {
      target: "https://localhost:5000/",
      changeOrigin: true,
      pathRewrite: { "^/users/sing-up": "" },
    })
  );
};
