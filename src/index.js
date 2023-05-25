import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsState";
import postsSaga from "./postsSaga";

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        posts: postsReducer
    },
    middleware: [saga]
});
saga.run(postsSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

