
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import 'dotenv/config.js';
import bcrypt from 'bcrypt';

export const createAccesssToken =(user)=>{
    return jwt.sign({id: user.id, email:user.email,role: user.role},env.JWT_ACCESS_SECRET,{
        expiresIn: env.JWT_ACCESS_EXPIRE
    })
}


export const createRefreshToken =(user)=>{
    return jwt.sign({id: user.id},env.JWT_REFRESH_SECRET,{
        expiresIn: env.JWT_REFRESH_EXPIRES
    })
}

export const verifyAccessToken = (token)=>{
    try {
       return jwt.verify(token,env.JWT_ACCESS_SECRET)
    } catch (error) {
        throw new ErrorResponse('Invalid or expired access token',401);
    }
}

export const verifyRefreshToken = (token)=>{
    try {
       return jwt.verify(token,env.JWT_REFRESH_SECRET)
    } catch (error) {
        throw new ErrorResponse('Invalid or expired refresh token',401);
    }
}


export const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');


export const hashPassword = (pass)=> bcrypt.hash(pass,process.env.BCRYPT_SALT_ROUNDS);