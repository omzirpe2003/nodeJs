
import express from 'express';
import AuthenticationController from './controller.js';
import { authenticationMidd, restrictToAuthticateUser } from '../middelware/auth.meddileware.js';
export const authRouter =express.Router();
const authenticationController=new AuthenticationController();

authRouter.post('/sign-up',authenticationController.signUp.bind(authenticationController));
authRouter.post('/sign-in',authenticationController.signIn.bind(authenticationController));
authRouter.get('/me',restrictToAuthticateUser(),authenticationController.me.bind(authenticationController));
