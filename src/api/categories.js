import { httpClient } from './http';

export const getCategories = async () => {
    const { data } = await httpClient.get("categories")
    return data
}