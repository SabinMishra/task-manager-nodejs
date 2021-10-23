
const express = require('express');

const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()



const PORT = 3000;


//middleware

app.use(express.json())




app.use('/api/v1/tasks',tasks);



//app.get('/api/v1/tasks)
//app.post('/api/v1/tasks)
//app.get('/api/v1/tasks/:id)
//app.patch('/api/v1/tasks/:id)
//app.delete('/api/v1/tasks/:id)
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,console.log(`Server is listening on port ${PORT}...`))
    }catch(error){
        console.log(error)
    }
}
start()