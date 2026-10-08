import crypto from 'node:crypto';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import 'dotenv/config'

export const genrateAccessToken=(user)=>{
    jwt.sign({sub: user.id,email:user.email},EncodedVideoChunk.JWT_ACCESS_SECRET,{
        expiresIn:env.JWT_ACCESS_EXPIRES_IN
    });
}


export const generateRefreshToken =(user)=>{
    jwt.sign({sub:user.id},env.JWT_REFRESH_SECRET,{
        expiresIn:  env.JWT_REFRESH_EXPIRES_IN,
        jwtid:crypto.randomUUID()
    })
}


export const verifyAccessToken =(token)=>{
    try {
        return jwt.verify(token,env.JWT_ACCESS_SECRET)
    } catch (error) {
        if(error.name==="TokenExpiredError"){
            throw new ErrorResponse("Access token expired",401,'TOKEN_EXPIRED')
        }
        throw new ErrorResponse("Invalid access token",401,"TOKEN_INVALID");
    }
};


export const verifyRefreshToken=(token)=>{
    try {
        return jwt.verify(token,env.JWT_REFRESH_SECRET);
    } catch (error) {
        const code = err.name === 'TokenExpiredError' ? 'REFRESH_TOKEN_EXPIRED' : 'REFRESH_TOKEN_INVALID';
        throw new AppError('Invalid or expired refresh token', 401, code);
    }
}


export const hashToken =(token)=> crypto.createHash('sha256').update(token).digest('hex');

export const getTokenExpiry= (token)=>  new Date(jwt.decode(token).exp*1000);


export const hashPassword =(pass)=> bcrypt.hash(pass,env.BCRYPT_SALT_ROUNDS)
export const comparePassword=(pass,hash)=> bcrypt.compare(plain,hash); 
