import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProgramInput } from "./program.schema";
import ProgramService from "./program.service";
import { errorFilter } from "../../middlewares/error-handling";

export async function createProgramHandler(
    request: FastifyRequest<{
        Body: CreateProgramInput
    }>,
    reply: FastifyReply
) {
    try {
        const program = await ProgramService.createProgram(request.body)

        reply.send({
            data: program,
            message: "Program created successfully",
            status: 201,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllProgramsHandler(
    request: FastifyRequest<{
        Querystring: {
            name?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { name } = request.query

        const programs = await ProgramService.getAllPrograms(name)

        reply.send({
            data: programs,
            message: "Programs fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getProgramByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const program = await ProgramService.getProgramById(id)

        reply.send({
            data: program,
            message: "Program fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateProgramHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
        Body: CreateProgramInput
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const program = await ProgramService.updateProgram(id, request.body)

        reply.send({
            data: program,
            message: "Program updated successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteProgramHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const program = await ProgramService.deleteProgram(id)

        reply.send({
            data: program,
            message: "Program deleted successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}