const express = require("express");
var cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/api", proxy("https://eu1.prisma.sh/lidor-cohen/conceptual-api/dev"));

app.listen(PORT, function() {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
