const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const taskRouter = require('./routes/task.js');
const collectionRouter = require('./routes/collections.js')
const connection = require('./config/database.config')

dotenv.config({path: './config/config.env'})
const app = express()

  //   adding middlewares such as morgan, cors and json
app.use(cors(), express.json());



app.use('/api/tasks', taskRouter)
app.use('/api/collections',collectionRouter )

connection.connect(function(err) {
    if (err) {
       throw err;
    }
    else {
        console.log('database conncected')
    }
});

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running on ${PORT}`))