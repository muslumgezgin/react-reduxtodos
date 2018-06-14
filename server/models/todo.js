const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todos-backend");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
