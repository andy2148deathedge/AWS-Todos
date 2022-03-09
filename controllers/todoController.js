const errorHandler = require('../repositories/error');
const db = require('../models');
const { sequelize } = db
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
      return errorHandler.errorPage;
    }
  },

  todo: async (req, res) => {
    try {// show single todo page
      res.render('todo');
    } catch (err) {
      console.log(err);
      return errorHandler.errorPage;
    }
  },
}