const express = require("express");
const booksRouter = require("./books/router");
const potentialRouter = require("./potentialBooks/router");

const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send({ server: "Server is up" });
});

server.use("/books", booksRouter);
server.use("/potential", potentialRouter);

module.exports = server;
