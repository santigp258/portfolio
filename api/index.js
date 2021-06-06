const express = require("express");
const app = express();
const path = require("path");
const dbConnection = require("./DB/config");
const cors = require("cors");
//environment variables
require("dotenv").config();

//body reading and parsing
app.use(express.json());

//CORS
app.use(cors());


//create express server
//routes
app.use("/api/cards", require("./routes/cards"));
app.use("/api/works", require("./routes/works"));
app.use("/api/mail", require("./routes/mail"));

//public directory
app.use(express.static("../portfolio/build"));

//if path no exist
app.get("**", (req, res) => {
  res.sendFile(path.resolve("../portfolio/build/index.html"));
});

//TODO: auth, create, login, renew
//TODO: CRUD: Eventos

//database
dbConnection();


//listen petitions
app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`);
});
