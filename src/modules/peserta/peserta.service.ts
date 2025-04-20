import PesertaRepository from "./peserta.repository";
import { CreatePesertaInput } from "./peserta.schema";

class PesertaService {
    static async createPeserta(data: CreatePesertaInput) {
        const peserta = await PesertaRepository.Insert(data);

        return peserta;
    }

    static async upsertPeserta(id: string, data: CreatePesertaInput) {
        const peserta = await PesertaRepository.Upsert(id, data);

        return peserta;
    }

    static async getAllPeserta(
        search?: string,
        sertifikasi?: string,
        status?: string,
        programId?: string,
    ) {
        const peserta = await PesertaRepository.FindAll(
            search,
            sertifikasi,
            status,
            programId,
        );

        return peserta;
    }

    static async getPesertaById(id: string) {
        const peserta = await PesertaRepository.FindById(id);

        return peserta;
    }

    static async updatePeserta(id: string, data: CreatePesertaInput) {
        const peserta = await PesertaRepository.Update(id, data);

        return peserta;
    }

    static async deletePeserta(id: string) {
        const peserta = await PesertaRepository.Delete(id);

        return peserta;
    }
}

export default PesertaService;