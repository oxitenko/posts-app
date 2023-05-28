import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsSuccess } from "./postsState";
import { getCommentSuccess } from "./commentsState";
import axios from "axios";

function* workGetPostsFetch() {
    const posts = yield call(() => axios.get('https://jsonplaceholder.typicode.com/posts'));
    const neededPosts = posts.data.slice(0, 11);
    yield put(getPostsSuccess(neededPosts));
}

function* workGetCommentsFetch(action) {
    const id = action.payload;
    const comments = yield call(() => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`));
    yield put(getCommentSuccess(comments))
}

function* rootSaga() {
    yield takeEvery("posts/getPostsFetch", workGetPostsFetch)
    yield takeEvery("comments/getCommentsFetch", workGetCommentsFetch)
}

export default rootSaga;