const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');
const errorHandler = require('../repositories/error');

router.get('/', todoController.todos);
router.get('/todos/new', todoController.newPage);
router.get('/todos/:id', todoController.todo);
router.post('/todos', todoController.new);
router.get('/todos/:id/edit', todoController.editPage);
router.put('/todos/:id', todoController.edit);
router.delete('/todos/:id', todoController.delete);

router.get('/*', errorHandler.errorPage);

module.exports = router; 