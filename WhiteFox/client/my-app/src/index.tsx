import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {changeIsAuthType, changeUserType} from "./redux/reducers/UserReducer";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const apiUrl = process.env.REACT_APP_API_URL

console.log(apiUrl)

root.render(
    <Provider store={store}>
        <App isAuth={false} user={{id: 1, email: "", role: "", password: ""}} changeUserType={changeUserType} changeIsAuthType={changeIsAuthType}/>
    </Provider>
);

