import { asyncHandler } from "../utils/asyncHandler.js"
import { authService } from "./auth.serivce.js";
import { toAuthResponse } from "./auth_dto.js";

export const anuthController = {
    signUp : asyncHandler(async (req,res)=>{
        const {user,token}=await authService.signUp(req.body);
        ApiResponse.ok(res,"Account Created Successfully",toAuthResponse(user,token))
    })

    

}