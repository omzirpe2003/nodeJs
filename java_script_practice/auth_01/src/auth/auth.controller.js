
import { ApiResponse } from "../comman/apiresponse.js";
import { toUserResponse } from "./auth.dto.js";
import { signUpService } from "./auth.service.js"
export const signUp=async (req,res)=>{
    const result =await signUpService(req.body);
    ApiResponse.ok(res,"User Sign-up Successfulley",toUserResponse(result))
}