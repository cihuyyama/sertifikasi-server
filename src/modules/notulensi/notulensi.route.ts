import { FastifyInstance } from "fastify";
import { $ref } from "./notulensi.schema";
import { createNotulensiHandler, deleteNotulensiDocHandler, deleteNotulensiHandler, getAllNotulensiHandler, getNotulensiByIdHandler, streamNotulensiDocByIDHandler, updateNotulensiHandler, uploadNotulensiDocHandler } from "./notulensi.controller";

async function notulensiRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["Notulensi"],
                body: $ref("createNotulensiSchema"),
            }
        },
        createNotulensiHandler
    )

    server.post(
        "/doc/:id",
        {
            schema: {
                tags: ["Notulensi"],
                description: "Upload Notulensi Document",
                summary: "Upload Notulensi Docs by file id",
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        uploadNotulensiDocHandler
    );

    server.get(
        "/",
        {
            schema: {
                tags: ["Notulensi"],
                querystring: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                    },
                },
            },
        },
        getAllNotulensiHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Notulensi"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        getNotulensiByIdHandler
    )

    server.get(
        "/doc/:id",
        {
            schema: {
                tags: ["Notulensi"],
                description: "Download Notulensi Document",
                summary: "Download Notulensi Docs by file id",
            },
        },
        streamNotulensiDocByIDHandler
    );

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Notulensi"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
                body: $ref("createNotulensiSchema"),
            },
        },
        updateNotulensiHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Notulensi"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        deleteNotulensiHandler
    )

    server.delete(
        "/doc/:id",
        {
            schema: {
                tags: ["Notulensi"],
                description: "Delete Notulensi Document",
                summary: "Delete Notulensi Docs by file id",
            },
        },
        deleteNotulensiDocHandler
    );
}

export default notulensiRoutes;