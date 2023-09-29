const { Schema, model } = require("mongoose");

const MsgSchema = new Schema({
  prompt: String,
  response: String,
  likes: Number,
});

module.exports = model("Save", MsgSchema);
