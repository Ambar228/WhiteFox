import {Row} from "react-bootstrap";
import {DishObject} from "../models/DishObject";
import DishItem from "../models/DishItem";
import {$host} from "../http";
import {useEffect} from "react";

export type AboutDishProps = AboutPropsDishState & AboutPropsDishDispatch & AboutPropsOwn


export type AboutPropsDishState = {
    dishes:  Array<DishObject>,
}

export type AboutPropsDishDispatch = {
    setDishes: (dishes: Array<DishObject>) => void
}

export type AboutPropsOwn = {

}


const DishList = ((props: AboutDishProps) => {

    useEffect(() => {
            $host.get('api/dish')
                .then((response) => props.setDishes(response.data.rows))
                .catch((error: any) => {
                    console.error(error);
                })
        }, [])

    return (
        <Row className="d-flex">
            {props.dishes.map(dish =>
                <DishItem key={dish.id} dish={dish}/>
            )}
        </Row>
    )
})

export default DishList;