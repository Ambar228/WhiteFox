import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateDish from "../components/modals/CreateDish";

const Admin = () => {

    const [dishVisible, setDishVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);

    const handleCreateDishModalClose = () => {
        setDishVisible(!dishVisible);
    };

    const handleCreateTypeModalClose = () => {
        setTypeVisible(!typeVisible);
    };

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDishVisible(true)}>Добавить еду</Button>
            <CreateDish show={dishVisible} onHide={handleCreateDishModalClose}/>
            <CreateType show={typeVisible} onHide={handleCreateTypeModalClose}/>
        </Container>
    );
};

export default Admin;