const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 3000;

// hbs
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/todo', (req, res) => {
  res.render('todo');
});

app.listen(PORT, (req, res) => {
  console.log(`AWS Todos is listening on port ${PORT}.`);
});

