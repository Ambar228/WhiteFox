import React, {Component} from 'react';
import {authRoutes, publicRoutes} from "../routes";
import path from "path";
import {ADMIN_ROUTE} from "../utils/consts";
import {Routes, Route} from "react-router-dom-v5-compat";
import {User} from "../models/User";

export type AboutProps = AboutPropsState & AboutPropsDispatch & AboutPropsOwn


export type AboutPropsState = {
    isAuth: boolean
    user: User
}

export type AboutPropsDispatch = {

}

export type AboutPropsOwn = {

}

const AppRouter = (props: AboutProps) => {
    console.log(props)
    return (
        <Routes>
            {props.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {/*<Route key={authRoutes.map({path, Component})}/>*/}
        </Routes>
    );
};

export default AppRouter;