require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authCtrl = require('./controllers/authController')

const app = express()

//middleware
app.use(express.json())
app.use(session({
    resave: false, 
    saveUninitialized: false, 
    secret: SESSION_SECRET
}))


//endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)


//listening
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, ()=> 
    console.log(`port ${SERVER_PORT} is working`))
})


