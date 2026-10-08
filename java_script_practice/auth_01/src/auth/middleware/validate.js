
export const validate =(shema)=>(req,res,next)=>{
    const validate =shema.safeParse(req.body);
    if (!validate.success) {
        const errors = result.error.issues.map((i) => ({
            field: i.path.join('.'),
            message: i.message,
        }));
    return next(new ApiError(400, 'Validation failed', errors));
  }

    req.body=validate.data;
    next();

}
