const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api/user/*", "/auth/google", "/api/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};