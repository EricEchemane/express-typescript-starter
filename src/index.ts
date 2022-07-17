import express from 'express';
import environment from "constants/environment";
import usersRoute from "routes/users";
import { errorLogger } from 'middlewares/error/handlers';
import authorization from 'middlewares/auth';
import authenticationRoute from 'routes/authentication';

const app = express();

// makes the data available as json in req.body
app.use(express.json());

// middlewares
app.use(errorLogger);
app.use(authorization);

// Routes
app.use(authenticationRoute);
app.use(usersRoute);

app.listen(environment.port, () => {
    console.log(`Server running on port ${environment.port}`);
});