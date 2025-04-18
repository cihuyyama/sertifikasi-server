import { db } from "../../config/prisma";
import { CreateEvent } from "./event.schema";

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

    static async FindAll(name?: string) {
        const events = await db.event.findMany({
            where: {
                name: name
            }
        })

        return events;
    }

    static async FindById(id: string) {
        const event = await db.event.findUnique({
            where: {
                id,
            },
        })

        return event;
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