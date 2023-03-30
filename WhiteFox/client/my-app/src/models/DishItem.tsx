import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {DishObject} from "./DishObject";
import {DISH_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom-v5-compat";
import React from "react";

export type DishProps = {
    dish: DishObject
}

const DishItem = (props: DishProps) => {

    const navigate = useNavigate();

    return (
        <Col md={3} onClick={() => navigate(DISH_ROUTE + '/' + props.dish.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={props.dish.img}/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: 1,
                    padding: 1
                }}>
                    <div style={{flex: 1}}>
                        <div style={{margin: 0}}>
                            {props.dish.name}
                        </div>
                        <div style={{margin: 0}}>
                            {props.dish.compound}
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    );
}

export default DishItem;