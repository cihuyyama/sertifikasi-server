import { FastifyInstance } from "fastify";
import { $ref } from "./event.schema";
import { connectManyPesertaHandler, createEventHandler, deleteEventHandler, disconnectPesertaHandler, getAllEventsHandler, getEventByIdHandler, getUnconnectedPesertaHandler, updateEventHandler } from "./event.controller";

async function eventRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["Event"],
                body: $ref("createEventSchema"),
            },
        },
        createEventHandler
    )

    server.post(
        "/connect-many-peserta",
        {
            schema: {
                tags: ["Event"],
                body: $ref("connectPesertaSchema"),
                summary: "Connect Many Peserta to Event by Event ID",
            },
        },
        connectManyPesertaHandler
    )

    server.delete(
        "/disconnect-peserta",
        {
            schema: {
                tags: ["Event"],
                body: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                        pesertaId: { type: "string" },
                    },
                },
                summary: "Disconnect Peserta from Event by Event ID",
            },
        },
        disconnectPesertaHandler
    )

    server.get(
        "/",
        {
            schema: {
                tags: ["Event"],
                querystring: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                    },
                },
            },
        },
        getAllEventsHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Event"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        getEventByIdHandler
    )

    server.get(
        "/unconnected-peserta/:id",
        {
            schema: {
                tags: ["Event"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
                summary: "Get Unconnected Peserta by Event ID",
            },
        },
        getUnconnectedPesertaHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Event"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
                body: $ref("createEventSchema"),
            },
        },
        updateEventHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Event"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        deleteEventHandler
    )
}

export default eventRoutes;