import { http } from "./http"

export const keysApi = { 
    getPublicKeyByUserId: (userId: string) => http.get('/keys/public/${userId}')
}