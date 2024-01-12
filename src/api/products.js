import { httpClient } from './http';

export const getProducts = async (query = "") => {
    const { data } = await httpClient.get("products/shop" + query)
    return data
}


export const getProductDetails = async (slug) => {
    console.log(slug)
    const { data } = await httpClient.get(`products/${slug}`)
    return data
}


export const getRelatedProducts = async (id) => {
    const { data } = await httpClient.get(`products/${id}/related`)
    return data
    
}