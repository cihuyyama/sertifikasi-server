import { FastifyInstance } from "fastify";
import { $ref } from "./event.schema";
import { createEventHandler, deleteEventHandler, getAllEventsHandler, getEventByIdHandler, updateEventHandler } from "./event.controller";

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