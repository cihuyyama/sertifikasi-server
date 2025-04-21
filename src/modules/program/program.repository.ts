import { db } from "../../config/prisma";
import { CreateProgramInput } from "./program.schema";

class ProgramRepository {
    static async Insert(data: CreateProgramInput) {
        const program = await db.program.create({
            data: {
                name: data.name,
                description: data.description,
                status: data.status,
                startDate: data.dateRange.from,
                endDate: data.dateRange.to,
            },
        })

        return program;
    }

    static async FindAll(name?: string) {
        const programs = await db.program.findMany({
            where: {
                name: name
            }
        })

        return programs;
    }

    static async FindById(id: string) {
        const program = await db.program.findUnique({
            where: {
                id,
            },
            include: {
                Event: true,
                Notulensi: {
                    include: {
                        File: true,
                    }
                },
            },
        })

        return program;
    }

    static async Update(id: string, data: CreateProgramInput) {
        const program = await db.program.update({
            where: {
                id,
            },
            data: {
                name: data.name,
                description: data.description,
                status: data.status,
                startDate: data.dateRange.from,
                endDate: data.dateRange.to,
            },
        })

        return program;
    }

    static async Delete(id: string) {
        const program = await db.program.delete({
            where: {
                id,
            },
        })

        return program;
    }
}

export default ProgramRepository;