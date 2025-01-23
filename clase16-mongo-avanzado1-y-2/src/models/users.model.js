import { Schema, model } from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const userCollections = 'users'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true 
    },
    last_name: String,
    email: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    gender: String
})

userSchema.plugin(mongoosePaginate)

export const modelUser = model(userCollections, userSchema)
