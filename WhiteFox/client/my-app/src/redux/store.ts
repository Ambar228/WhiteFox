import {combineReducers, createStore} from "redux";
import UserReducer from "./reducers/UserReducer";
import {configureStore} from "@reduxjs/toolkit";
import TypeReducer from "./reducers/TypeReducer";
import DishReducer from "./reducers/DishReducer";

let rootReducers = combineReducers({
    userReducer: UserReducer,
    typeReducer: TypeReducer,
    dishReducer: DishReducer
})

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;


let store = configureStore({reducer: rootReducers});

export default store;