import { db } from "../../config/prisma";
import { CreateEmployeeInput } from "./employee.schema";

class EmployeeRepository {
    static async Insert(data: CreateEmployeeInput) {
        const { sertifikasiId, ...employeeData } = data;

        const employee = await db.employee.create({
            data: {
                ...employeeData,
                ...(sertifikasiId ? {
                    Sertifikasi: {
                        connect: {
                            id: sertifikasiId,
                        }
                    }
                } : {}),
            },
        });

        return employee;
    }

    static async InsertMany(data: CreateEmployeeInput[]) {

        const employee = await db.$transaction(
            data.map(item => {
                const { sertifikasiId, ...employeeData } = item;

                return db.employee.create({
                    data: {
                        ...employeeData,
                        ...(sertifikasiId ? {
                            Sertifikasi: {
                                connect: {
                                    id: sertifikasiId,
                                }
                            }
                        } : {}),
                    }
                });
            })
        );

        return employee;
    }

    static async Upsert(id: string, data: CreateEmployeeInput) {
        const employee = await db.employee.upsert({
            where: {
                id,
            },
            update: {
                ...data,
                ...(data.sertifikasiId ? {
                    Sertifikasi: {
                        connect: {
                            id: data.sertifikasiId,
                        }
                    }
                } : {}),
            },
            create: {
                ...data,
                ...(data.sertifikasiId ? {
                    Sertifikasi: {
                        connect: {
                            id: data.sertifikasiId,
                        }
                    }
                } : {}),
            },
        });

        return employee;
    }

    static async FindById(id: string) {
        const employee = await db.employee.findUnique({
            where: {
                id,
            },
        });

        return employee;
    }

    static async FindAll(
        search?: string,
        sertifikasi?: string,
        status?: string,
        role?: string,
    ) {
       const whereClause: any = {};

        if (sertifikasi) {
            whereClause.sertifikasiTerdaftar = sertifikasi;
        }

        if (status) {
            whereClause.status = status;
        }

        if (role) {
            whereClause.role = role;
        }

        if (search) {
            whereClause.OR = [
                { name: { contains: search } },
                { email: { contains: search } },
                { NIP: { contains: search } },
                { phone: { contains: search } },
                { NPWP: { contains: search } },
                { namaBank: { contains: search } },
                { noRek: { contains: search } },
            ];
        }

        const employee = await db.employee.findMany({
            where: whereClause,
        });

        return employee;
    }

    static async Update(id: string, data: CreateEmployeeInput) {
        const employee = await db.employee.update({
            where: {
                id,
            },
            data: {
                ...data,
                ...(data.sertifikasiId ? {
                    Sertifikasi: {
                        connect: {
                            id: data.sertifikasiId,
                        }
                    }
                } : {}),
            },
        });

        return employee;
    }

    static async Delete(id: string) {
        const employee = await db.employee.delete({
            where: {
                id,
            },
        });

        return employee;
    }
}

export default EmployeeRepository;