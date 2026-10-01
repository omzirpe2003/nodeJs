
import type {Request, Response,NextFunction} from 'express';
import { verifyToken } from '../utils/jtwConfig.js';

export function authenticationMidd(){
    
    return async function(req:Request, res: Response, next:NextFunction){
        const header= req.headers["authorization"];
        if(!header)
            return next();
        if(!header?.startsWith("Bearer "))
            return res.status(400).json({ error: 'authorization header must start with Bearer' })

        const token =header.split(" ")[1];
        if (!token) return res.status(400).json({ error: 'authorization header must start with Bearer and followed by token' })
        const paylod =  verifyToken(token);
        if (!paylod) {
            return res.status(401).json({
                error: "Invalid or expired token"
            });
        }
        // @ts-ignore 
        req.user=paylod;
        next();
    }   
}

export function restrictToAuthticateUser(){
    return async function(req:Request, res: Response, next:NextFunction){
        // @ts-ignore
        if(!req.user)  
            return res.status(401).json({ error: 'Authentication Required' })
        return next();
    }
}
