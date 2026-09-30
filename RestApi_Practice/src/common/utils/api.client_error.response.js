

class ApiClientErrorResponse {
    
    //400
    static badResquest(res,msg="Bad Request",data=null){
        return res.status(400).json({
            success: false,
            msg,
            data
        });
    }
    // 401 Unauthorized
    static unauthorized(res, msg = "Unauthorized", data = null) {
        return res.status(401).json({
            success: false,
            msg,
            data
        });
    }
    static conflict(message = "Conflict") {
        return new ApiError(409, message);
    }

    static forbidden(message = "forbidden") {
        return new ApiError(412, message);
    }


}

export default ApiClientErrorResponse;