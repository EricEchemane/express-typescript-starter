import express from 'express';
import dotenv from "dotenv";
import environment from "constants/environment";
import usersRoute from "routes/users";
import { errorLogger } from 'middlewares/error/handlers';
dotenv.config();

const app = express();

// makes the data available as json in req.body
app.use(express.json());

app.use(errorLogger);

// Routes
app.use(usersRoute);

app.listen(environment.port, () => {
    console.log(`Server running on port ${environment.port}`);
});