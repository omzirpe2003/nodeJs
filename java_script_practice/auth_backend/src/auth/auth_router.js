

import Router from 'express'
import { authLimiter } from './middelware/auth.limiter.middleware.js'
import { signUpDto } from './auth_dto.js';
import { anuthController } from './auth_controller.js';
import { validate } from './middelware/validate.middleware.js';


const authRouter = Router();

authRouter.post("/signUp",authLimiter,validate(signUpDto),anuthController.signUp)

export default authRouter;