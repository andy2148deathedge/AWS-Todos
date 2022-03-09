const errorHandler = require('../repositories/error');
const db = require('../models');
const { Todo } = db;  

module.exports = {
  todos: async (req, res) => {
    try {// show index todos
      const todos = await Todo.findAll({
        raw: true,
        nest: true
      });
      return res.render('index', { todos });
    } catch (err) {
      console.log(err);
    }
  },

  todo: async (req, res) => {
    try {// show single todo page
      const todoId = req.params.id;
      const todo = await Todo.findByPk(todoId);
      return res.render('todo', { todo: todo.toJSON() });
    } catch (err) {
      console.log(err);
    }
  },

  newPage: async (req, res) => {
    try {// show create todo page
      return res.render('new');
    } catch (err) {
      console.log(err);
    }
  },

  new: async (req, res) => {
    try {// create todo and back to index
      await Todo.create({
        name: req.body.name,
      });
      return res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  }
}