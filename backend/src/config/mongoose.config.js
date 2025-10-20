import { connect, Types } from "mongoose";


export const connectDB = async () => {
    const URL = process.env.MONGODB_URI;

    try {
        await connect(URL);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log("Error al conectar con MongoDB", error.message);
    }
};


export const isValidId = (id) => {
    return Types.ObjectId.isValid(id);
};