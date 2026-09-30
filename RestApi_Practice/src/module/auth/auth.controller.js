import ApiSuccessResponse from "../../common/utils/api_respons";
import * as authService from './auth.service.js';


const register =async(req,res)=>{
    const user =await authService.register(req.body);
    ApiSuccessResponse.created(res,"User Regiter Success",user)
}

const logIn=async(res,res)=>{
    const {user,accessToken,refreshToken}=authService.logIn(res.body);
    ApiSuccessResponse.ok(res,"Login Successful", {user,accessToken})

}

const getMe = async (req,res)=>{
    const user= await authService.getMe(req.user.id);
    ApiSuccessResponse.ok(res,"User Profile",user);
}

const logOut =async(req,res)=>{
    await authService.logOut(req.user.id);
    ApiSuccessResponse.ok(res,"Logout Success");
}




export {
    register,
    logIn,
    getMe,
    logOut,
    

}
