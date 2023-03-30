import React, {useEffect, useState} from 'react';

import {BrowserRouter} from "react-router-dom-v5-compat";
import RouterContainer from "./components/AppRouterContainer";
import NavBarContainer from "./components/NavBarContainer";
import {User} from "./models/User";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";


export type AboutProps = AboutPropsState & AboutPropsDispatch & AboutPropsOwn


export type AboutPropsState = {
    isAuth: boolean
    user: User
}

export type AboutPropsDispatch = {
    changeUserType: (user: User) => void
    changeIsAuthType: (isAuth: boolean) => void
}

export type AboutPropsOwn = {}

const App = (props: AboutProps) => {

    const user = props.user
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                props.changeUserType(user)
                props.changeIsAuthType(true)
            }).finally(() => setLoading(false))
        }, 1000)
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBarContainer/>
            <RouterContainer/>
        </BrowserRouter>
    );
};

export default App;
