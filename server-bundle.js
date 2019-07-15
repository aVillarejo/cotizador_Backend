"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var morgan = require("morgan");
var db = require("./database");

//APP
var app = (0, _express2.default)();

//Settings
app.set("PORT", process.env.PORT || 5000);
var env = process.env.NODE_ENV;

//Middlewares
app.use(morgan("dev"));
app.use(_express2.default.json());

//Routes
app.use("/api/equipos", require("./routes/device.routes"));

app.get("/api", function (req, res) {
  res.send("Welcome to our api.");
});

//Static Files
if (env === "production") {
  app.use("/", _express2.default.static(__dirname + "/client/build"));
}

//Starting the server
app.listen(app.get("PORT"), function () {
  console.log("API running at: localhost:" + app.get("PORT"));
  console.log("NODE_ENV: " + env);
});
