import { login } from 'controllers/authentication';
import express from 'express';
import { catchError } from 'middlewares/error/handlers';
const authenticationRoute = express.Router();

authenticationRoute.route('/login').post(catchError(login));

export default authenticationRoute;