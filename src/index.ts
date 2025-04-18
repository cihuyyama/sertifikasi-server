import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import 'dotenv/config'
import fastifyJwt from "@fastify/jwt";
import { UserPayload } from "./global";
import fCookie from '@fastify/cookie'
import { serverRoutes } from "./routes";

const server = fastify()

server.register(import("@fastify/swagger"), {
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

server.register(import("@fastify/swagger-ui"), {
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

server.register(cors, {
    origin: [process.env.FRONTEND_URL || 'http://localhost:3000'],
    credentials: true,
})

server.ready(err => {
    if (err) throw err
    server.swagger()
})

server.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'supersecret'
})

server.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
        const token = request.cookies?.access_token
        const authHeader = request.headers.authorization

        if (!token && !authHeader) {
            return reply.status(401).send({ message: 'Authentication required' })
        }

        const jwtToken = token || authHeader?.split(' ')[1]

        if (!jwtToken) {
            return reply.status(401).send({ message: 'Invalid token' })
        }

        try {
            const decoded = request.jwt.verify(jwtToken) as UserPayload
            request.user = decoded
        } catch (e) {
            return reply.status(401).send({ message: 'Invalid or expired token' })
        }

    }
);

server.addHook('preHandler', (req, res, next) => {
    req.jwt = server.jwt
    next()
})

server.register(fCookie, {
    secret: process.env.COOKIE_SECRET || 'supersecret',
    hook: 'preHandler',
})

server.get('/', async (request, reply) => {
    return { hello: 'world' }
})

async function start() {
    serverRoutes(server)

    try {
        await server.listen({ port: 5000, host: '0.0.0.0' })
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start()