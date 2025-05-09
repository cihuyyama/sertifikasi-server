import VendorRepository from "./vendor.repository";
import { CreateVendor } from "./vendor.schema";

class VendorService {
    static async createVendor(data: CreateVendor) {
        const vendor = await VendorRepository.Insert(data)
        return vendor;
    }

    static async getAllVendors(name?: string, email?: string, phone?: string) {
        const vendors = await VendorRepository.FindAll(name, email, phone)
        return vendors;
    }

    static async getVendorById(id: string) {
        const vendor = await VendorRepository.FindById(id)
        if (!vendor) {
            throw new Error("Vendor not found")
        }

        return vendor;
    }

    static async updateVendor(id: string, data: CreateVendor) {
        const vendor = await VendorRepository.Update(id, data)
        if (!vendor) {
            throw new Error("Vendor not found")
        }

        return vendor;
    }

    static async deleteVendor(id: string) {
        const vendor = await VendorRepository.Delete(id)
        if (!vendor) {
            throw new Error("Vendor not found")
        }

        return vendor;
    }
}

export default VendorService;