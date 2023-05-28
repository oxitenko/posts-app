import {createSlice} from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        error: "",
        isLoading: false
    },
    reducers: {
        getCommentsFetch: (state, action) => {
            state.isLoading = true;
        },
        getCommentSuccess: (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
        },
        getCommentsFailure: (state, action) => {
            state.error = "Error"
            state.isLoading = false;
        }
    }
})

export const {getCommentsFetch, getCommentSuccess, getCommentsFailure} = commentsSlice.actions;

export default commentsSlice.reducer;