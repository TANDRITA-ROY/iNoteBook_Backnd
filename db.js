const db = require("mongoose");
const DbURI = process.env.DbURI;
//DbURI=mongodb://localhost:27017/inotebook

const connectToMongo = () => {
  db.connect(DbURI, () => {
    console.log("Connected to DB");
  });
};
module.exports = connectToMongo;
