import jwt from "jsonwebtoken";

interface UserTokenBody{
    id:String
}

const script ="qwertyui";
export function createToken(payload: UserTokenBody): string{
    const toekn = jwt.sign(payload,script);
    return toekn;
}

export function verifyToken (token: string){
    try{
        const payload =jwt.verify(token,script) as UserTokenBody;
        return payload;
    }catch (error){
        return null;
    }
}