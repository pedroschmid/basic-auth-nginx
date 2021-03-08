const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors())
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/c", (req, res) => {
  res.json({ message: "Service C" });
});

server.listen(5002);
