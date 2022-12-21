const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  postsId: {
    type: Number,
    required: true,
    unique: false
  },
  commentsId: {
    type: Number,
    required: true,
    unique: true
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
    type: Date,     // 변경: String -> Date 
    required: true,
    unique: false
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comments", commentsSchema);