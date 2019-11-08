const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;

app.use(cors());

app.use(bodyParser.json());

app.post("/hello", (req, res) => {
  console.log(req);
  res.json({ hello: `Hello, ${req.body.name}!` });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
