const { Schema, model } = require('mongoose')
// import mongoose from 'mongoose'

const userCollection = 'users'

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    // password: String
})

const userModel = model(userCollection, userSchema) // crear un objeto model (user) -> interacuar con la base de datos

module.exports = {
    userModel
}