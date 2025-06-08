import { connect } from "http2";
import { db } from "../../config/prisma";
import { CreatePesertaInput } from "./peserta.schema";

class PesertaRepository {
    static async Insert(data: CreatePesertaInput) {
        const { eventId, sertifikasiTerdaftarId, ...pesertaData } = data;

        const peserta = await db.peserta.create({
            data: {
                ...pesertaData,
                ...(eventId ? {
                    Event: {
                        connect: {
                            id: eventId,
                        }
                    }
                } : {}),
                ...(sertifikasiTerdaftarId ? {
                    sertifikasiTerdaftar: {
                        connect: {
                            id: sertifikasiTerdaftarId,
                        }
                    }
                } : {}),
            },
        });

        return peserta;
    }

    static async InsertMany(data: CreatePesertaInput[]) {

        const peserta = await db.$transaction(
            data.map(item => {
                const { eventId, sertifikasiTerdaftarId, ...pesertaData } = item;
                
                return db.peserta.create({
                    data: {
                        ...pesertaData,
                        ...(eventId ? {
                            Event: {
                                connect: {
                                    id: eventId,
                                }
                            }
                        } : {}),
                        ...(sertifikasiTerdaftarId ? {
                            sertifikasiTerdaftar: {
                                connect: {
                                    id: sertifikasiTerdaftarId,
                                }
                            }
                        } : {}),
                    }
                });
            })
        );
        
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
                ...(data.sertifikasiTerdaftarId ? {
                    sertifikasiTerdaftar: {
                        connect: {
                            id: data.sertifikasiTerdaftarId,
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
                ...(data.sertifikasiTerdaftarId ? {
                    sertifikasiTerdaftar: {
                        connect: {
                            id: data.sertifikasiTerdaftarId,
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
        const whereClause: any = {};

        if (sertifikasi) {
            whereClause.sertifikasiTerdaftar = sertifikasi;
        }

        if (status) {
            whereClause.status = status;
        }

        if (eventId) {
            whereClause.Event = {
                some: { id: eventId }
            };
        }

        if (search) {
            whereClause.OR = [
                { name: { contains: search } },
                { nim: { contains: search } },
                { email: { contains: search } }
            ];
        }

        const peserta = await db.peserta.findMany({
            where: whereClause,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                Event: true,
                sertifikat: true,
                sertifikasiTerdaftar: true,
            },
        });

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
                sertifikasiTerdaftar: true,
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