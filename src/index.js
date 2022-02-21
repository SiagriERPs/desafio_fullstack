const express = require("express");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);

app.use(cors());
app.use(require("./routes/routes"));

console.log("Porta:", process.env.PORT || 3000);
server.listen(process.env.PORT || 3000);
