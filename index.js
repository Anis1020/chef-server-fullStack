const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const chefData = require("./data/chefData.json");
app.use(cors());

app.get("/chef", (req, res) => {
  res.send(chefData);
});
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = chefData.find((c) => c.id == id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
