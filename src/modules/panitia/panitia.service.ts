import PanitiaRepository from "./panitia.repository";
import { CreatePanitiaInput } from "./panitia.schema";

class PanitiaService {
    static async createPanitia(data: CreatePanitiaInput) {
        const panitia = await PanitiaRepository.Insert(data);

        return panitia;
    } 

    static async getAllPanitia(
        eventId?: string,
        ) {
        const panitia = await PanitiaRepository.FindAll(eventId);

        return panitia;
    }

    static async getPanitiaById(id: string) {
        const panitia = await PanitiaRepository.FindById(id);

        return panitia;
    }

    static async updatePanitia(id: string, data: CreatePanitiaInput) {
        const panitia = await PanitiaRepository.Update(id, data);

        return panitia;
    }

    static async deletePanitia(id: string) {
        const panitia = await PanitiaRepository.Delete(id);

        return panitia;
    }
}

export default PanitiaService;