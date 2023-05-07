const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(
  "mongodb+srv://bisht:bisht@cluster0.s3iq8ai.mongodb.net"
);
module.exports = {
  connection,
};
