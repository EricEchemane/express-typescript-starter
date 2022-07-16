import Users from "db/users";
import type { Request, Response } from "express";

export async function getUsers(req: Request, res: Response) {
    const users = await Users.findAll();
    res.status(200).json({ users });
}

export async function getUser(req: Request, res: Response) {
    const { email } = req.params;
    const user = await Users.findUnique({ email });
    if (user) {
        res.status(200).json({ user });
    } else {
        res.status(404).end();
    }
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

export async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await Users.deleteOne({ id });
    if (deleted) res.json({ deleted });
    else res.status(404).end();
}