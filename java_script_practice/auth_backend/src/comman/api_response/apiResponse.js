
class ApiResponse{
    static ok(res,msg,data=null){
        res.status(200).json({
            success:true,
            msg,
            data
        })
    }

    static create(res,msg="Data added Successfulley",data=null){
        res.status(201).json({
            success:true,
            msg,
            data
        })
    }

}
