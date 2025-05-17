import { db } from "../../config/prisma";
import { CreateConnectPeserta, CreateEvent } from "./event.schema";

class EventRepository {
    static async Insert(data: CreateEvent) {
        const event = await db.event.create({
            data: {
                programId: data.programId,
                jenisEventId: data.jenisEventId,
                name: data.name,
                description: data.description,
                startDate: data.dateRange.from,
                endDate: data.dateRange.to,
                harga: data.harga,
                tempat: data.tempat
            }
        })

        return event;
    }

    static async ConnectManyPeserta(data: CreateConnectPeserta) {
        const { id, pesertaIds } = data;
        
        const currentEvent = await db.event.findUnique({
            where: { id },
            include: { peserta: true },
        });

        if (!currentEvent) {
            throw new Error("Event not found");
        }

        const currentPesertaIds = currentEvent.peserta.map((p: { id: string }) => p.id);
        const newPesertaIds = pesertaIds.filter(id => !currentPesertaIds.includes(id));

        if (newPesertaIds.length === 0) {
            return currentEvent;
        }

        const event = await db.event.update({
            where: { id },
            data: {
                peserta: {
                    connect: newPesertaIds.map((pesertaId) => ({
                        id: pesertaId,
                    })),
                },
            },
        });

        return event;
    }

    static async DisconnectPeserta(id: string, pesertaId: string) {
        const event = await db.event.update({
            where: { id },
            data: {
                peserta: {
                    disconnect: {
                        id: pesertaId,
                    },
                },
            },
        })

        return event;
    }

    static async FindAll(name?: string) {
        const events = await db.event.findMany({
            where: {
                name: name
            },
            include: {
                peserta: true,
            },
        })

        return events;
    }

    static async FindById(id: string) {
        const event = await db.event.findUnique({
            where: {
                id,
            },
            include: {
                peserta: true,
            }
        })

        return event;
    }

    static async FindByProgramId(programId: string) {
        const event = await db.event.findMany({
            where: {
                programId,
            },
        })

        return event;
    }

    static async FindUnconnectedPeserta(eventId: string) {
        const eventWithPeserta = await db.event.findUnique({
            where: { id: eventId },
            select: {
                peserta: {
                    select: { id: true }
                }
            }
        });

        if (!eventWithPeserta) {
            throw new Error("Event not found");
        }

        const connectedPesertaIds = eventWithPeserta.peserta.map((p: { id: string }) => p.id);

        const unconnectedPeserta = await db.peserta.findMany({
            where: {
                id: {
                    notIn: connectedPesertaIds,
                },
            },
        });

        return unconnectedPeserta;
    }


    static async Update(id: string, data: CreateEvent) {
        const event = await db.event.update({
            where: {
                id,
            },
            data: {
                programId: data.programId,
                jenisEventId: data.jenisEventId,
                name: data.name,
                description: data.description,
                startDate: data.dateRange.from,
                endDate: data.dateRange.to,
                harga: data.harga,
                tempat: data.tempat
            },
        })

        return event;
    }

    static async Delete(id: string) {
        const event = await db.event.delete({
            where: {
                id,
            },
        })

        return event;
    }
}

export default EventRepository;