import { verifyAccessToken } from '../../utils/token.js';

export const authtication=(req,res,next)=>{
    const header =req.header.authorization;
    if(!header || !header.startWith("Bearer ")){
        return next(new ErrorResponse("Authntication required",401,"NO_TOKEN"))
    }

    const token =header.split(' ')[1];

    try {
        const payload =verifyAccessToken(token)
        req.user={id:payload.sub,email:payload.email};
        next();  
        
    } catch (error) {
        next(error);
    }
}


