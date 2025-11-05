import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const keysApi = {
    generateKeyPair: (userId: string) => axios.post(`${BASE_URL}/keys/pair/generate/${userId}`),
    getPublicKeyByUserId: (userId: string) => axios.get(`${BASE_URL}/keys/public/${userId}`),
}