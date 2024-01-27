const express = require("express");
const { todo } = require("./database");
const app = express();
const {createTodo, updateTodo} = require("../types");
app.use(express.json());
const cors = require("cors");
app.use(cors());


app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return ;
    }
    await todo.create({
        title : createPayload.title,
        desc : createPayload.desc,
        completed : false,
    })
});
app.get('/todos', async function(req,res){
    const todos = await todo.find({

    })
    res.json({
        todos
    })
});
app.put('/completed',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return ;
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true,
    })
    res.json({
        msg : "Todo marked as complete",
    })
});
app.listen(3000);