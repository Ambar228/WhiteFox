import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {BrowserRouter, NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Routes, useLocation} from "react-router-dom-v5-compat";

const Authorization = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE

    return (

        <BrowserRouter>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}>
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form>
                        <Form.Control className="mt-4" placeholder="Введите ваш email"/>
                        <Form.Control className="mt-4" placeholder="Введите ваш пароль"/>
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
                            <Button style={{height: '40px', width: '125px', position: 'absolute', right: 50}}>
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