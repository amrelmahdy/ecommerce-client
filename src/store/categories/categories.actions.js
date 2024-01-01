import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../api/categories";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const categories = await getCategories();
    console.log("||||||||||||||", categories)
    return categories
})