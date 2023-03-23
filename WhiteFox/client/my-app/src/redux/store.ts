import {combineReducers, createStore} from "redux";
import UserReducer from "./reducers/UserReducer";
import {configureStore} from "@reduxjs/toolkit";

let rootReducers = combineReducers({
    userReducer: UserReducer,
})

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;


let store = configureStore({reducer: rootReducers});

export default store;