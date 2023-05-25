import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsSuccess } from "./postsState";
import axios from "axios";

function* workGetPostsFetch() {
    const posts = yield call(() => axios.get('https://jsonplaceholder.typicode.com/posts'));
    yield put(getPostsSuccess(posts));
}
function* postsSaga() {
    yield takeEvery("posts/getPostsFetch", workGetPostsFetch)
}

export default postsSaga;