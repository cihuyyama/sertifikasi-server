import 'dotenv/config'
import fastify from "fastify";
import { serverRoutes } from "./routes";
import { registerGoogleOAuth2Provider } from "./plugins/oauth2";
import { registerSwaggerProvider } from "./plugins/swagger";
import { registerAuthMiddleware } from "./middlewares/auth";
import { registerCorsPlugin } from "./plugins/cors";
import { registerJwtPlugin } from "./plugins/jwt";
import { registerCookiePlugin } from './plugins/cookie';
import { registerMultipartPlugin } from './plugins/multipart';
import mailerPlugin, { FastifyMailer } from '@dzangolab/fastify-mailer';
import { mailerConfig, sendSMTPEmail } from './plugins/mailer';


const app = fastify({
    bodyLimit: 10485760, // 10MB
})

registerSwaggerProvider(app)
registerCorsPlugin(app)
registerJwtPlugin(app)
registerAuthMiddleware(app)
registerCookiePlugin(app)
registerGoogleOAuth2Provider(app);
registerMultipartPlugin(app)

app.register(mailerPlugin, mailerConfig)

app.post('/send-email', async (req, res) => {
    const mailResponse = await sendSMTPEmail(
        app,
        'miqbalalhabib@gmaail.com',
        'Test Email',
        
    )
})
    

async function start() {
    serverRoutes(app)

    try {
        await app.listen({ port: 5000, host: '0.0.0.0' })
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start()