import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsSuccess } from "./postsState";
import axios from "axios";

function* workGetPostsFetch() {
    const posts = yield call(() => axios.get('https://jsonplaceholder.typicode.com/posts'));
    const neededPosts = posts.data.slice(0, 11);
    yield put(getPostsSuccess(neededPosts));
}
function* postsSaga() {
    yield takeEvery("posts/getPostsFetch", workGetPostsFetch)
}

export default postsSaga;