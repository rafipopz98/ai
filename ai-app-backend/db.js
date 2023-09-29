const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

const dburl = process.env.DB_URL;

const connectionDb = async () => {
  console.log("hii outside db");

  const DbUrl = dburl;

  mongoose
    .connect(DbUrl)
    .then(() => {
      console.log("connected to database"); 
      return;
    })
    .catch((e) => {
      console.log(`errrorrr ${e.message}`);
      return;
    });
};
module.exports = { connectionDb };
