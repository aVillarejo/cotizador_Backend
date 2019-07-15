const mongoose = require("mongoose");
const { connect } = require("mongoose");
mongoose.Promise = global.Promise;

let mongoUserCredentials = "";
if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
  mongoUserCredentials = `${process.env.MONGO_USER}:${
    process.env.MONGO_PASSWORD
  }@`;
}

const MONGO_URL = process.env.MONGO_URL || "localhost:27017";
const DB_NAME = process.env.MONGO_DB_NAME || "MERN_DB";
const MONGO_ENV = process.env.MONGO_ENV || "mongodb";

const MONGO_CONNECTION_STRING = `${MONGO_ENV}://${mongoUserCredentials}${MONGO_URL}/${DB_NAME}`;

module.export = connect(
  MONGO_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
)
  .then(db => console.log("Database is Connected"))
  .catch(err => console.error(err));
