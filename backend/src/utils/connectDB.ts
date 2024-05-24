import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default function connect() {
  mongoose.connect(process.env.MONGO_URL as string, {
    dbName: "connect"
  });
  mongoose.connection.on("error", (error: Error) => console.log(error));
}
