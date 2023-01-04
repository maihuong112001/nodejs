const express = require('express')
var path = require('path');
const { engine }  = require('express-handlebars');
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')))

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})