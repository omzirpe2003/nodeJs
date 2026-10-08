
export class ErrorResponse extends Error{
    constructor (msg,statuscode=500,code="INTERNAL_ERROR", error=undefined){
        super(msg);
        this.statuscode = statuscode;
        this.code=code,
        this.error=error,
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(res,msg='Bad Request'){
        res.status(400).json({
            success:false,
            msg,
        })
    }
}
