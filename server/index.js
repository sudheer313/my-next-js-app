const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/data", (req, res) => {
  console.log("API dataPoint Hit");
  const data = [
    { id: 1, name: "Nihar" },
    { id: 2, name: "Vihar" },
    { id: 3, name: "Sudheer" },
    { id: 4, name: "Vasanthi" },
  ];
  res.status(200).json(data);
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
