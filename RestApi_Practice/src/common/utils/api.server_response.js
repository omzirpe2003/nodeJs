class ApiServerResponse{
    //500
    static internalServerError(res,msg="Internal Server Error",data=null){
        return res.status(500).json({
            success: false,
            msg,
            data
        });
    }

}

export default ApiServerResponse;