import { db } from "../../config/prisma";
import { CreateUserInput } from "./user.schema";

class UserRepository {
    static async Insert(username: string, password: string, salt: string) {
        const user = await db.user.create({
            data: {
                username,
                password,
                salt,
            },

            select: {
                id: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return user;
    }

    static async FindAll(username?: string) {
        const users = await db.user.findMany({
            where: {
                username: username
            },
            select: {
                id: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return users;
    }

    static async FindById(id: string) {
        const user = await db.user.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return user;
    }
    static async FindByIdPrivate(id: string) {
        const user = await db.user.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                username: true,
                password: true,
                salt: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return user;
    }

    static async FindByUsername(username: string) {
        const user = await db.user.findUnique({
            where: {
                username,
            },
            select: {
                id: true,
                username: true,
                password: true,
                salt: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return user;
    }

    static async Update(id: string, data: CreateUserInput) {
        const user = await db.user.update({
            where: {
                id,
            },
            data: {
                username: data.username,
            },
            select: {
                id: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return user;
    }

    static async UpdatePassword(id: string, password: string, salt: string) {
        return db.user.update({
            where: {
                id
            },
            data: {
                password,
                salt
            }
        })
    }

    static async Delete(id: string) {
        const user = await db.user.delete({
            where: {
                id,
            },
            select: {
                id: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return user;
    }
}

export default UserRepository;