const zod = require('zod');

const createTodo = zod.object({
    title: String,
    description: String,
    completed: Boolean
})

module.exports = {
    createTodo
}