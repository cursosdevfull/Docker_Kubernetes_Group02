const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.get("/api/message", (req, res) => {
  const info = {
    message1: "Mensaje desde el backend1",
  };

  const endpointBackend2 =
    process.env.SERVICE_BACKEND2 || "http://localhost:3020";
  axios.get(endpointBackend2 + "/api/message").then((response) => {
    info.message2 = response.data.message;

    res.json(info);
  });
});

app.get("/api/healthz", (req, res) => res.status(200).send("I am alive"));

app.use((req, res) => res.send("respuesta desde el backend1 " + req.url));

app.listen(3010, () => console.log("Backend1 en el puerto 3010"));
