import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {BrowserRouter, NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Routes, useLocation, useNavigate} from "react-router-dom-v5-compat";
import {User} from "../models/User";
import {$host} from "../http";
import jwt_decode from "jwt-decode";


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

const Authorization = (props: AboutProps) => {

    const navigate = useNavigate();

    const user = props

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const click = async () => {
        try {

            if (isLogin) {
                await $host.post('api/user/login', {email, password}).then((response) => setToken(response.data.token));
                localStorage.setItem('token', token)
                user.changeUserType(jwt_decode(token))
                user.changeIsAuthType(true);
            } else {
                await $host.post('api/user/registration', {email, password, role: 'USER'}).then((response) =>  setToken(response.data.token));
                localStorage.setItem('token', token)
                user.changeUserType(jwt_decode(token))
                user.changeIsAuthType(true);
            }
            navigate(SHOP_ROUTE)
        }
        catch (e: any) {
        }
    }
    return (

        <BrowserRouter>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}>
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form>
                        <Form.Control className="mt-4" placeholder="Введите ваш email" value={email}
                                      onChange={e => setEmail(e.target.value)}/>
                        <Form.Control className="mt-4" placeholder="Введите ваш пароль" value={password}
                                      onChange={p => setPassword(p.target.value)}/>
                        <Row className="p-lg-3">
                            {isLogin ?
                                <div>
                                    Нету аккаунта?
                                    <NavLink
                                        to={REGISTRATION_ROUTE}
                                        onClick={() => window.location.replace(REGISTRATION_ROUTE)}> Зарегистрируйте
                                    </NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт?
                                    <NavLink to={LOGIN_ROUTE}
                                             onClick={() => window.location.replace(LOGIN_ROUTE)}> Войдите
                                    </NavLink>
                                </div>
                            }
                            <Button style={{height: '40px', width: '125px', position: 'absolute', right: 50}}
                                    onClick={click}>
                                {isLogin ?
                                    'Войти' :
                                    'Регистрация'
                                }
                            </Button>
                        </Row>
                    </Form>
                </Card>

            </Container>
        </BrowserRouter>
    );
};

export default Authorization;