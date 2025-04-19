import { FastifyInstance } from "fastify";
import { programSchemas } from "./modules/program/program.schema";
import programRoutes from "./modules/program/program.route";
import { eventSchemas } from "./modules/event/event.schema";
import eventRoutes from "./modules/event/event.route";
import { notulensiSchemas } from "./modules/notulensi/notulensi.schema";
import notulensiRoutes from "./modules/notulensi/notulensi.route";

export async function serverRoutes(server: FastifyInstance) {
    for (const schema of [
        ...programSchemas,
        ...eventSchemas,
        ...notulensiSchemas,
    ]) {
        server.addSchema(schema)
    }


    server.register(programRoutes, { prefix: 'api/v1/programs' })
    server.register(eventRoutes, { prefix: 'api/v1/events' })
    server.register(notulensiRoutes, { prefix: 'api/v1/notulensi' })
}