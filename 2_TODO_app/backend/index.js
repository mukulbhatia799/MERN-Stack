// const express = require('express');
// const { createTodo } = require('./types');   // destructing of object. we can even simply write const types = require('./types'); and use it further like types.createTodo.

// const app = express();

// app.use(express.json());

// app.post('/todo', (req, res) => {

// })

// app.get('/todos', (req, res) => {

// })   

// app.put('/completed', (req, res) => {
    
// })

const express = require('express');
const {createTodo, updateTodo} = require('./types');
const {todo} = require('./db');
const cors = require('cors');       // npm i cors
const app = express();

app.use(express.json()); // middleware
app.use(cors());    // to remove the cors error when hitting frontend at backend. As, we cannot hit backend without the permission.



app.get('/todos', (req, res) => {
    const todos = todo.find({});

    res.json({
        todos
    })
})



app.post('/todo', async (req, res) => {
    const createPayload = req.body;

    // safeParse() checks that the schema is correct of creating payload or not. If true, sends the object with values of data and success(boolean value).
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return ;
    }

    // now put it into mongodb server.

    // we have to use await so that before todo is created, the  respose "todo created" is not send. Sometimes, there might be the issue of database connectivity(like Incorrect login credentials, Network issues, Database server issues).
    await todo.create({ 
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "you send  the wrong inputs"
        })
    }

    // now put or update it in mongodb
})



app.listen(3000);