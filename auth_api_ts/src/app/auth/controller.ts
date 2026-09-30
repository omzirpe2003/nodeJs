import type {Request, Response} from 'express';
import { signUpModel } from './models.js';
import {db} from '../../db/index.js';
import { userTabel } from '../../db/schema.js';
import { eq } from 'drizzle-orm';
import crypto from "node:crypto"

class AuthenticationController{
    public async signUp(req:Request, res:Response){
        const validated= await signUpModel.safeParseAsync(req.body);
        if(validated.error)
            return res.status(400).json({success:false,msg:`body validation filed ${validated.error.issues}`});

        const {firstName,lastName,email,password}=validated.data;
        const userEmailResult=await db.select().from(userTabel).where(eq(userTabel.email,email));
        if(userEmailResult.length>0)
            return res.status(400).json({success:false,msg:`email alredy exist ${email}`});

        const salt = crypto.randomBytes(32).toString("hex");
        const hash= crypto.createHmac("sha256",salt).update(password).digest("hex");
        const user= await db.insert(userTabel).values({

            firstName,
            lastName,
            email,
            password:hash,
            salt
        }).returning({id:userTabel.id});

        return res.status(201).json({success : true, msg :"User register", user})



    }

}
export default AuthenticationController

