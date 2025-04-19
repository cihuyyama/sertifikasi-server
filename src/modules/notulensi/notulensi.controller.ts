import { FastifyReply, FastifyRequest } from "fastify"
import { CreateNotulensiDocInput, CreateNotulensiInput } from "./notulensi.schema"
import NotulensiService from "./notulensi.service"
import { errorFilter } from "../../middlewares/error-handling"
import { createReadStream } from "fs"

export async function createNotulensiHandler(
    request: FastifyRequest<{
        Body: CreateNotulensiInput
    }>,
    reply: FastifyReply
) {
    try {
        const notulensi = await NotulensiService.createNotulensi(request.body, request.body.files)

        reply.send({
            data: notulensi,
            message: "Notulensi created successfully",
            status: 201,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function uploadNotulensiDocHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
        Body: CreateNotulensiDocInput
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const notulensi = await NotulensiService.createNotulensiDoc(id, request.body.files)

        reply.send({
            data: notulensi,
            message: "Notulensi Document uploaded successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function streamNotulensiDocByIDHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params

        const { file, filePath } = await NotulensiService.streamNotulensiDocByID(id)

        reply
            .header("Content-Type", file.mimetype)
            .header("Content-Disposition", `inline; filename="${file.originalName}"`)

        return reply.send(createReadStream(filePath));
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllNotulensiHandler(
    request: FastifyRequest<{
        Querystring: {
            name?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { name } = request.query

        const notulensi = await NotulensiService.getAllNotulensi(name)

        reply.send({
            data: notulensi,
            message: "Notulensi fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getNotulensiByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const notulensi = await NotulensiService.getNotulensiById(id)

        reply.send({
            data: notulensi,
            message: "Notulensi fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateNotulensiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
        Body: CreateNotulensiInput
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const notulensi = await NotulensiService.updateNotulensi(id, request.body)

        reply.send({
            data: notulensi,
            message: "Notulensi updated successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteNotulensiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        await NotulensiService.deleteNotulensi(id)

        reply.send({
            message: "Notulensi deleted successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteNotulensiDocHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        await NotulensiService.deleteNotulensiDoc(id)

        reply.send({
            message: "Notulensi Document deleted successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}