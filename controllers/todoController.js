const errorHandler = require('../repositories/error')

module.exports = {
  todos: async (req, res) => {
    try {// show index todos
      res.render('index');
    } catch (err) {
      console.log(err);
      return errorHandler.errorPage
    }
  },

  todo: async (req, res) => {
    try {// show single todo page
      res.render('todo');
    } catch (err) {
      console.log(err);
      return errorHandler.errorPage
    }
  },
}