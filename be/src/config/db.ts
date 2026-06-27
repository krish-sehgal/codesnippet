import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log('database connected');
}

export default connectDB