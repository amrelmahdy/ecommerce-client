import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVendors } from "../../api/vendors";

export const fetchVendors = createAsyncThunk("vendors/fetchVendors", async (_, { rejectWithValue }) => {
    try {
        const vendors = await getVendors();
        return vendors
    } catch(error){
        return rejectWithValue(error.message)
    }
})