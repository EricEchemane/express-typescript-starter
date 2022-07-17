import Hasher from "constants/hasher";
import JWT from "constants/jwt";
import Users, { Credential } from "db/users";
import type { Response, Request } from "express";

export async function login(req: Request, res: Response) {
    const { password, email }: Credential = req.body;
    if (!password || !email) {
        return res.status(400).end();
    }

    const userExist = await Users.findUnique({ email }, false);
    if (userExist && Hasher.verify(password, userExist.password)) {
        const token = JWT.sign(email);
        res.json({ token });
    }
    else return res.status(404).end();
}