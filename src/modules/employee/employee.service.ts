import EmployeeRepository from "./employee.repository";
import { CreateEmployeeInput } from "./employee.schema";

class EmployeeService {
    static async createEmployee(data: CreateEmployeeInput) {
        const employee = await EmployeeRepository.Insert(data);

        return employee;
    }

    static async createManyEmployee(data: CreateEmployeeInput[]) {
        const employee = await EmployeeRepository.InsertMany(data);

        return employee;
    }

    static async upsertEmployee(id: string, data: CreateEmployeeInput) {
        const employee = await EmployeeRepository.Upsert(id, data);

        return employee;
    }

    static async getAllEmployee(
        search?: string,
        sertifikasi?: string,
        status?: string,
        role?: string,
    ) {
        const employee = await EmployeeRepository.FindAll(
            search,
            sertifikasi,
            status,
            role,
        );

        return employee;
    }

    static async getEmployeeById(id: string) {
        const employee = await EmployeeRepository.FindById(id);

        return employee;
    }

    static async updateEmployee(id: string, data: CreateEmployeeInput) {
        const employee = await EmployeeRepository.Update(id, data);

        return employee;
    }

    static async deleteEmployee(id: string) {
        const employee = await EmployeeRepository.Delete(id);

        return employee;
    }
}

export default EmployeeService;