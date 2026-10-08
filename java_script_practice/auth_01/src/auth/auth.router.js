

import {Router} from 'express';
import { signUpDto } from './auth.dto.js';
import { validate } from './middleware/validate.js';
import { signUp } from './auth.controller.js';


export const authRouter = Router();

authRouter.post(`/signUp`,validate(signUpDto), signUp);