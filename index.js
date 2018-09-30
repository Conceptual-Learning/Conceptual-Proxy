const express = require("express");
var cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
const PORT = process.env.PORT || 5000;

const PRISMA_SERVICE = "https://eu1.prisma.sh/lidor-cohen/conceptual-api/dev";

app.use(cors({ origin: PRISMA_SERVICE }));
app.use("/", proxy(PRISMA_SERVICE));
// app.use(express.static("public"));

app.listen(PORT, function() {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
