

const validate=(DtoClass)=>{
    return (req,res,next)=>{
        const {error,value}=DtoClass.validate(res.body)
        if(error)
            throw ApiClientErrorResponse.badResquest();
        res.body=value
        next();
    }
}

