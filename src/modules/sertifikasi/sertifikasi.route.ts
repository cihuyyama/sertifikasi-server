import { FastifyInstance } from "fastify";
import { createSertifikasiHandler, deleteSertifikasiHandler, getAllSertifikasiHandler, getSertifikasiByIdHandler, updateSertifikasiHandler } from "./sertifikasi.controller";

async function sertifikasiRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["Sertifikasi"],
                body: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        code: { type: "string" },
                    },
                    required: ["name", "code"],
                },
            },
        },
        createSertifikasiHandler
    );

    server.get(
        "/",
        {
            schema: {
                tags: ["Sertifikasi"],
                querystring: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        code: { type: "string" },
                    },
                },
            },
        },
        getAllSertifikasiHandler
    );

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Sertifikasi"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                    required: ["id"],
                },
            },
        },
        getSertifikasiByIdHandler
    );

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Sertifikasi"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                    required: ["id"],
                },
                body: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        code: { type: "string" },
                    },
                    required: ["name", "code"],
                },
            },
        },
        updateSertifikasiHandler
    );

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Sertifikasi"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                    required: ["id"],
                },
            },
        },
        deleteSertifikasiHandler
    );
}

export default sertifikasiRoutes;