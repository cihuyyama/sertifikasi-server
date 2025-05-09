import { FastifyInstance } from "fastify";
import { $ref } from "./vendor.schema";
import { createVendorHandler, deleteVendorHandler, getAllVendorsHandler, getVendorByIdHandler, updateVendorHandler } from "./vendor.controller";

async function vendorRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["Vendor"],
                body: $ref("createVendorSchema"),
            },
        },
        createVendorHandler
    )

    server.get(
        "/",
        {
            schema: {
                tags: ["Vendor"],
                querystring: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        email: { type: "string" },
                        phone: { type: "string" },
                    },
                },
            },
        },
        getAllVendorsHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Vendor"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        getVendorByIdHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Vendor"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
                body: $ref("createVendorSchema"),
            },
        },
        updateVendorHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Vendor"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        deleteVendorHandler
    )
}

export default vendorRoutes;