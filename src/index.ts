import type { Response } from "express";
import express from 'express';
import dotenv from "dotenv";
// import prisma from "prisma/client";
import environment from "constants/environment";
dotenv.config();

const app = express();

app.get('/', async (_, res: Response) => {
    // const users = await prisma.user.findMany();
    res.json({ users: "hello" });
});

app.listen(environment.port, () => {
    console.log(`Server running on port ${environment.port}`);
});