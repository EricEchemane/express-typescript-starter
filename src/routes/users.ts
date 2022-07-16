import { createUser, getUsers } from 'controllers/users';
import express from 'express';
const usersRoute = express.Router();

usersRoute.route('/users').get(getUsers);
usersRoute.route('/users').post(createUser);

export default usersRoute;