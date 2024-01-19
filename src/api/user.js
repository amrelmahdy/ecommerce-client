import { httpClient } from './http';

export const addToWishList = async (productId) => {
    const { data } = await httpClient.post("users/user/wishlist",{ productId});
    return data
}

