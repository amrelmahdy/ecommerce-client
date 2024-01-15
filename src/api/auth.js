import { httpClient } from './http';

export const login = async ( username, password ) => {
    const { data } = await httpClient.post("auth/login", { username, password })
    return data
}

export const refreshAccessToken = async (refreshToken) => {
    const { data } = await httpClient.post("auth/refresh", { refresh: refreshToken })
    return data
}