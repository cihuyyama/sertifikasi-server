import { FastifyReply, FastifyRequest } from "fastify"
import { CreatePanitiaInput } from "./panitia.schema"
import PanitiaService from "./panitia.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createPanitiaHandler(
    request: FastifyRequest<{
        Body: CreatePanitiaInput
    }>,
    reply: FastifyReply
) {
    try {
        const panitia = await PanitiaService.createPanitia(request.body)

        reply.send({
            data: panitia,
            message: "Panitia created successfully",
            status: 201,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllPanitiaHandler(
    request: FastifyRequest<{
        Querystring: {
            eventId?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const panitia = await PanitiaService.getAllPanitia(request.query.eventId)

        reply.send({
            data: panitia,
            message: "Panitia fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getPanitiaByIdHandler(
    request: FastifyRequest<{
        Params: { id: string }
    }>,
    reply: FastifyReply
) {
    try {
        const panitia = await PanitiaService.getPanitiaById(request.params.id)

        reply.send({
            data: panitia,
            message: "Panitia fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updatePanitiaHandler(
    request: FastifyRequest<{
        Params: { id: string }
        Body: CreatePanitiaInput
    }>,
    reply: FastifyReply
) {
    try {
        const panitia = await PanitiaService.updatePanitia(request.params.id, request.body)

        reply.send({
            data: panitia,
            message: "Panitia updated successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deletePanitiaHandler(
    request: FastifyRequest<{
        Params: { id: string }
    }>,
    reply: FastifyReply
) {
    try {
        const panitia = await PanitiaService.deletePanitia(request.params.id)

        reply.send({
            data: panitia,
            message: "Panitia deleted successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}