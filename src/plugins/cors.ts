import { FastifyInstance } from "fastify"
import cors from '@fastify/cors'

const corsOption = {
    origin: [process.env.FRONTEND_URL || 'http://localhost:3000'],
    credentials: true,
}


export function registerCorsPlugin(app: FastifyInstance) {
    app.register(cors, corsOption)
}