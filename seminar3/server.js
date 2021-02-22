import express from "express";
import path from "path";

var app = express();
var router = express.Router();

app.use("/api", router);

app.use("/api", express.static(path.resolve()));

router.route("/seminar3").get((req, res) => {
  res.sendFile(path.join(path.resolve(), "", "/Seminar3.html"));
});

var port = 8080;
app.listen(port);
console.log("API listening to " + port);
