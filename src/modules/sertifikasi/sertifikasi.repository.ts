import { db } from "../../config/prisma";
import { CreateSertifikasiInput } from "./sertifikasi.scheme";

class SertifikasiRepository {
    static async Insert(data: CreateSertifikasiInput) {
        const sertifikasi = await db.sertifikasi.create({
            data: {
                name: data.name,
                code: data.code,
            },
        });

        return sertifikasi;
    }

    static async FindById(id: string) {
        const sertifikasi = await db.sertifikasi.findUnique({
            where: { id },
            include: {
                Employee: true,
            },
        });

        return sertifikasi;
    }

    static async FindAll(name?: string, code?: string) {
        const sertifikasi = await db.sertifikasi.findMany({
            where: {
                name: name ? { contains: name } : undefined,
                code: code ? { contains: code } : undefined,
            },
            include: {
                Employee: true,
            }
        });

        return sertifikasi;
    }

    static async Update(id: string, data: CreateSertifikasiInput) {
        const sertifikasi = await db.sertifikasi.update({
            where: { id },
            data: {
                name: data.name,
                code: data.code,
            },
        });

        return sertifikasi;
    }

    static async Delete(id: string) {
        await db.sertifikasi.delete({
            where: { id },
        });
    }
}

export default SertifikasiRepository;