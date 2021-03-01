const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/api/message", (req, res) => {
  const info = {
    message: "Mensaje desde el backend2",
  };

  res.json(info);
});

app.get("/api/healthz", (req, res) => res.status(200).send("I am alive"));

app.listen(3020, () => console.log("Backend2 en el puerto 3020"));
