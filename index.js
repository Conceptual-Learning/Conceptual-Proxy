var httpProxy = require("http-proxy");

httpProxy
  .createProxyServer({
    target: "https://eu1.prisma.sh/lidor-cohen/conceptual-api/dev",
    changeOrigin: true
  })
  .listen(8000);
console.log("listening on port 8000");
