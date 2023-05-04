const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const chefData = require("./data/chefData.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});
app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
