import React from 'react';

import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom-v5-compat";
import RouterContainer from "./components/AppRouterContainer";
import Navbar from "./components/NavBar"
import NavBarContainer from "./components/NavBarContainer";

const App = () => {
    return (
        <BrowserRouter>
            <NavBarContainer />
            <RouterContainer/>
        </BrowserRouter>
    );
};

export default App;
