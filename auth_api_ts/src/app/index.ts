import express from 'express'
import type { Express, Request,Response } from 'express'
import {authRouter} from './auth/router.js'
import { authenticationMidd } from './middelware/auth.meddileware.js';

export function createServerOfExpress(): Express{
    const app = express();

    //middel 
    app.use(express.json());
    app.use(authenticationMidd())
    app.get("/",(req:Request, res: Response)=>{
        return res.status(200).json({msg:"welcome to om zirpe word"});
    })

    app.use("/api/auth",authRouter)
    //routes

    return app;
}





