import { FastifyReply, FastifyRequest } from "fastify";
import { CreateSertifikasiInput } from "./sertifikasi.scheme";
import { errorFilter } from "../../middlewares/error-handling";
import SertifikasiService from "./sertifikasi.service";

export async function createSertifikasiHandler(
    request: FastifyRequest<{
        Body: CreateSertifikasiInput
    }>,
    reply: FastifyReply
) {
    try {
        const sertifikasi = await SertifikasiService.createSertifikasi(request.body)

        reply.send({
            data: sertifikasi,
            message: "Sertifikasi created successfully",
            status: 201,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllSertifikasiHandler(
    request: FastifyRequest<{
        Querystring: {
            name?: string,
            code?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { name, code } = request.query

        const sertifikasi = await SertifikasiService.getAllSertifikasi(name, code)

        reply.send({
            data: sertifikasi,
            message: "Sertifikasi fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getSertifikasiByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const sertifikasi = await SertifikasiService.getSertifikasiById(id)

        reply.send({
            data: sertifikasi,
            message: "Sertifikasi fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateSertifikasiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
        Body: CreateSertifikasiInput
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params
        const sertifikasi = await SertifikasiService.updateSertifikasi(id, request.body)

        reply.send({
            data: sertifikasi,
            message: "Sertifikasi updated successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteSertifikasiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        await SertifikasiService.deleteSertifikasi(id)

        reply.send({
            message: "Sertifikasi deleted successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}