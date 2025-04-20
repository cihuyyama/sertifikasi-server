import { FastifyInstance } from "fastify";
import { programSchemas } from "./modules/program/program.schema";
import programRoutes from "./modules/program/program.route";
import { eventSchemas } from "./modules/event/event.schema";
import eventRoutes from "./modules/event/event.route";
import { notulensiSchemas } from "./modules/notulensi/notulensi.schema";
import notulensiRoutes from "./modules/notulensi/notulensi.route";
import { userSchemas } from "./modules/user/user.schema";
import { authRoutes, userRoutes } from "./modules/user/use.route";
import { googleOAuth2Routes } from "./modules/oauth2/google/google.route";

export async function serverRoutes(app: FastifyInstance) {
    for (const schema of [
        ...programSchemas,
        ...eventSchemas,
        ...notulensiSchemas,
        ...userSchemas,
    ]) {
        app.addSchema(schema)
    }

    app.get('/', async () => {
        return { health: 'Ok' }
    })

    app.register(authRoutes, { prefix: 'auth' })
    app.register(googleOAuth2Routes, { prefix: '/oauth2' });
    app.register(userRoutes, { prefix: 'api/v1/users' })
    app.register(programRoutes, { prefix: 'api/v1/programs' })
    app.register(eventRoutes, { prefix: 'api/v1/events' })
    app.register(notulensiRoutes, { prefix: 'api/v1/notulensi' })
}