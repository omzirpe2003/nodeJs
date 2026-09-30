class ApiSuccessResponse {
    
    //200
    static ok(res,msg,data=undefined){
        return res.status(200).json({
            success : true,
            msg,
            data
        })
    }

    // 201
    static created(res,msg,data=null){
        return res.status(201).json({
            succcess :true,
            msg,
            data,
        })
    };

    // 202
    static accepted(res,msg,data=null){
        return res.status(202).json({
            success: true,
            msg,
            data
        })
    };

    //203- non-Authoritative infromation
    static nonAuthoritative(res,msg,data=null){
        return res.status(203).json({
            success:true,
            msg,
            data
        })
    }


    //204
    static noContext(res){
        return res.status(204).send();
    }

}

export default ApiSuccessResponse;
