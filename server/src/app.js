const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(morgan("combined")); // helps print out message in a certain way
app.use(bodyParser.json()); // allows to parsed any json received
app.use(cors()); // helps protect from unauthorized access

app.get("/status", (req, res) => {
  res.send({ message: "Hello world" }).status(200);
});
app.listen(process.env.PORT || 8000);
