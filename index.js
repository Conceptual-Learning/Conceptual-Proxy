var httpProxy = require("http-proxy");
const PORT = process.env.PORT || 5000;

httpProxy
  .createProxyServer({
    target: "https://eu1.prisma.sh/lidor-cohen/conceptual-api/dev",
    changeOrigin: true
  })
  .listen(PORT);
console.log(`listening on port ${PORT}`);
