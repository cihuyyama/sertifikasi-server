import { FastifyInstance } from "fastify";

export async function serverRoutes(server: FastifyInstance) {
    for (const schema of [
        
    ]) {
        server.addSchema(schema)
    }

    // server.register(authRoutes, { prefix: 'api/v1/auth' })
}