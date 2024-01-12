import { httpClient } from "./http"

export const getVendors = async () => {
    const { data } = await httpClient.get("vendors")
    return data
}
