const express = require('express');
const router = express.Router()

const {addTodo, findAllTodos, updateTodo, deleteTodo} = require('../controllers/todoControl');

router.post('/todo', addTodo);
router.get('/todo', findAllTodos);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

module.exports = router