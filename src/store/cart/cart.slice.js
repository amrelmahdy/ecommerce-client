import { createSlice } from "@reduxjs/toolkit"
import { addProductTocart, fetchCart } from "./cart.actions";

const initialState = {
    items: [],
    loading: true,
    error: false
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder => {
        builder.addCase(fetchCart.pending, (state, action) => {
            state.items = [];
            state.loading =  true;
            state.error =  false;
        }).addCase(fetchCart.fulfilled, (state, action) => {
            state.items = action.payload.items;
            state.loading =  false;
            state.error =  false;
        }).addCase(fetchCart.rejected, (state, action) => {
            state.items = [];
            state.loading =  false;
            state.error =  true;
        }).addCase(addProductTocart.pending, (state, action) => {
            state.items = [];
            state.loading =  true;
            state.error =  false;
        }).addCase(addProductTocart.fulfilled, (state, action) => {
            state.items = action.payload.items;
            state.loading =  false;
            state.error =  false;
        })
    })
})

export default cartSlice.reducer;