import JWT from "constants/jwt";
import type { NextFunction, Request, Response } from "express";

export interface NewRequest extends Request {
    user: any;
}

const ignoredRoutes = new Map([
    ['/login', true],
    ['/login/', true],
    ['/', true],
]);

export default function authorization(req: NewRequest, res: Response, next: NextFunction) {

    // ignores the current route if the route is in the ignoredRoutes
    if (ignoredRoutes.has(req.path)) {
        next();
        return;
    }

    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).end();
    }
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
        return res.status(401).end();
    }
    const user = JWT.verify(token);
    req.user = user;
    next();
}