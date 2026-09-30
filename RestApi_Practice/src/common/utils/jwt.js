import crypto, { hash } from'crypto';
import jwt from 'jsonwebtoken';

const generateRestToken=()=>{
    const rowToken =crypto.randomBytes(32).toString("hex");
    const hashedToken =crypto
                .createHash(`sha256`)
                .update(rowToken)
                .digest(`hex`);
    return {rawToken,hashedToken};
}

const genrateAccessToken =(payload)=>{
    return jwt.sign(payload,process.env.JWT_ACCESS_SECRT  || `DEMO` ,{
        expiresIn:process.env.JWT_ACCESS_EXPIRES_IN || `15m`
    })
}

const generateRefreshToken =(payload)=>{
    return jwt.sign(payload,process.env.JWT_REFRESH_SECRET || `DEMO`,{
        expiresIn:process.env.JWT_REFRESH_EXPIRES_IN || `7d`
    })
}

const verifyRefreshToken = (token)=>{
    return jwt.verify(token,process.env.JWT_REFRESH_SECRET)
}

const verifyAccessToken =(token)=>{
    return jwt.verify(token,process.env.JWT_ACCESS_SECRT);
}

export default {
    generateRestToken,
    genrateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    verifyAccessToken
};

