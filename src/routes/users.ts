import { createUser, getUsers, getUser, deleteUser } from 'controllers/users';
import express from 'express';
const usersRoute = express.Router();

usersRoute.route('/users').get(getUsers);
usersRoute.route('/users').post(createUser);
usersRoute.route('/user/:email').get(getUser);
usersRoute.route('/user/:id').delete(deleteUser);

export default usersRoute;