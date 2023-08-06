import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connecting = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongodb database ${connecting.connection.host}`)
    } catch (error) {
        console.log(`error in mongodb ${error}`)
    }
}

export default connectDB;