import { db } from "../../config/prisma";
import { CreateVendor } from "./vendor.schema";


class VendorRepository {

    static async Insert(data: CreateVendor) {
        const vendor = await db.vendor.create({
            data
        })

        return vendor;
    }

    static async FindAll(name?: string, email?: string, phone?: string) {
        const vendors = await db.vendor.findMany({
            where: {
                name: {
                    contains: name,
                },
                email: {
                    contains: email,
                },
                phone: {
                    contains: phone,
                },
            }
        })

        return vendors;
    }

    static async FindById(id: string) {
        const vendor = await db.vendor.findUnique({
            where: {
                id,
            },
        })

        return vendor;
    }

    static async Update(id: string, data: CreateVendor) {
        const vendor = await db.vendor.update({
            where: {
                id,
            },
            data
        })

        return vendor;
    }

    static async Delete(id: string) {
        const vendor = await db.vendor.delete({
            where: {
                id,
            },
        })

        return vendor;
    }

}

export default VendorRepository;