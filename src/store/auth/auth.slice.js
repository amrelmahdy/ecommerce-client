import { createSlice } from "@reduxjs/toolkit";
import { addProductToWishList, fetchCurrentUserDetails } from "./auth.actions";


const initialState = {
    loading: false,
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserAuthenticated: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true
        },
        setUserUnAuthenticated: (state, action) => {
            state.user = null;
            state.isAuthenticated = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUserDetails.pending, (state, action) => {
            state.loading = true;
        }).addCase(fetchCurrentUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        }).addCase(fetchCurrentUserDetails.rejected, (state, action) => {
            state.loading = false;
        }).addCase(addProductToWishList.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
});

export const { setUserAuthenticated, setUserUnAuthenticated } = authSlice.actions


export default authSlice.reducer;