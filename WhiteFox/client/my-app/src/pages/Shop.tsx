import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {TypeObject} from "../models/TypeObject";
import TypeRouterContainer from "../components/TypeRouterContainer";
import DishRouterContainer from "../components/DishRouterContainer";
import {$host} from "../http";
import {DishObject} from "../models/DishObject";


export type AboutTypeProps = AboutPropsTypeState & AboutPropsTypeDispatch


export type AboutPropsTypeState = {
    type:  Array<TypeObject>,
    selectedType: TypeObject
}

export type AboutPropsTypeDispatch = {
    setSelectedType: (selectedType: TypeObject) => void
    setTypes: (type: Array<TypeObject>) => void
}

const Shop = (props: AboutTypeProps) => {

    const types = props

    console.log(types)

    useEffect(() => {
        $host.get('api/type')
            .then((response) => types.setTypes(response.data))
            .catch((error: any) => {
            console.error(error);
        })
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeRouterContainer />
                </Col>
                <Col md={9}>
                    <DishRouterContainer/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;