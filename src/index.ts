import express from 'express';
import dotenv from "dotenv";
import environment from "constants/environment";
import usersRoute from "routes/users";
dotenv.config();

const app = express();

// makes the data available as json in req.body
app.use(express.json());

app.use(usersRoute);

app.listen(environment.port, () => {
    console.log(`Server running on port ${environment.port}`);
});