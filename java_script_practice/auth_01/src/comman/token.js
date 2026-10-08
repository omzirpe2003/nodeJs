
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import 'dotenv/config.js';
import bcrypt from 'bcrypt';
import { ErrorResponse } from './errorresponse.js';

export const createAccesssToken =(user)=>{
    return jwt.sign({id: user.id, email:user.email,role: user.role},process.env.JWT_ACCESS_SECRET,{
        expiresIn: process.env.JWT_ACCESS_EXPIRES
    })
}


export const createRefreshToken =(user)=>{
    return jwt.sign({id: user.id},process.env.JWT_REFRESH_SECRET,{
        expiresIn: process.env.JWT_REFRESH_EXPIRES
    })
}

export const verifyAccessToken = (token)=>{
    try {
       return jwt.verify(token,process.env.JWT_ACCESS_SECRET)
    } catch (error) {
        throw ErrorResponse.unauthorized('Invalid or expired access token',401);
    }
}

export const verifyRefreshToken = (token)=>{
    try {
       return jwt.verify(token,process.env.JWT_REFRESH_SECRET)
    } catch (error) {
        throw ErrorResponse.unauthorized('Invalid or expired refresh token',401);
    }
}




export const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');


export const hashPassword = async (pass)=>await bcrypt.hash(pass,Number(process.env.BCRYPT_SALT_ROUNDS));

export const comparePassword =async (pass,hash)=> await bcrypt.compare(pass,hash)