import { db } from "../../config/prisma";
import { CreatePanitiaInput } from "./panitia.schema";

class PanitiaRepository {
    static async Insert(data: CreatePanitiaInput) {
        const panitia = await db.panitia.create({
            data: {
                eventId: data.eventId,
                employeeId: data.picId,
                staff: data.staffId?.length
                    ? {
                        connect: data.staffId
                            .filter((id): id is string => !!id) // pastikan id valid
                            .map((id) => ({ id })),
                    }
                    : undefined,
            },
        });

        return panitia;
    }

    static async FindAll(
        eventId?: string,
    ) {
        const panitia = await db.panitia.findMany({
            where: {
                eventId
            },
            include: {
                PIC: true,
                staff: true,
            },
        });

        return panitia;
    }

    static async FindById(id: string) {
        const panitia = await db.panitia.findUnique({
            where: { id },
            include: {
                PIC: true,
                staff: true,
            },
        });

        return panitia;
    }

    static async Update(id: string, data: CreatePanitiaInput) {
        const panitia = await db.panitia.update({
            where: { id },
            data: {
                eventId: data.eventId,
                employeeId: data.picId,
                staff: data.staffId?.length
                    ? {
                        set: [],
                        connect: data.staffId
                            .filter((id): id is string => !!id) // pastikan id valid
                            .map((id) => ({ id })),
                    }
                    : undefined,
            },
            include: {
                PIC: true,
                staff: true,
            },
        });

        return panitia;
    }

    static async Delete(id: string) {
        const panitia = await db.panitia.delete({
            where: { id },
        });

        return panitia;
    }

}

export default PanitiaRepository;