import { GoogleOauth2Response } from "../../../utils/types";
import PesertaRepository from "../../peserta/peserta.repository";

class GoogleOAuth2Service {
    static async loginUser(access_token: string) {
        const user = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + access_token
            },
        })
    
        const userData: GoogleOauth2Response = await user.json()

        const peserta = await PesertaRepository.FindByEmail(userData.email)
        if (!peserta) {
            const newPeserta = await PesertaRepository.Insert({
                email: userData.email,
                name: userData.name,
                picture: userData.picture,
                providerId: userData.id,
            })

            return newPeserta
        }

        return peserta
    }
}

export default GoogleOAuth2Service;