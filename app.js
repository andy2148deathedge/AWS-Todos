const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 3000;

// 11
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// routes
app.get('/', (req, res) => {
  res.send('Hello AWS Todos');
});

app.get('/todos', (req, res) => {
  res.render('todos');
});

app.listen(PORT, (req, res) => {
  console.log(`AWS Todos is listening on port ${PORT}.`);
});

