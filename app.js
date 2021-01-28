const express = require('express');
const router = require('./routers/index');
const app = express();
const port = process.env.PORT || 3000;
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
