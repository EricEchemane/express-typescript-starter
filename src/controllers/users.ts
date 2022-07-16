import Users from "db/users";
import type { Request, Response } from "express";

export async function getUsers(req: Request, res: Response) {
    const users = await Users.selectAll();
    res.status(200).json({ users });
}

export async function createUser(req: Request, res: Response) {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        res.status(400).end();
        return;
    }
    const newUSer = await Users.create(req.body);
    res.status(200).json({ newUSer });
}