const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/mongodb_prac")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;


// mongoose Schmea 템플릿
// const mongoose = require("mongoose");

// const defaultSchema = new mongoose.Schema({
//   defaultId: {
//     type: Number,
//     required: true,
//     unique: true
//   }
// });

// module.exports = mongoose.model("Defaults", defaultSchema);