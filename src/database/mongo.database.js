import mongoose, { Mongoose } from "mongoose"

export const mongoDbConnection = async()=>{
    const databaseUrl = process.env.MONGO_DB_URL
    try {
        await mongoose.connect(databaseUrl,{
           maxPoolSize : process.env.MAX_POOL_SIZE,
           serverSelectionTimeoutMS : process.env.SERVER_TIMEOUT 
        })
        console.log("✅ MONGO DB IS CONNECTED !")
    } catch (databaseError) {
        console.log("❌ ERROR IN MONGO DB CONNECTION : ",databaseError)
    }
}