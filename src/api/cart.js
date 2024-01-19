import { httpClient } from './http';

export const createCart = async (userId) => {
    const { data } = await httpClient.post("/cart", { userId })
    return data
}


export const getCart = async () => {
    const { data } = await httpClient.get("/cart")
    return data
}

export const addToCart = async (productId, quantity) => {
    const { data } = await httpClient.post("/cart/add", { productId, quantity });
    return data
}