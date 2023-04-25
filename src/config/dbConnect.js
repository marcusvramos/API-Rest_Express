import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL);

let db = mongoose.connection;

export default db;
