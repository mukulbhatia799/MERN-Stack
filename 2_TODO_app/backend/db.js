const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos");
mongoose.connect("mongodb+srv://mukulbhatia189:<kabirmukul1>@cluster0.zg7kjju.mongodb.net/");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
    /* we can also set completed as false by default like:
        completed: {
            type: Boolean,
            default: false
        }
    */
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}