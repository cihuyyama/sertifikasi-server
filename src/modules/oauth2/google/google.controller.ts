import { FastifyReply, FastifyRequest } from "fastify";
import GoogleOAuth2Service from "./google.service";
import { Role } from "../../../utils/types";

export async function googleLoginHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const result = await request.server.GoogleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);

    const userData = await GoogleOAuth2Service.loginUser(result.token.access_token);

    reply.setCookie("google_access_token", result.token.access_token, {
        path: "/",
        domain: process.env.DOMAIN || "localhost",
        httpOnly: true,
        secure: true,
    })
    
    const pesertaPayload = {
        id: userData.id,
        username: userData.name,
        email: userData.email,
        picture: userData.picture || undefined,
        google_access_token: result.access_token,
        role: Role.PESERTA
    }
    
    const token = request.jwt.sign(pesertaPayload, {
        expiresIn: result.expires_in,
    })
    
    reply.setCookie("access_token", token, {
        path: "/",
        domain: process.env.DOMAIN || "localhost",
        httpOnly: true,
        secure: true,
    })

    reply.send({
        data: userData,
        message: 'User logged in successfully',
        status: 200,
    })

    // reply.redirect('http://localhost:3000/dashboard')
}

// export async function googleLogoutHandler(
//     request: FastifyRequest,
//     reply: FastifyReply,
// ) {
//     const result = await request.server.GoogleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);

//     const userData = await GoogleOAuth2Service.logoutUser(result.access_token);

//     reply.send({
//         data: userData,
//         message: 'User logged out successfully',
//         status: 200,
//     })
// }