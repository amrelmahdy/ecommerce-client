import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../api/categories";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async (_, { rejectWithValue }) => {
    try {
        const categories = await getCategories();
        return categories
    } catch (error) {
        rejectWithValue(error.message)
    }
})