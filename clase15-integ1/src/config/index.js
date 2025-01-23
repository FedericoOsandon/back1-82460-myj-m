import { connect } from "mongoose"

export const connectDB = async () => {
    try {
        console.log('base de datos conectada')
        return  await connect('mongodb://127.0.0.1:27017/c82640dev')        
    } catch (error) {
        console.log(error)
    }
}

