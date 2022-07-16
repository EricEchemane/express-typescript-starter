import prisma from "prisma/client";

export interface UserSchema {
    id?: string;
    username: string;
    password: string;
    email: string;
}

export default class Users {
    static selectAll = async () => {
        const users: UserSchema[] = await prisma.user.findMany();
        return users;
    };

    static create = async (newUser: UserSchema) => {
        const upsertedUser = await prisma.user.upsert({
            where: { email: newUser.email },
            update: {},
            create: {
                email: newUser.email,
                password: newUser.password,
                username: newUser.username,
            }
        });
        return upsertedUser;
    };
}