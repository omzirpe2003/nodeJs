
import ApiClientErrorResponse from "../../common/utils/api.client_error.response";
import verifyAccessToken from'../../common/utils/jwt.js'
import User from './auth.model.js';


const authenticate = async (req,res,next) => {
    let token;
    if(req.headers.authorization?.startWith("Bearer"))
        token=req.authorization.split(" ")[1];

    if(!token)
        ApiClientErrorResponse.unauthorized("Not Autheticated")

    const decoded = verifyAccessToken(token)
    const user = await User.findOne(decoded.id);

    if(!user)
        ApiClientErrorResponse.unauthorized("User no loger exists");
    req.user={
        id:user._id,
        role:user.role,
        name:user.name,
        email:user.email
    };
    next();
}



const authorize = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(res.user.role)){
            throw ApiClientErrorResponse.forbidden("You do not have permission to perform this action")
        };
        next();
    }
}

export { authenticate, authorize }