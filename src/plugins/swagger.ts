import { FastifyInstance } from "fastify";

export function registerSwaggerProvider(app: FastifyInstance) {
    app.register(import("@fastify/swagger"), {
        swagger: {
            info: {
                title: "SERTIFIKASI API",
                description: "",
                version: "0.1.0",
            },
            externalDocs: {
                url: "",
                description: "Find more info here",
            },
            host: "localhost:5000",
            schemes: ["http", "https"],
            consumes: ["application/json", "multipart/form-data"],
            produces: ["application/json"],
        }
    });
    
    app.register(import("@fastify/swagger-ui"), {
        routePrefix: "/docs",
        uiConfig: {
            deepLinking: false,
        },
        uiHooks: {
            onRequest: (request, reply, next) => {
                next()
            },
            preHandler: (request, reply, next) => {
                next()
            },
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
    })

    app.ready(err => {
        if (err) throw err
        app.swagger()
    })
}