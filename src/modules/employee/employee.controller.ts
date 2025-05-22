import { FastifyReply, FastifyRequest } from "fastify";
import { CreateEmployeeInput } from "./employee.schema";
import EmployeeService from "./employee.service";
import { errorFilter } from "../../middlewares/error-handling";

export async function createEmployeeHandler(
    request: FastifyRequest<{
        Body: CreateEmployeeInput
    }>,
    reply: FastifyReply
) {
    try {
        const employee = await EmployeeService.createEmployee(request.body)

        reply.send({
            data: employee,
            message: "Employee created successfully",
            status: 201,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function createManyEmployeeHandler(
    request: FastifyRequest<{
        Body: CreateEmployeeInput[]
    }>,
    reply: FastifyReply
) {
    try {
        const employee = await EmployeeService.createManyEmployee(request.body)

        reply.send({
            data: employee,
            message: "Employee created successfully",
            status: 201,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function upsertEmployeeHandler(
    request: FastifyRequest<{
        Params: { id: string }
        Body: CreateEmployeeInput
    }>,
    reply: FastifyReply
) {
    try {
        const employee = await EmployeeService.upsertEmployee(request.params.id, request.body)

        reply.send({
            data: employee,
            message: "Employee updated successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllEmployeeHandler(
    request: FastifyRequest<{
        Querystring: {
            search?: string
            sertifikasi?: string
            status?: string
            role?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const employee = await EmployeeService.getAllEmployee(
            request.query.search,
            request.query.sertifikasi,
            request.query.status,
            request.query.role
        )

        reply.send({
            data: employee,
            message: "Employee fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getEmployeeByIdHandler(
    request: FastifyRequest<{
        Params: { id: string }
    }>,
    reply: FastifyReply
) {
    try {
        const employee = await EmployeeService.getEmployeeById(request.params.id)

        reply.send({
            data: employee,
            message: "Employee fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateEmployeeHandler(
    request: FastifyRequest<{
        Params: { id: string }
        Body: CreateEmployeeInput
    }>,
    reply: FastifyReply
) {
    try {
        const employee = await EmployeeService.updateEmployee(request.params.id, request.body)

        reply.send({
            data: employee,
            message: "Employee updated successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteEmployeeHandler(
    request: FastifyRequest<{
        Params: { id: string }
    }>,
    reply: FastifyReply
) {
    try {
        const employee = await EmployeeService.deleteEmployee(request.params.id)

        reply.send({
            data: employee,
            message: "Employee deleted successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}