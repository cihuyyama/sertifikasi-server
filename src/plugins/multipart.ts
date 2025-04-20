import fastifyMultipart from "@fastify/multipart";
import { FastifyInstance } from "fastify";

const multipartOptions = {
    attachFieldsToBody: true,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    }
}

export function registerMultipartPlugin(app: FastifyInstance) {
    app.register(fastifyMultipart, multipartOptions)
}