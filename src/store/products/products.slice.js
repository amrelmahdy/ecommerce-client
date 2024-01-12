import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductDetails, fetchProducts, fetchRelatedProducts } from './products.actions';


const initialState = {
    products: {
        data: [],
        loading: true,
        error: false
    },
    product: {
        data: null,
        loading: true,
        error: false,
        related: []
    }
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.products.loading = true;
            state.products.data = [];
            state.products.error = false;
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.loading = false;
            state.products.error = false;
            state.products.data = action.payload
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.products.loading = false;
            state.products.error = true;
            state.products.data = [];
        }).addCase(fetchProductDetails.pending, (state, action) => {
            state.product.error = false;
            state.product.loading = true;
            state.product.data = null
        }).addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.product.loading = false;
            state.product.data = action.payload;
        }).addCase(fetchProductDetails.rejected, (state, action) => {
            state.product.loading = false;
            state.product.data = null;
            state.product.error = true;
        }).addCase(fetchRelatedProducts.pending, (state, action) => {
            state.product.loading = true;
            state.product.related = []
        }).addCase(fetchRelatedProducts.fulfilled, (state, action) => {
            state.product.loading = false;
            state.product.related = action.payload;
        }).addCase(fetchRelatedProducts.rejected, (state, action) => {
            state.product.loading = false;
            state.product.related = [];
            state.product.error = true;
        })
    }
},)


export default productsSlice.reducer;