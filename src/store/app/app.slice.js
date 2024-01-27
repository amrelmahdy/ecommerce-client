import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    lang: 'ar'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const { toggleLoading } = appSlice.actions;
export default appSlice.reducer;
