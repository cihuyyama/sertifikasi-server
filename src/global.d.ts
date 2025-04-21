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

type GoogleToken = {
    access_token: string
    expires_in: number
    scope: string
    token_type: string
    expires_at: number
}

export type UserPayload = {
    id: string
    username: string
    email?: string
    role: Role
    GoogleToken?: GoogleToken
    picture?: string
}

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: UserPayload
        peserta: PesertaPayload
    }
}