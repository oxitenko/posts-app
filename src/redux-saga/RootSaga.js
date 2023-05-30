import {call, put, takeEvery, delay} from "redux-saga/effects";
import {getPostsSuccess, getPostsFailure} from "./postsState";
import {getCommentSuccess, getCommentsFailure} from "./commentsState";
import {getUsersSuccess, getUsersFailure} from "./usersState";
import axios from "axios";

function* workGetPostsFetch() {
    try {
        yield delay(500);
        const posts = yield call(() => axios.get('https://jsonplaceholder.typicode.com/posts'));
        yield put(getPostsSuccess(posts));
    } catch (e) {
        yield put(getPostsFailure("Error, can not load data from server"))
    }
}

function* workGetCommentsFetch(action) {
    try {
        yield delay(500);
        const id = action.payload;
        const comments = yield call(() => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`));
        yield put(getCommentSuccess(comments))
    } catch (e) {
        yield put(getCommentsFailure("Error, can not load data from server"))
    }
}

function* workGetUsersFetch() {
    try {
        yield delay(500);
        const users = yield call(() => axios.get(`https://jsonplaceholder.typicode.com/users`));
        yield put(getUsersSuccess(users))
    } catch (e) {
        yield put(getUsersFailure("Error, can not load data from server"))
    }
}

function* rootSaga() {
    yield takeEvery("posts/getPostsFetch", workGetPostsFetch)
    yield takeEvery("comments/getCommentsFetch", workGetCommentsFetch)
    yield takeEvery("users/getUsersFetch", workGetUsersFetch)
}

export default rootSaga;