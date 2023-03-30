import {Button, Dropdown, Form, FormControl, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {$host} from "../../http";
import {create} from "../../http/dishesAPI";

export type CreateTypeProps = {
    show: boolean
    onHide: () => void
}

const CreateDish = (props: CreateTypeProps) => {

    const [types, setTypes] = useState([{id: 0, name: ""}])

    const [name, setName] = useState('')
    const [compound, setCompound] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')

    const [selectedType, setSelectedType] = useState({id: 0, name: ""})

    useEffect(() => {
        $host.get('api/type')
            .then((response) => setTypes(response.data))
            .catch((error: any) => {
                console.error(error);
            })
    }, [])

    const addDish = () => {
        console.log(img)

        const dish = {
            name: name,
            compound: compound,
            price: price,
            rating: 0,
            img: img,
            typeId: selectedType.id
        }

        create(dish).then(data => {
            setName('')
            setPrice(0)
            setImg('')
            setCompound('')
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
                    <Dropdown>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {types.map(type =>
                                <Dropdown.Item onClick={() => setSelectedType(type)}
                                               key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                        className="mt-3"
                        placeholder="Введите название еды"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите описание еды"
                        value={compound}
                        onChange={(e) => setCompound(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите цену еды"
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите картинку"
                        value={img}
                        onPaste={(e) => setImg(e.clipboardData.getData('text'))}
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={() => props.onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={() => addDish()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateDish;