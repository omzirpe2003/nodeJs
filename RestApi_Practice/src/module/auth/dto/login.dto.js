
import Joi from 'joi';
import BaseDto from '../../../common/dto/base.dto';

class LoginDto extends BaseDto{
    static shema =Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
}

export default LoginDto;