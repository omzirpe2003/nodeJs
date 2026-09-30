import User from './auth.model.js';
import {generateRestToken, genrateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    verifyAccessToken

} from '../../common/utils/jwt.js';
import ApiClientErrorResponse from '../../common/utils/api.client_error.response.js';

const register=async ({name,email,password,role})=>{
    const existing=await User.findOne({email});
    if(existing)
        throw ApiClientErrorResponse.conflict("Eamil Alredy exisit")

    const {rawToken,hashToken}=generateRestToken();

    const user=await User.create({
        name,email,password,role,verificationToken:hashToken
    });

    const userObj=user.toObject();
    delete userObj.password;
    delete userObj.verificationToken;

    return userObj;
}


const hashTooken=(token)=>{
    crypto.createHash(`sha256`).update(token).digest(`hex`);
}

const logIn =async({email,password})=>{
    const user =await User.findOne({email}).select(`+password`);
    if(!user)
        throw ApiClientErrorResponse.unauthorized("Invalid Email/Password");

    if(!user.isVerified)
        throw ApiClientErrorResponse.forbidden(`Plz verify your email before login`)

    const accessToken = genrateAccessToken({id:user._id,role:user.role});
    const refreshToken= generateRefreshToken({id:user._id});


    user.refreshToken = hashTooken(refreshToken);
    await user.save({validateBeforeSave:false});
    const useObj=user.toObject();
    delete userObj.password;
    delete userObj.refreshToken;
    return { user : userObj, accessToken , refreshToken};
}

const getMe=async(userId)=> {
    const user =await User.findById(userId);
    if(!user)
        ApiClientErrorResponse.notFound("User Not Found");
    return user;
}


const refresh =async (token) => {
    if(!token) 
        throw ApiClientErrorResponse.unauthorized("Refresh token missing");
    const decode =verifyRefreshToken(token);

    const user =await User.findOne(decode._id).select(`+refreshToken`);
    if(!user)
        throw ApiClientErrorResponse.unauthorized("User not found");

    if(user.refreshToken !== hashTooken(token))
        throw ApiClientErrorResponse.unauthorized("Invalid Refresh token");
    const accessToken =genrateAccessToken({id:user._id,role:user.role})
    return {accessToken};

}

const logOut = async(userId)=>{
   await User.findByIdAndUpdate(userId,{refreshToken:null});
}


export {
    register,getMe,refresh,logIn,logOut
}