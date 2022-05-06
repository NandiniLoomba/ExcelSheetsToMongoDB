const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/home");

require("dotenv").config();

//Database Connection
mongoose
  .connect(process.env.KEY, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected..!");
  })
  .catch((err) => console.log(err));

//Templating Engine
app.set("view engine", "ejs");
app.set("views", "views");

//fetch data from the request
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening to port...!"));
