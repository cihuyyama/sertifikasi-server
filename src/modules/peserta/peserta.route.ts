import { FastifyInstance } from "fastify";
import PesertaController from "./peserta.controller";
import { $ref } from "./peserta.schema";

async function pesertaRoutes(app: FastifyInstance) {
    app.post(
        "/",
        {
            schema: {
                tags: ["Peserta"],
                body: $ref("createPesertaSchema"),
            },
        },
        PesertaController.createPesertaHandler
    );

    app.get(
        "/",
        {
            schema: {
                tags: ["Peserta"],
                querystring: {
                    type: "object",
                    properties: {
                        search: { type: "string" },
                        sertifikasi: { type: "string" },
                        status: { type: "string" },
                        eventId: { type: "string" },
                    },
                },
            },
        },
        PesertaController.getAllPesertaHandler
    );

    app.get(
        "/:id",
        {
            schema: {
                tags: ["Peserta"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        PesertaController.getPesertaByIdHandler
    );

    app.get(
        "/token",
        {
            schema: {
                tags: ["Peserta"],
            },
            preHandler: [app.authenticate],
        },
        PesertaController.getPesertaByTokenHandler
    );

    app.put(
        "/:id",
        {
            schema: {
                tags: ["Peserta"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
                body: $ref("createPesertaSchema"),
            },
        },
        PesertaController.updatePesertaHandler
    );

    app.delete(
        "/:id",
        {
            schema: {
                tags: ["Peserta"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        PesertaController.deletePesertaHandler
    );
}

export default pesertaRoutes;