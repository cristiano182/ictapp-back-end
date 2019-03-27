'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


// initializations 
const app = express()
require('./src/config/database')


//// OPTIONS FOR CORS 
var corsOptions = {
   origin: 'https://ictapp.net',
   optionsSuccessStatus: 200
 }

// MIDDLEWARES
app.use( cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

 // routes
 app.use(require('./src/routes/posts'))
 app.use(require('./src/routes/dados'))
 app.use(require('./src/routes/users'))
 app.use(require('./src/routes/files'))

 
 app.set('port', process.env.PORT || 7000)
 app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
 })
