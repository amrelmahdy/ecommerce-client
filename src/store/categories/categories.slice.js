import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './categories.actions';


const initialState = {
    categories: {
        data: [],
        loading: false,
        error: false
    }
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.categories.loading = true;
            state.categories.data = [];

        }).addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories.loading = false;
            state.categories.data = action.payload
        }).addCase(fetchCategories.rejected, (state, action) => {
            state.categories.loading = false;
            state.categories.data = [];
            state.categories.error = true;
        })
    }
})

export default categoriesSlice.reducer;