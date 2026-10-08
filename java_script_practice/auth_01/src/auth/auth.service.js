import { eq } from 'drizzle-orm';
import {db} from './db/index.js';
import { usersTable } from './db/schema.js';
import { hashPassword } from '../comman/token.js';
import { ErrorResponse } from '../comman/errorresponse.js';

export const signUpService =async ({email,name,password})=>{
    const exist= await db.select().from(usersTable).where(eq(email,usersTable.email));
    if(exist)
        throw ErrorResponse.conflict("Email Already Exist");

    const hashPass= hashPassword(password);
    const [user]=await db.insert(usersTable).values({name,email,password:hashPass}).returning()
    return {user}
}   


