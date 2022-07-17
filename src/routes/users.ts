import { createUser, getUsers, getUser, deleteUser } from 'controllers/users';
import { catchError } from 'middlewares/error/handlers';
import express from 'express';
const usersRoute = express.Router();

usersRoute.route('/users').get(catchError(getUsers));
usersRoute.route('/users').post(catchError(createUser));
usersRoute.route('/user/:email').get(catchError(getUser));
usersRoute.route('/user/:id').delete(catchError(deleteUser));

export default usersRoute;