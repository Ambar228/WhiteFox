import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {TypeObject} from "../models/TypeObject";
import TypeRouterContainer from "../components/TypeRouterContainer";
import DishRouterContainer from "../components/DishRouterContainer";
import {$host} from "../http";
import {DishObject} from "../models/DishObject";
import DishItem from "../models/DishItem";
import {DISH_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom-v5-compat";


export type AboutTypeProps = AboutPropsTypeState & AboutPropsTypeDispatch


export type AboutPropsTypeState = {
    type: Array<TypeObject>,
    selectedType: TypeObject
}

export type AboutPropsTypeDispatch = {
    setSelectedType: (selectedType: TypeObject) => void
    setTypes: (type: Array<TypeObject>) => void
}

const Shop = (props: AboutTypeProps) => {

    const [types, setTypes] = useState([{id: 0, name: ''}])
    const [dishes, setDishes] = useState([{id: 0, name: '', compound: '', price: 0, img: '', typeId: 0}])

    const navigate = useNavigate();

    const setStates = () => {
        $host.get('api/type')
            .then((response) => setTypes(response.data))
            .catch((error: any) => {
                console.error(error);
            })
        $host.get('api/dish')
            .then((response) => setDishes(response.data.rows))
            .catch((error: any) => {
                console.error(error);
            })
    }

    const filterProducts = (id: number) => {
        const filteredDishes = dishes.filter(p => p.typeId == id)
        setDishes(filteredDishes)
    }

    useEffect(() => {
        setStates()
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    {/*<TypeRouterContainer />*/}
                    <ListGroup>
                        {types.map(t =>
                            <ListGroupItem
                                style={{cursor: 'pointer'}}
                                onClick={() => filterProducts(t.id)}
                                key={t.id}
                            >
                                {t.name}
                            </ListGroupItem>
                        )}
                    </ListGroup>
                </Col>
                <Col md={9}>
                    {/*<DishRouterContainer/>*/}
                    <Row className="mt-2">
                        {dishes.map(dish =>
                            // <DishItem key={dish.id} dish={dish}/>
                            <Col md={3} onClick={() => navigate(DISH_ROUTE + '/' + dish.id)}>
                                <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                                    <Image width={150} height={150} src={dish.img}/>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: 1,
                                        padding: 1
                                    }}>
                                        <div style={{flex: 1}}>
                                            <div style={{margin: 0}}>
                                                {dish.name}
                                            </div>
                                            <div style={{margin: 0}}>
                                                {dish.compound}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;