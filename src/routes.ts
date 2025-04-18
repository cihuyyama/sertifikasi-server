import { FastifyInstance } from "fastify";
import { programSchemas } from "./modules/program/program.schema";
import programRoutes from "./modules/program/program.route";

export async function serverRoutes(server: FastifyInstance) {
    for (const schema of [
        ...programSchemas,
    ]) {
        server.addSchema(schema)
    }

    server.register(programRoutes, { prefix: 'api/v1/programs' })
}