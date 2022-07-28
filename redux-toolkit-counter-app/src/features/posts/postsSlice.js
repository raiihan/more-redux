import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk('posts/fetchPost', async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data;
})

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        })
    }
});

export default postSlice.reducer;