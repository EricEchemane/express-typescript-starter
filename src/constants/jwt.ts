import jwt from 'jsonwebtoken';
import environment from './environment';

export default class JWT {
    static sign = (payload: any) => {
        const token = jwt.sign(payload, environment.secret);
        return token;
    };
}