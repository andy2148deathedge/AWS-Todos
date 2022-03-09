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
  },

  editPage: async (req, res) => {
    try {// edit page
      const todoId = req.params.id;
      const todo = await Todo.findByPk(todoId);
      return res.render('edit', { todo: todo.toJSON() });
    } catch (err) {
      console.log(err);
    }
  },

  edit: async (req, res) => {
    try {// edit page
      const todoId = req.params.id;
      const todo = await Todo.findByPk(todoId);
      todo.name = req.body.name;
      await todo.save();
      return res.redirect(`/todos/${todoId}/edit`);
    } catch (err) {
      console.log(err);
    }
  }, 

  delete: async (req, res) => {
    try {// delete todo by pk
      await Todo.destroy({
        where: { id: req.params.id, }
      });
      return res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  },  
}