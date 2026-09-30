import express from 'express'
import type { Express, Request,Response } from 'express'


export function createServerOfExpress(): Express{
    const app = express();

    //middel 
    app.use(express.json());
    app.get("/",(req:Request, res: Response)=>{
        return res.status(200).json({msg:"welcome to om zirpe word"});
    })
    //routes

    return app;
}





