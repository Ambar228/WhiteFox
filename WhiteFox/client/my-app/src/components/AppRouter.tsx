import React, {Component} from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Routes, Route} from "react-router-dom-v5-compat";
import {User} from "../models/User";
import ShopRouterContainer from "./ShopRouterContainer";
import {SHOP_ROUTE} from "../utils/consts";

export type AboutProps = AboutPropsState & AboutPropsDispatch & AboutPropsOwn


export type AboutPropsState = {
    isAuth: boolean
    user: User
}

export type AboutPropsDispatch = {
    changeUserType: (user: User) => void
    changeIsAuthType: (isAuth: boolean) => void
}

export type AboutPropsOwn = {

}

const AppRouter = (props: AboutProps) => {

    const rendered = false;

    return (
        <Routes>
            {props.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component
                    isAuth={props.isAuth}
                    user={props.user}
                    changeUserType={props.changeUserType}
                    changeIsAuthType={props.changeIsAuthType}
                />}/>
            )
            }
            {!rendered &&
            <Route key={SHOP_ROUTE} path={SHOP_ROUTE} element={<ShopRouterContainer/>}/>
            }
            {/*<Route key={authRoutes.map({path, Component})}/>*/}
        </Routes>
    );
};

export default AppRouter;