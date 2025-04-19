import { db } from "../../config/prisma";
import { FileEntries } from "../../utils/types";
import { CreateNotulensiInput } from "./notulensi.schema";

class NotulensiRepository {
    static async Insert(data: CreateNotulensiInput, files: FileEntries[]) {
        const notulensi = await db.notulensi.create({
            data: {
                programId: data.programId.value,
                name: data.name.value,
                description: data.description?.value,
                tanggal: new Date(data.tanggal.value),
                File: {
                    createMany: {
                        data: files
                    }
                }
            }
        })

        return notulensi;
    }

    static async InsertDocument(id: string, files: FileEntries[]) {
        const notulensi = await db.notulensi.update({
            where: {
                id,
            },
            data: {
                File: {
                    createMany: {
                        data: files
                    }
                }
            }
        })

        return notulensi;
    }

    static async FindAll(name?: string) {
        const notulensi = await db.notulensi.findMany({
            where: {
                name: name
            },
            include: {
                File: true,
            }
        })

        return notulensi;
    }

    static async FindById(id: string) {
        const notulensi = await db.notulensi.findUnique({
            where: {
                id,
            },
            include: {
                File: true,
            }
        })

        return notulensi;
    }

    static async FindNotulensiDokumen(id: string) {
        const doc = await db.file.findUnique({
            where: {
                id
            }
        })

        return doc
    }

    static async Update(id: string, data: CreateNotulensiInput) {
        const notulensi = await db.notulensi.update({
            where: {
                id,
            },
            data: {
                programId: data.programId.value,
                name: data.name.value,
                description: data.description?.value,
                tanggal: new Date(data.tanggal.value),
            },
        })

        return notulensi;
    }

    static async Delete(id: string) {
        const notulensi = await db.notulensi.delete({
            where: {
                id,
            },
        })

        return notulensi;
    }

    static async DeleteFile(id: string) {
        const file = await db.file.delete({
            where: {
                id,
            },
        })

        return file;
    }
}

export default NotulensiRepository;