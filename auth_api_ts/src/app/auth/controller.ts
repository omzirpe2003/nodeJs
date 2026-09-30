import type {Request, Response} from 'express';
import { signIn, signUpModel } from './models.js';
import {db} from '../../db/index.js';
import { userTabel } from '../../db/schema.js';
import { eq } from 'drizzle-orm';
import crypto from "node:crypto"
import { createToken } from '../utils/jtwConfig.js';

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

    public async signIn(req:Request, res:Response){
        const validate =await signIn.safeParseAsync(req.body);
        if(validate.error)
            return res.status(400).json({success:false,msg:`body validation filed ${validate.error.issues}`});

        const {email,password}= validate.data;
        
        const [userSelect] = await db.select().from(userTabel).where(eq(userTabel.email,email));
        if(!userSelect)
            return res.status(404).json({success:false,msg:`email ${email} does not exists`});

        const salt=userSelect.salt;
        const hash=crypto.createHmac('sha256',salt!).update(password).digest("hex")
        if(userSelect.password!==hash)
             return res.status(400).json({success:false,msg:`Email or Password in Valid`});

        const token = createToken({id:userSelect.id});
        return res.json({ message: 'Signin Success', data: { token } })
        

    }

    public async me(req:Request, res:Response){

        // @ts-ignore
        const userPayload =req.user;
        const user =await  db.select().from(userTabel).where(eq(userTabel.id,userPayload.id));
        res.status(200).json({success:true,msg:"User Profile", user})
    }
}
export default AuthenticationController

