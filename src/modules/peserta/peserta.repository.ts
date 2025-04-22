import { db } from "../../config/prisma";
import { CreatePesertaInput } from "./peserta.schema";

class PesertaRepository {
    static async Insert(data: CreatePesertaInput) {
        const peserta = await db.peserta.create({
            data: {
                ...data,
                ...(data.eventId ? {
                    Event: {
                        connect: {
                            id: data.eventId,
                        }
                    }
                } : {}),
            },
        })

        return peserta;
    }

    static async Upsert(id: string, data: CreatePesertaInput) {
        const peserta = await db.peserta.upsert({
            where: {
                id,
            },
            update: {
                ...data,
                ...(data.eventId ? {
                    Event: {
                        connect: {
                            id: data.eventId,
                        }
                    }
                } : {}),
            },
            create: {
                ...data,
                ...(data.eventId ? {
                    Event: {
                        connect: {
                            id: data.eventId,
                        }
                    }
                } : {}),
            },
        })

        return peserta;
    }

    static async FindAll(
        search?: string,
        sertifikasi?: string,
        status?: string,
        eventId?: string,
    ) {
        const peserta = await db.peserta.findMany({
            where: {
                sertifikasiTerdaftar: sertifikasi,
                status: status,
                Event: {
                    some: {
                        id: eventId,
                    }
                },
                OR: [
                    {
                        name: {
                            contains: search,
                        },
                    },
                    {
                        nim: {
                            contains: search,
                        },
                    },
                    {
                        email: {
                            contains: search,
                        },
                    },
                ],
            },
            orderBy: {
                createdAt: "desc",
            },
            include: {
                Event: true,
                sertifikat: true,
            },
        })

        return peserta;
    }

    static async FindByEmail(email: string) {
        const peserta = await db.peserta.findUnique({
            where: {
                email: email,
            },
        })

        return peserta;
    }

    static async FindById(id: string) {
        const peserta = await db.peserta.findUnique({
            where: {
                id,
            },
            include: {
                Event: true,
                sertifikat: true,
            }
        })

        return peserta;
    }

    static async Update(id: string, data: CreatePesertaInput) {
        const peserta = await db.peserta.update({
            where: {
                id,
            },
            data
        })

        return peserta;
    }

    static async Delete(id: string) {
        const peserta = await db.peserta.delete({
            where: {
                id,
            },
        })

        return peserta;
    }
}

export default PesertaRepository;