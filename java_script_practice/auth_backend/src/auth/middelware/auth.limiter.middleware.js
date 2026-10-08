
import rateLimit from 'express-rate-limit';

export const authLimiter = rateLimit({
    windowMs: 15*60*1000, //15 minutes block remove time
    limit:20,             // same ip has do 20 req he will block
    standardHeaders:true,
    legacyHeaders:false,
    message:{
        success:false,
        message:"Too many attepts, please try agsin later",
        code :"RATE_LIMITED",
    }
})
