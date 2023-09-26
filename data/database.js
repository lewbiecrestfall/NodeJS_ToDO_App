import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI, { dbName: "backendapi" })
        .then((c) => console.log(`Database Connected with ${c.Connection.host}`))
        .catch((e) => console.log(e));
}