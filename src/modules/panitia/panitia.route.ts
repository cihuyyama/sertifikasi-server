import { FastifyInstance } from "fastify";
import { $ref } from "./panitia.schema";
import { createPanitiaHandler, deletePanitiaHandler, getAllPanitiaHandler, getPanitiaByIdHandler, updatePanitiaHandler } from "./panitia.controller";

async function panitiaRoutes(app: FastifyInstance) {
    app.post(
        "/",
        {
            schema: {
                tags: ["Panitia"],
                body: $ref("createPanitiaSchema"),
            },
        },
        createPanitiaHandler
    );

    app.get(
        "/",
        {
            schema: {
                tags: ["Panitia"],
                querystring: {
                    type: "object",
                    properties: {
                        eventId: { type: "string" },
                    },
                },
            },
        },
        getAllPanitiaHandler
    );

    app.get(
        "/:id",
        {
            schema: {
                tags: ["Panitia"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        getPanitiaByIdHandler
    );

    app.put(
        "/:id",
        {
            schema: {
                tags: ["Panitia"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
                body: $ref("createPanitiaSchema"),
            },
        },
        updatePanitiaHandler
    );

    app.delete(
        "/:id",
        {
            schema: {
                tags: ["Panitia"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        deletePanitiaHandler
    );
}

export default panitiaRoutes;