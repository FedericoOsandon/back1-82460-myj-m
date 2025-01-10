// import express from 'express'
const express                = require('express')
const handlebars             = require('express-handlebars')
const viewsRouter            = require('./routes/views.router.js')
const { Server: HttpServer } = require('node:http')
const { Server: ServerIo   } = require('socket.io')


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


// middleware
const socketMidd = (io) => (req, res, next) => {
    req.io = io
    next()
}

app.use(socketMidd(io))

app.use('/', viewsRouter)
app.use('/api/products', ()=>{})
app.use('/api/carts', ()=>{})


httpServer.listen(8080, err => {
    if (err) {
        console.error('No se pudo iniciar el servidor: ', err)
        return
    }
    console.log('Server is running on http://localhost:8080')
})


