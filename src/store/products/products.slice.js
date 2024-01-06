import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductDetails, fetchProducts, fetchRelatedProducts } from './products.actions';


const initialState = {
    products: {
        data: [],
        loading: true,
    },
    product: {
        data: null,
        loading: true,
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
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.loading = false;
            state.products.data = action.payload
        }).addCase(fetchProductDetails.pending, (state, action) => {
            state.product.loading = true;
            state.product.data = null
        }).addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.product.loading = false;
            state.product.data = action.payload;
        }).addCase(fetchRelatedProducts.pending, (state, action) => {
            state.product.loading = true;
            state.product.related = []
        }).addCase(fetchRelatedProducts.fulfilled, (state, action) => {
            state.product.loading = false;
            state.product.related = action.payload;
        })
    }
},)


export default productsSlice.reducer