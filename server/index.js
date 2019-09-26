const express = require("express");
const app = express();

// Creates Route Handlers //
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Communicates with Node on which port traffic to watch for //
const PORT = process.env.PORT || 5000;
app.listen(PORT);
