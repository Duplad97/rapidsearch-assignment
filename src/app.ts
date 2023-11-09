import express, { Request, Response } from "express"
import cors from "cors"
import { Sequelize } from "sequelize";
import FS from "./classes/fs";
import fileRouter from "./router/file.router";

const app = express()

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'src/db/database.sqlite'
});
export const fs = new FS("/uploads");

sequelize.authenticate().then(() => {
    console.log("Connected to database successfully");
    sequelize.query('CREATE TABLE IF NOT EXISTS FILES (filename TEXT, hash TEXT);').then(() => {
        app.use(cors());

        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
    
        app.use("/", fileRouter);
    });
}).catch(err => {
    console.error(err);
});

export default app