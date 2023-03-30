import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {DishObject} from "../models/DishObject";
import {$authHost, $host} from "../http";
import {useParams} from "react-router-dom-v5-compat";

const Dish = () => {

    const [dish, setDish] = useState({name: '', img: '', compound: '', price: 0});

    const {id} = useParams();

    useEffect(() => {
        $host.get('api/dish/' + id)
            .then((response) => setDish(response.data))
            .catch((error: any) => {
                console.error(error);
            })
        }, [])

    const add = () => {

        $authHost.post('api/basket/' + id).then(response => alert(`Товар ` + dish.name + ` был добавлен в вашу корзину!`))
    }

    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <img width={300} height={300} src={dish.img}/>
                </div>
                <div style={{marginRight: 300}}>
                    <h2 style={{margin: 0, textAlign: 'center', width: 300}}>{dish.name}</h2>
                    <p style={{margin: 0, textAlign: 'center', width: 300}}>{dish.compound}</p>
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    <h3>{dish.price.toFixed(2)} BYN </h3>
                    <Button variant={"outline-dark"} onClick={add}>Добавить в корзину</Button>
                </div>
            </div>
        </Container>
    );
};

export default Dish;