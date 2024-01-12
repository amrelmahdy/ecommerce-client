
import { createSlice } from '@reduxjs/toolkit'
import { fetchVendors } from './vendors.actions'

const initialState = {
    vendors: {
        data: [],
        loading: true,
        error: false,
    }
}




const vendorsSlice = createSlice({
    name: 'vendors',
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchVendors.pending, (state, action) => {
            state.vendors.loading = true
            state.vendors.data = [];
            state.vendors.error = false;
        }).addCase(fetchVendors.fulfilled, (state, action) => {
            state.vendors.loading = false
            state.vendors.data = action.payload;
            state.vendors.error = false;
        }).addCase(fetchVendors.rejected, (state, action) => {
            state.vendors.loading = false;
            state.vendors.data = [];
            state.vendors.error = true;
        })
    }
})

export default vendorsSlice.reducer;