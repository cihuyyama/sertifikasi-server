import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePesertaInput } from "./peserta.schema";
import PesertaService from "./peserta.service";
import { errorFilter } from "../../middlewares/error-handling";
import { Role } from "../../utils/types";

class PesertaController {
    static async createPesertaHandler(
        request: FastifyRequest<{
            Body: CreatePesertaInput
        }>,
        reply: FastifyReply
    ) {
        try {
            if (request.user.role !== Role.PESERTA) {
                reply.status(403).send({
                    message: "Forbidden",
                    status: 403,
                });
                return;
            }

            const peserta = await PesertaService.createPeserta(request.body)

            reply.send({
                data: peserta,
                message: "Peserta created successfully",
                status: 201,
            })
        } catch (error) {
            errorFilter(error, reply)
        }
    }

    static async upsertPesertaHandler(
        request: FastifyRequest<{
            Params: { id: string }
            Body: CreatePesertaInput
        }>,
        reply: FastifyReply
    ) {
        try {
            const peserta = await PesertaService.upsertPeserta(request.params.id, request.body)

            reply.send({
                data: peserta,
                message: "Peserta upserted successfully",
                status: 200,
            })
        } catch (error) {
            errorFilter(error, reply)
        }
    }

    static async getAllPesertaHandler(
        request: FastifyRequest<{
            Querystring: { search?: string; sertifikasi?: string; status?: string; programId?: string }
        }>,
        reply: FastifyReply
    ) {
        try {
            const peserta = await PesertaService.getAllPeserta(
                request.query.search,
                request.query.sertifikasi,
                request.query.status,
                request.query.programId
            )

            reply.send({
                data: peserta,
                message: "Peserta retrieved successfully",
                status: 200,
            })
        } catch (error) {
            errorFilter(error, reply)
        }
    }

    static async getPesertaByIdHandler(
        request: FastifyRequest<{
            Params: { id: string }
        }>,
        reply: FastifyReply
    ) {
        try {
            const peserta = await PesertaService.getPesertaById(request.params.id)

            reply.send({
                data: peserta,
                message: "Peserta retrieved successfully",
                status: 200,
            })
        } catch (error) {
            errorFilter(error, reply)
        }
    }

    static async getPesertaByTokenHandler(
        request: FastifyRequest<{
            Params: {
                token: string
            }
        }>,
        reply: FastifyReply
    ) {
        try {
            const tokenPayload = request.user
            const peserta = await PesertaService.getPesertaById(tokenPayload.id)

            reply.send({
                data: peserta,
                message: "Peserta retrieved successfully",
                status: 200,
            })
        } catch (error) {
            errorFilter(error, reply)
        }
    }

    static async updatePesertaHandler(
        request: FastifyRequest<{
            Params: { id: string }
            Body: CreatePesertaInput
        }>,
        reply: FastifyReply
    ) {
        try {
            const peserta = await PesertaService.updatePeserta(request.params.id, request.body)

            reply.send({
                data: peserta,
                message: "Peserta updated successfully",
                status: 200,
            })
        } catch (error) {
            errorFilter(error, reply)
        }
    }

    static async deletePesertaHandler(
        request: FastifyRequest<{
            Params: { id: string }
        }>,
        reply: FastifyReply
    ) {
        try {
            const peserta = await PesertaService.deletePeserta(request.params.id)

            reply.send({
                data: peserta,
                message: "Peserta deleted successfully",
                status: 200,
            })
        } catch (error) {
            errorFilter(error, reply)
        }
    }
}

export default PesertaController