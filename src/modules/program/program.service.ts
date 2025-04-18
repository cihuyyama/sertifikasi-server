import ProgramRepository from "./program.repository";
import { CreateProgramInput } from "./program.schema";

class ProgramService {
    static async createProgram(data: CreateProgramInput) {
        const program = await ProgramRepository.Insert(data);
        return program;
    }

    static async getAllPrograms(name?: string) {
        const programs = await ProgramRepository.FindAll(name);
        return programs;
    }

    static async getProgramById(id: string) {
        const program = await ProgramRepository.FindById(id);
        return program;
    }

    static async updateProgram(id: string, data: CreateProgramInput) {
        const program = await ProgramRepository.Update(id, data);
        return program;
    }

    static async deleteProgram(id: string) {
        const program = await ProgramRepository.Delete(id);
        return program;
    }
}

export default ProgramService;