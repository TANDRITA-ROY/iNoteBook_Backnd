const db = require("mongoose");
const DbURI = process.env.DbURI;

const connectToMongo = () => {
  db.connect(DbURI, () => {
    console.log("Connected to DB");
  });
};
module.exports = connectToMongo;
