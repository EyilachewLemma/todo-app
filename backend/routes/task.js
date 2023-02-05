const express = require('express')
const {createTask, updateTask,changeTaskStatus, deleteTask, getTaskByCollection, getAllTask} = require('../controllers/task.js')
const router = express.Router()

router.post('/',createTask)
router.patch('/:id',updateTask)
router.patch('/status/:id',changeTaskStatus)
router.delete('/:id',deleteTask)
router.get('/',getAllTask)
router.get('/collection/:id',getTaskByCollection)

module.exports = router