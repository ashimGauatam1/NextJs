import mongoose from "mongoose";

type Connection={
    isConnected?:number
}

const ConnectionObj:Connection={}

export async function dbConnect(){
    if(ConnectionObj.isConnected){
        console.log("already connected to database");
        return;
    }
    const db=await mongoose.connect(process.env.MONGO_URI ||"",{
        dbName:"Test-users"
    })
    ConnectionObj.isConnected=db.connections[0].readyState
    console.log("successfully connected to database");
}