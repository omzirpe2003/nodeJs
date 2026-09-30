import Router from 'express';
import * as controller from './auth.controller.js'
import RegiterDto from './dto/regiter.dto.js';
import LoginDto from './dto/login.dto.js';
import {authenticate, authorize} from './auth.middleware.js';

const router = Router()

router.post('/regiter',validate(RegiterDto),controller.register)
router.post('/login',validate(LoginDto), controller.logIn);
router.get('/me', authenticate ,controller.getMe);
router.post('/logout',authenticate,controller.logOut);
router.get('verify-email/:token',controller.verifyEmail);



export default router;