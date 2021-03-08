const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors())
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/a", (req, res) => {
  res.json({ message: "Service A" });
});

server.listen(5000);
