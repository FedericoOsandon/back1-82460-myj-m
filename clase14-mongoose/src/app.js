// import express from 'express'
const express                = require('express')
const handlebars             = require('express-handlebars')
const viewsRouter            = require('./routes/views.router.js')
const usersRouter            = require('./routes/api/users.router.js')
const { Server: HttpServer } = require('node:http')
const { Server: ServerIo   } = require('socket.io')
const mongoose = require('mongoose')


const app = express()
const httpServer = new HttpServer(app)
const io = new ServerIo(httpServer)

// app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', __dirname +'/views')

const connectDB = () => {
    console.log('base de datos conectada')
    mongoose.connect('mongodb+srv://Federico:Federico1**@cluster0.r3sreep.mongodb.net/c82640?retryWrites=true&w=majority&appName=Cluster0') // uri -> mongo atlas connect 
}
connectDB()

// middleware
const socketMidd = (io) => (req, res, next) => {
    req.io = io
    next()
}

app.use(socketMidd(io))

app.use('/', viewsRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', ()=>{})
app.use('/api/carts', ()=>{})


httpServer.listen(8080, err => {
    if (err) {
        console.error('No se pudo iniciar el servidor: ', err)
        return
    }
    console.log('Server is running on http://localhost:8080')
})


