import {createSlice} from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        error: "",
        isLoading: false
    },
    reducers: {
        getPostsFetch: (state, action) => {
            state.isLoading = true;
        },
        getPostsSuccess: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        },
        getPostsFailure: (state, action) => {
            state.error = "Error"
            state.isLoading = false;
        }
    },
});

export const {getPostsFetch, getPostsSuccess, getPostsFailure} = postsSlice.actions;

export default postsSlice.reducer;
