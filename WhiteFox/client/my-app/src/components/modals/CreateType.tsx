import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {TypeObject} from "../../models/TypeObject";
import {create} from "../../http/typesAPI";

export type CreateTypeProps = {
    show: boolean
    onHide: () => void
}
const CreateType = (props: CreateTypeProps) => {

    const [name, setName] = useState('')
    const addType = () => {
        create({name: name}).then(data => {
            setName('')
            props.onHide()
        })
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите название типа"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={() => props.onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={() => addType()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateType