import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';

import environment from "constants/environment";
import usersRoute from "routes/users";
import { errorLogger } from 'middlewares/error/handlers';
import authorization from 'middlewares/auth';
import authenticationRoute from 'routes/authentication';
import { socketConnectionHandler } from 'controllers/socket';

const app = express();

// makes the data available as json in req.body
app.use(express.json());
app.use(cors({ origin: "*" }));

// middlewares
app.use(errorLogger);
app.use(authorization);

// Routes
app.use(authenticationRoute);
app.use(usersRoute);

app.get('/', (_, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

// socket.io setup
const io = new Server(server);
const socketConnection = io.on('connection', socketConnectionHandler);
app.set('socketConnection', socketConnection);

server.listen(environment.port, () => {
    console.log(`Running on http://localhost:${environment.port}`);
});
