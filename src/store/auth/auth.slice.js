import { createSlice } from "@reduxjs/toolkit";


const initialState = {
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
            console.log("STATE", action.payload)
        },
        setUserUnAuthenticated: (state, action) => {
            state.user = null;
            state.isAuthenticated = false
            console.log("STATE", action.payload)
        }
    }
});

export const { setUserAuthenticated, setUserUnAuthenticated } = authSlice.actions


export default authSlice.reducer;