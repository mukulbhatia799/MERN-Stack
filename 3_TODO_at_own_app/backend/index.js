const express = require('express');

const {createTodo} = require('./types');
const {todo} = require('./db');

const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {
    const todos = todo.find({});

    res.json({
        todos
    });
})

app.post('/todo', async (req, res) => {
    const createPayload = req.body;

    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg: "Data send is not valid!!!"
        })
        return ;
    }

    // store in db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    // if we are not waiting, then the "todo created" msg might be displayed before it is created and there might be database connectivity issue.

    // send message to user that todo created.
    res.json({
        msg: "todo created!"
    })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = createTodo.safeParse(updatePayload);
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg: "You send the wrong inputs."
        })
        return ;
    }

    // Now, mark as done in db.

    /* Any entry in database is uniquely identified by _id. So,     
    todo.update(
        {id you want to update}, 
        {actual property of object you want to update.}
    ) 
    */
    await todo.update(
        {
        _id: req.body.id
        },
        {
            completed: true
        }
    )
    // required to await so that the res.json() is not displayed before.

    res.json({
        msg: "Todo marked is completed."
    })
})


app.listen(27017);