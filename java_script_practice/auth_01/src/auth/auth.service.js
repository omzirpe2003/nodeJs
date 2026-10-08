import { eq } from 'drizzle-orm';
import {db} from './db/index.js';
import { usersTable } from './db/schema.js';
import { comparePassword, createAccesssToken, createRefreshToken, hashPassword, hashToken } from '../comman/token.js';
import { ErrorResponse } from '../comman/errorresponse.js';

const createToken=async (user)=>{
    const accessToken= createAccesssToken(user);
    const refreshToken=createRefreshToken(user);
    console.log("ACCESS TOKEN:", accessToken);
    console.log("REFRESH TOKEN:", refreshToken);
    await db.update(usersTable).set({refreshToken: hashToken(refreshToken)}).where(eq(usersTable.id,user.id));
    return {accessToken, refreshToken};
}

export const signUpService =async ({email,name,password})=>{
    const exist= await db.select().from(usersTable).where(eq(usersTable.email,email));
    if(exist.length>0)
        throw ErrorResponse.conflict("Email Already Exist");

    const hashPass= await hashPassword(password);
    const [user] = await db.insert(usersTable).values({name,email,password:hashPass}).returning()
    return {user}
}   


export const signInService = async({email,password})=>{
    const [user] = await db.select().from(usersTable).where(eq(usersTable.email,email));
    if(!user){
        throw ErrorResponse.conflict("Invalid email or password");
    }

    const compare =await comparePassword(password,user.password)
    if(!compare)
        throw ErrorResponse.unauthorized('Invalid email or password');

    const tokens=await createToken(user);
    return {user, ...tokens};
}

export const meService=async(userId)=>{
    const [user]=await db.select().from(usersTable).where(eq(usersTable.id,userId));
    if (!user) throw new ApiError(404, 'User not found');
    return user;
}

export const logOutService=async(userId)=>{
   await db.update(usersTable).set({ refreshToken: null }).where(eq(usersTable.id,userId));
}
