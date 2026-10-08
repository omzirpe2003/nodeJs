import { ErrorResponse } from "../../comman/errorresponse.js";


export const validate =(shema)=>(req,res,next)=>{
    const validate =shema.safeParse(req.body);
    if (!validate.success) {
        const errors = validate.error.issues.map((i) => ({
            field: i.path.join('.'),
            message: i.message,
        }));
    return next(ErrorResponse.badRequest( 'Validation failed', errors ));
  }

    req.body=validate.data;
    next();

}
