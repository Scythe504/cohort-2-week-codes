const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Scythe:Scythe_504@scythedb.afecjzv.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title : String,
    desc : String,
    completed : Boolean
})
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
