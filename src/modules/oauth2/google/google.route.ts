import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { googleLoginHandler } from './google.controller';


export function googleOAuth2Routes(
    app: FastifyInstance,
    options: FastifyPluginOptions,
) {
    app.get(
        '/google/callback',
        {
            schema: {
                tags: ['OAuth2'],
            }
        },
        googleLoginHandler
    );
}