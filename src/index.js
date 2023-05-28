import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./redux-saga/postsState";
import commentsReducer from "./redux-saga/commentsState";
import rootSaga from "./redux-saga/RootSaga";
import 'bootstrap/dist/css/bootstrap.min.css';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    },
    middleware: [saga]
});
saga.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

