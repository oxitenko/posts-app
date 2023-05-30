import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./redux-saga/postsState";
import commentsReducer from "./redux-saga/commentsState";
import usersReducer from "./redux-saga/usersState"
import rootSaga from "./redux-saga/RootSaga";
import 'bootstrap/dist/css/bootstrap.min.css';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        users: usersReducer
    },
    middleware: [saga]
});
saga.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>
);

