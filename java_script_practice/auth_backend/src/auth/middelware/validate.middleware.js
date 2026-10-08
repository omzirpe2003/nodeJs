
import  {ErrorResponse}  from '../../comman/api_response/error_response.js';


export const validate = (schema )=>(req,res,next)=>{
    const result = schema.safeParse(req.body);
    if(!result.success){
        const error =result.error.issues.map((issue)=>({
            field:issue.path.join('.'),
            message:issue.message,
        }))
        return next(new ErrorResponse("Validation failed",400,"VALIDATION_ERROR",error))
    }
    req.body=result.data;
    next()
}