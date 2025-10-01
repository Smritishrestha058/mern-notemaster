import mongoose from "mongoose"

export const connectDB = async() =>{
    try{ 
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch(errpr){
        console.error("Error connecting to mongoDB, error");
        process.exit(1) //exit with failure
    }
}