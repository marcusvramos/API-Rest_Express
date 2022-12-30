import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://marcus651:vm651854@cluster0.uyachqs.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
