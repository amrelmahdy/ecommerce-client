import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToWishList } from "../../api/user";
import { getCurrentUser } from "../../api/auth";

export const addToProductWishList = createAsyncThunk("user/addToWishList", async (productId, { rejectWithValue, dispatch }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const done = await addToWishList(productId);
            dispatch(fetchCurrentUserDetails())
            resolve(done);
        } catch (error) {
            reject(error.message)
        }
    })
});

export const fetchCurrentUserDetails = createAsyncThunk("user/fetchCurrentUserDetails", async (_, { rejectWithValue }) => {
    try {
        const user = await getCurrentUser();
        return user;

    } catch (error) {
        return rejectWithValue(error.message)
    }
});


