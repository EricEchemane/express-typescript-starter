import express from 'express';
import dotenv from "dotenv";
import environment from 'constants/environment';
dotenv.config();

const app = express();

app.get('/', (_, res) => {
    res.json({ message: 'hello' });
});

app.listen(environment.port, () => {
    console.log(`Server running on port ${environment.port}`);
});