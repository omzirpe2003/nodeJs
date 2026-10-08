
import { ApiResponse } from "../comman/apiresponse.js";
import { toUserResponse } from "./auth.dto.js";
import { signUpService ,signInService,meService,logOutService} from "./auth.service.js"
export const signUp=async (req,res)=>{
    const result =await signUpService(req.body);
    ApiResponse.ok(res,"User Sign-up Successfulley",toUserResponse(result.user))
}


export const signIn=async(req,res)=>{
    const result = await  signInService(req.body);
    ApiResponse.ok(res,"LogIn Successfulley",{
        user:toUserResponse(result.user),
        access_token:result.accessToken, 
        refresh_token:result.refreshToken
    })
}

export const me=async (req,res)=>{
    const user = await meService(req.body.id);
    ApiResponse.ok(res,"User Profile",{
        user:toUserResponse(user)
    })
}

export const logOut= async (req,res)=>{
    await logOutService(req.body.id);
    ApiResponse.ok(res,"User Logout Successufley",res.body);
}
