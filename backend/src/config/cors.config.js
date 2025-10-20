import cors from "cors";


export const config = (app) => {
    app.use(cors({
        origin: process.env.FRONTEND_HOST,
        methods: "GET,POST,PUT,DELETE,PATCH",
    }));
};