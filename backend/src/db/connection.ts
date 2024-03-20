import { connect, disconnect } from "mongoose";


async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL)
    } catch (error){
        console.log(error);
        throw new Error("can not connect to MongoDB")
    }
}

async function disconnectFromDB() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("could not disconnect from MongoDB");
    }
}
export { connectToDatabase, disconnectFromDB };