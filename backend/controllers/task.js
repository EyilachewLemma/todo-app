const connection = require('../config/database.config')

const createTask = async (req, res, next) => {
    const {title, date, collectionId} = req.body
    const sql = 'INSERT INTO tasks (title, date, collectionId) VALUES(?,?,?)'

   try{
    connection.query(sql, [title,new Date(date),collectionId], (err, result) => {
        if(err) throw err
        res.status(201).json(result)
    })
   }
   catch(err){
    res.status(500).json(
        {status:'fail'}
    )
    }
}

const updateTask = async (req, res, next) => {
    const id = req.params.id
    const data = [req.body.title, id]
    const sql = `UPDATE tasks SET title=? WHERE id=?`

    try{
        connection.query(sql, data, (err, result) => {
            if(err) throw err
            res.status(200).json(result)
        })
    }
    catch(err){
        res.status(500).json({
            error:'faild to edit title'
        })
    }
}

const changeTaskStatus = async (req, res, next) => {
    const id = req.params.id
    const data = [req.body.completed, id]
    const sql = `UPDATE tasks SET completed=? WHERE id=?`

    try{
        connection.query(sql, data, (err, result) => {
            if(err) throw err
            res.status(200).json(result)
        })
    }
    catch(err){
        res.status(500).json({
            error:'faild to edit title'
        })
    }
}

const deleteTask = async (req, res, next) => {
    const sql = 'DELETE FROM tasks WHERE id=?'

    try{
        connection.query(sql, req.params.id, (err, result) => {
            if(err) throw err
            res.status(200).json(result)
        })
    }
    catch(err){
        res.status(500).json({
            error:"faild to delete task"
        })
    }
}
const getAllTask = async (req, res, next) => {
    const sql = 'SELECT tasks.title, tasks.date, tasks.completed, tasks.collectionId, collections.name FROM tasks INNER JOIN collections ON tasks.collectionId = collections.id'

    connection.query(sql, (err, result) => {
        if(err) throw err
        res.status(200).json(result)
    })
}
const getTaskByCollection = async (req, res, next) => {
    const sql = 'SELECT tasks.id,tasks.title, tasks.date, tasks.completed, tasks.collectionId, collections.name FROM tasks INNER JOIN collections ON tasks.collectionId = collections.id WHERE tasks.collectionId=?'

    connection.query(sql, req.params.id, (err, result) => {
        if(err) throw err
        res.status(200).json(result)
    })
}

module.exports = {
    createTask,
    updateTask,
    changeTaskStatus,
    deleteTask,
    getTaskByCollection,
    getAllTask
} 