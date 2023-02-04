const express = require('express')
const {createTask, updateTask, deleteTask, getTaskByCollection, getAllTask} = require('../controllers/task.js')
const router = express.Router()

router.post('/',createTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)
router.get('/',getAllTask)
router.get('/collection/:id',getTaskByCollection)

module.exports = router