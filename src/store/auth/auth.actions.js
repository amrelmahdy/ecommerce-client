import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToWishList } from "../../api/user";
import { getCurrentUser } from "../../api/auth";
import { toggleLoading } from "../app/app.slice";

export const addProductToWishList = createAsyncThunk("user/addProductToWishList", async (productId, { rejectWithValue }) => {
    try {
        const updatedUser = await addToWishList(productId);
        return updatedUser
    } catch (error) {
        rejectWithValue(error.message)
    }
});

export const fetchCurrentUserDetails = createAsyncThunk("user/fetchCurrentUserDetails", async (_, { rejectWithValue, dispatch }) => {
    try {
        dispatch(toggleLoading(true));
        const user = await getCurrentUser();
        dispatch(toggleLoading(false));

        return user;

    } catch (error) {
        return rejectWithValue(error.message)
    }
});


export const fetchShippingAddresses = createAsyncThunk("user/fetchShippingAddresses", async (_, { rejectWithValue }) => {
    try {
        const user = await getCurrentUser();
        return user;

    } catch (error) {
        return rejectWithValue(error.message)
    }
});


