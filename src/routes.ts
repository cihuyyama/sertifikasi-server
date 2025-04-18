import { FastifyInstance } from "fastify";
import { programSchemas } from "./modules/program/program.schema";
import programRoutes from "./modules/program/program.route";
import { eventSchemas } from "./modules/event/event.schema";
import eventRoutes from "./modules/event/event.route";

export async function serverRoutes(server: FastifyInstance) {
    for (const schema of [
        ...programSchemas,
        ...eventSchemas,
    ]) {
        server.addSchema(schema)
    }

    server.register(programRoutes, { prefix: 'api/v1/programs' })
    server.register(eventRoutes, { prefix: 'api/v1/events' })
}