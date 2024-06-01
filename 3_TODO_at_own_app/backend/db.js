const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:3000");    // in real life project, we will create .env file and store this link in that.

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
// or we can write like

// module.exports({
//     todo: todo
// })