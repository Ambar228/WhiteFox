import React from 'react';
import userReducer from "../redux/reducers/UserReducer";
import UserReducer from "../redux/reducers/UserReducer";
import {AboutProps} from "./AppRouter";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {InitialStateUserType} from "../types/InitialStateUserType";
import {User} from "../models/User";

const NavBar = (props: AboutProps) => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{color: 'white'}} href={SHOP_ROUTE}>Белый лис</Navbar.Brand>
                {props.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button variant={"outline-light"} className="ms-lg-3">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="me-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} href={REGISTRATION_ROUTE}>Авторизация</Button>
                    </Nav>

                }
            </Container>
        </Navbar>
    );
};

export default NavBar;