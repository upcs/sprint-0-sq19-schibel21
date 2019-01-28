/*Sarah Schibel*/
/*January 26th 2019*/
/*DOCTYPE JS*/

//Has function appear in HTML 
document.body.innerHTML = sum();

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

//Express for css to appear in HTML 
const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
  