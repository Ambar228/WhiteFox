import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom-v5-compat";
import {User} from "../models/User";


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

const NavBar = (props: AboutProps) => {

    const navigate = useNavigate();

    const logOut = () => {
        props.changeUserType({email: "", id: 0, password: "", role: ""})
        props.changeIsAuthType(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{color: 'white'}} href={SHOP_ROUTE}>Белый лис</Navbar.Brand>
                {props.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {props.user.role == "ADMIN" ?
                            <div>
                                <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ
                                    панель</Button>
                                <Button variant={"outline-light"} onClick={() => logOut()}
                                        className="ms-lg-3">Выйти</Button>
                                <Button variant={"outline-light"} onClick={() => navigate(BASKET_ROUTE)}
                                        className="ms-lg-3">Корзина</Button>
                            </div>

                            :
                            <div>
                                <Button variant={"outline-light"} onClick={() => logOut()}
                                        className="ms-lg-3">Выйти</Button>
                                <Button variant={"outline-light"} onClick={() => navigate(BASKET_ROUTE)}
                                        className="ms-lg-3">Корзина</Button>
                            </div>
                        }
                    </Nav>
                    :
                    <Nav className="me-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>

                }
            </Container>
        </Navbar>
    );
};

export default NavBar;