import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const Connection: ConnectionObject = {};

const dbConnect = async () => {
  try {
    if (Connection.isConnected) {
      console.log("already connected to database");
      return;
    }
    const db = await mongoose.connect(process.env.MONGOURI || "");
    Connection.isConnected = db.connections[0].readyState;
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
