import express from "express";
const morgan = require("morgan");
const db = require("./database");

//APP
const app = express();

//Settings
app.set("PORT", process.env.PORT || 5000);
const env = process.env.NODE_ENV;

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/equipos", require("./routes/device.routes"));

app.get("/api", (req, res) => {
  res.send("Welcome to our api.");
});

//Static Files
if (env === "production") {
  app.use("/", express.static(`${__dirname}/client/build`));
}

//Starting the server
app.listen(app.get("PORT"), () => {
  console.log(`API running at: localhost:${app.get("PORT")}`);
  console.log(`NODE_ENV: ${env}`);
});
