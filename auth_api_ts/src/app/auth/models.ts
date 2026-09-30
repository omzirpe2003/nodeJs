

import {email, z} from 'zod'

export const signUpModel = z.object({
    firstName:z.string().min(2).max(30),
    lastName:z.string().min(2).max(30),
    email:z.email(),
    password:z.string().min(6)

});

export const signIn=z.object({
    email:z.email(),
    password:z.string().min(6)
})