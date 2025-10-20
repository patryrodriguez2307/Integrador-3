import express from "express";


export const config = (app) => {
    app.use(express.json());
};