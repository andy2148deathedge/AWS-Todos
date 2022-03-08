const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

const errorHandler = require('../repositories/error');

router.get('/', todoController.todos);
router.get('/todo', todoController.todo);

router.get('/*', errorHandler.errorPage);

module.exports = router; 