import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../shop/shop.actions';


const initialState = {
    products: {
        data: [],
        categoryFamily: [],
        loading: true,
    }
}

const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    // reducers: {
    //     getAllProducts: {
    //         reducer(state, action) {
    //             state.products = action.payload
    //             // console.log("actions", actions)
    //             // console.log(current(state));
    //         },
    //         prepare() {
    //             return {
    //                 payload: {
    //                     products: [{ id: 4 }]
    //                 }
    //             }
    //         }
    //     },
    // },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.products.loading = true;
            state.products.data = [];
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.loading = false;
            state.products.data = action.payload.data
            state.products.categoryFamily = action.payload.categoryFamily
        })
    }
},)

export const { getAllProducts } = shopSlice.actions;

export default shopSlice.reducer