import { FastifyInstance } from "fastify";
import { $ref } from "./employee.schema";
import { createEmployeeHandler, createManyEmployeeHandler, deleteEmployeeHandler, getAllEmployeeHandler, getEmployeeByIdHandler } from "./employee.controller";

async function employeeRoutes(app: FastifyInstance) {
    app.post(
        "/",
        {
            schema: {
                tags: ["Employee"],
                body: $ref("createEmployeeSchema"),
                summary: "*Employee Role: 'Staff' / 'Trainer' / 'PJ' / 'Assessor' ",
                description: "Employee Role: 'Staff' / 'Trainer' / 'PJ' / 'Assessor' ",
            },
        },
        createEmployeeHandler
    );

    app.post(
        "/many",
        {
            schema: {
                tags: ["Employee"],
                body: $ref("createManyEmployeeSchema"),
            },
        },
        createManyEmployeeHandler
    );

    app.get(
        "/",
        {
            schema: {
                tags: ["Employee"],
                querystring: {
                    type: "object",
                    properties: {
                        search: { type: "string" },
                        sertifikasi: { type: "string" },
                        status: { type: "string" },
                    },
                },
            },
        },
        getAllEmployeeHandler
    );

    app.get(
        "/:id",
        {
            schema: {
                tags: ["Employee"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        getEmployeeByIdHandler
    );

    app.put(
        "/:id",
        {
            schema: {
                tags: ["Employee"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
                body: $ref("createEmployeeSchema"),
            },
        },
        createEmployeeHandler
    );

    app.delete(
        "/:id",
        {
            schema: {
                tags: ["Employee"],
                params: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                    },
                },
            },
        },
        deleteEmployeeHandler
    );
}

export default employeeRoutes;