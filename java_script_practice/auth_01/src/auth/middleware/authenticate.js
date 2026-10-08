import { verifyAccessToken } from "../../comman/token.js";



export const authenticate =(req,res,next)=>{
    const header = req.headers.authorization;

    if(!header || !header.startsWith('Bearer ')){
        return next(new ErrorResponse('Access token is required',401));
    }

    const token =header.split(' ')[1];
    const payload= verifyAccessToken(token)
    req.body={
        id:payload.id,
        email:payload.email,
        roal:payload.roal

    }

    next();
}

const authorize=(...roals)=>{
    return (req,res,next)=>{
        if(!roals.includes(req.body.roal)){
            throw new ErrorResponse('You do not have permission to do this',403);
        }
        next();
    }
}
