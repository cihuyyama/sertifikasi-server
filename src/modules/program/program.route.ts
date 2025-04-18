import { FastifyInstance } from "fastify";
import { createProgramHandler, getAllProgramsHandler } from "./program.controller";
import { $ref } from "./program.schema";

async function programRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["Program"],
                body: $ref("createProgramSchema"),
            },
        },
        createProgramHandler
    )

    server.get(
        "/",
        {
            schema: {
                tags: ["Program"],
                querystring: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                    },
                },
            },
        },
        getAllProgramsHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Program"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        getAllProgramsHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Program"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
                body: $ref("createProgramSchema"),
            },
        },
        createProgramHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Program"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        getAllProgramsHandler
    )
}

export default programRoutes;