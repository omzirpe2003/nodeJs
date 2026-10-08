

import {Router} from 'express';
import { signInDto, signUpDto } from './auth.dto.js';
import { validate } from './middleware/validate.js';
import { signUp,signIn,me ,logOut} from './auth.controller.js';
import { authenticate } from './middleware/authenticate.js';


export const authRouter = Router();

authRouter.post(`/signUp`,validate(signUpDto), signUp);
authRouter.post('/signIn',validate(signInDto),signIn);
authRouter.get('/me',authenticate,me);
authRouter.post('/logOut',authenticate, logOut);