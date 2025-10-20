import express from "express";
import paths from "../utils/paths.js";


export const config = (app) => {
    
    app.use("/api/public", express.static(paths.public));
};