import { refreshTokenRepo } from "../repo/refreshToken.repo.js";
import { userRepo } from "../repo/userRepo.js"
import { generateRefreshToken, genrateAccessToken, getTokenExpiry, hashPassword, hashToken } from "../utils/token.js";


const ishueToken =async (user)=>{
    const accessToken =genrateAccessToken(user);
    const refreshToken=generateRefreshToken(user);
    await refreshTokenRepo.create({
        userId:user.id,
        tokenHash:hashToken(refreshToken),
        expiresAt: getTokenExpiry(refreshToken),
    })
    return {accessToken,refreshToken}
}

export const authService ={
    async signUp({name,email,password}){
        const existing= await userRepo.findByEmail(email);
        if(existing)
            throw new ErrorResponse("Email is Alredy register",409,'EMAIL_EXISTS');
        const passwordHash=hashPassword(password)
        const user=await userRepo.create({name,email,passwordHash})
        return user;
    }
}