var httpProxy = require("http-proxy");
const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

const proxy = httpProxy.createProxyServer({
  target: "https://eu1.prisma.sh/lidor-cohen/conceptual-api/dev",
  changeOrigin: true
});

app.use("/api", function(req, res) {
  proxy.web(req, res);
});
app.use(express.static("public"));
app.use("/", express.static("public/index.html"));

app.listen(PORT, function() {
  console.log(`Conceptual-nodes proxy server listening on port ${PORT}`);
});
