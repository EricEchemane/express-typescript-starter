import prisma from "prisma/client";

export interface UserSchema {
    id?: string;
    username: string;
    password: string;
    email: string;
}

export default class Users {
    static findAll = async () => {
        const users = await prisma.user.findMany({
            select: { email: true, username: true, id: true }
        });
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

    static findUnique = async (filter: { email: string; }) => {
        const user = await prisma.user.findUnique({
            where: filter,
            select: {
                username: true,
                email: true,
                id: true
            }
        });
        return user;
    };

    static deleteOne = async (filter: { id: string; }) => {
        try {
            const deleted = await prisma.user.delete({
                where: filter
            });
            return deleted;
        } catch (error) {
            return null;
        }
    };
}