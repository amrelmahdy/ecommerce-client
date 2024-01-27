import axios from 'axios';
import { httpClient } from './http';

export const getCurrentLocation = async (lat, lon) => {
    const { data } = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    return data
}


export const addShippingAddress = async (address) => {
    const { data } = await httpClient.post("addresses", address)
    return data
}

export const getAddress = async (addressId) => {
    const { data } = await httpClient.get(`addresses/${addressId}`);
    return data
}

export const deleteAddress = async (addressId) => {
    const { data } = await httpClient.delete(`addresses/${addressId}`);
    return data
}


export const setDefaultAddress = async (addressId) => {
    const { data } = await httpClient.post("addresses/default", { addressId })
    return data
}

