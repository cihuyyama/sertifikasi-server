import { JWT } from '@fastify/jwt'
import { Role } from './utils/types';

declare module 'fastify' {
    interface FastifyRequest {
        jwt: JWT
    }
    export interface FastifyInstance {
        authenticate: any
        GoogleOAuth2: OAuth2Namespace;
    }
}

export type UserPayload = {
    id: string
    username: string
    email?: string
    role: Role
    google_access_token?: string
    picture?: string
}

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: UserPayload
        peserta: PesertaPayload
    }
}