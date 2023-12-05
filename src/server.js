const express = require("express");
const port = 3333;
const app = express();
const path = require("node:path");

app.use(express.static(path.resolve("src", "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("src", "public", "index.html"));
});

app.post("/sum", (req, res) => {
  const number = req.body.data;
  const receivedNumber = parseFloat(number);
  const result = receivedNumber + 2;
  return res.status(200).json({ data: result });
});

const server = app.listen(port, () => {
  console.log(`Listening in localhost:3333`);
});
