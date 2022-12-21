const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  postsId: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: false
  },
  author: {
    type: String,
    required: true,
    unique: false
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  dateCreated: {
    type: Date,
    required: true,
    unique: false
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", postsSchema);