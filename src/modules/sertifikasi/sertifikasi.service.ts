import SertifikasiRepository from "./sertifikasi.repository";
import { CreateSertifikasiInput } from "./sertifikasi.scheme";

class SertifikasiService {
    static async createSertifikasi(data: CreateSertifikasiInput) {
        const sertifikasi = await SertifikasiRepository.Insert(data);
        return sertifikasi;
    } 

    static async getAllSertifikasi(name?: string, code?: string) {
        const sertifikasi = await SertifikasiRepository.FindAll(name, code);
        return sertifikasi;
    }

    static async getSertifikasiById(id: string) {
        const sertifikasi = await SertifikasiRepository.FindById(id);
        return sertifikasi;
    }

    static async updateSertifikasi(id: string, data: CreateSertifikasiInput) {
        const sertifikasi = await SertifikasiRepository.Update(id, data);
        return sertifikasi;
    }

    static async deleteSertifikasi(id: string) {
        await SertifikasiRepository.Delete(id);
        return { message: "Sertifikasi deleted successfully" };
    }
}

export default SertifikasiService;