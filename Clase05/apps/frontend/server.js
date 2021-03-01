const express = require("express");
const app = express();

app.use("/", express.static("./public"));

app.get("/api/config", (req, res) => {
  const info = {
    backend1: process.env.SERVICE_BACKEND1 || "http://localhost:3010",
  };
  res.json(info);
});

app.get("/api/healthz", (req, res) => res.status(200).send("I am alive"));

app.use("**", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => console.log("Frontend en el puerto 3000"));
