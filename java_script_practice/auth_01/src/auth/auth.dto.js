
import z from 'zod';
const emailField =z
    .string({required_error:'Email is required'})
    .trim()
    .toLowerCase()
    .email("Invalid email address")
    .max(255)

const passwordField=z
    .string({required_error:"Password is required"})
    .min(8,'Password must be at least 8 charactores')
    .max(72,'Password must be at most 72 charactor')
    .regex(/[a-z]/, 'Password must contain a lowercase letter')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[0-9]/, 'Password must contain a number');



export const signUpDto=z.object({
    name: z.string({required_error: 'name is required'}).min(2).max(50),
    email: emailField,
    password:passwordField
})


export const signInDto=z.object({
    email: emailField,
    password:passwordField
})

export const refreshDto = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});


export const toUserResponse = (user)=>({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
})